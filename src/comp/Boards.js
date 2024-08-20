import React, { useState } from 'react';
import { FaPlus, FaRegUserCircle } from "react-icons/fa";
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import CreateTask from './CreateTask'

const ItemType = 'DEAL';

const Boards = () => {
    const [boards, setBoards] = useState(() => {
        // Retrieve data from localStorage on initial render
        const savedBoards = localStorage.getItem('boards');
        return savedBoards ? JSON.parse(savedBoards) : [
            { id: 'board-1', title: "Qualified", total: 0, deals: [{ title: "Deal 1", contactPerson: "John Doe", organization: "Org 1", value: 100 }] },
            { id: 'board-2', title: "Contact Made", total: 0, deals: [] },
            { id: 'board-3', title: "Demo Scheduled", total: 0, deals: [] },
            { id: 'board-4', title: "Proposal Made", total: 0, deals: [] },
            { id: 'board-5', title: "Negotiations Started", total: 0, deals: [] },
        ];
    });

    const [dealForm, setDealForm] = useState({
        contactPerson: "",
        organization: "",
        title: "",
        value: "",
    });

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(null);
    const [highlightedBoard, setHighlightedBoard] = useState(null);

    const handleCreateDeal = () => {
        const createdDeal = boards.map((board, ind) => {
            if (ind === index) {
                return {
                    ...board,
                    deals: [...board.deals, dealForm]
                };
            } else {
                return board;
            }
        });
        setBoards(createdDeal);
        localStorage.setItem('boards', JSON.stringify(createdDeal));
    };

    const moveDeal = (fromBoardIndex, fromIndex, toBoardIndex, toIndex) => {
        const updatedBoards = [...boards];
        const [movedDeal] = updatedBoards[fromBoardIndex].deals.splice(fromIndex, 1);
        updatedBoards[toBoardIndex].deals.splice(toIndex, 0, movedDeal);
        setBoards(updatedBoards);
    };

    const DraggableDeal = ({ deal, index, boardIndex }) => {
        const [{ isDragging }, drag] = useDrag({
            type: ItemType,
            item: { index, boardIndex },
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        });

        const [, drop] = useDrop({
            accept: ItemType,
            hover: (draggedItem) => {
                if (draggedItem.index !== index || draggedItem.boardIndex !== boardIndex) {
                    moveDeal(draggedItem.boardIndex, draggedItem.index, boardIndex, index);
                    draggedItem.index = index;
                    draggedItem.boardIndex = boardIndex;
                }
            },
        });

        return (
            <div
                ref={(node) => drag(drop(node))}
                style={{
                    opacity: isDragging ? 0.5 : 1,
                    backgroundColor: "white",
                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                    borderRadius: "6px",
                    padding: '10px',
                    cursor: "pointer",
                    margin: "10px 0",
                    transition: 'background-color 0.3s ease'
                }}
            >
                <p style={{ fontWeight: "600", color: "black", fontSize: 20 }}>{deal?.title} Deal</p>
                <p style={{ fontWeight: "600", color: "#65686F", padding: 0, margin: "10px 0" }}>{deal?.contactPerson}, {deal?.organization}</p>
                <div style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
                    <FaRegUserCircle color="grey" size={25} />
                    <p style={{ fontWeight: "600", color: "#65686F", padding: 0, margin: "0 0 0 10px" }}>PKR{deal?.value}</p>
                </div>
            </div>
        );
    };

    const DroppableBoard = ({ board, index }) => {
        const [{ isOver }, drop] = useDrop({
            accept: ItemType,
            drop: (item) => {
                const { index: fromIndex, boardIndex: fromBoardIndex } = item;
                if (fromBoardIndex !== index) {
                    moveDeal(fromBoardIndex, fromIndex, index, board.deals.length);
                    item.boardIndex = index;
                    item.index = board.deals.length;
                }
            },
            collect: (monitor) => ({
                isOver: monitor.isOver(),
            }),
            hover: () => setHighlightedBoard(index)
        });

        return (
            <div
                ref={drop}
                style={{
                    backgroundColor: isOver ? "#e0ffe0" : "#f5f5f6",
                    transition: 'background-color 0.3s ease',
                    height: '100vh',
                    width: "100%",
                    borderRadius: "10px",
                    margin: "0 10px 0 0",
                    padding: '20px 10px'
                }}
            >
                <p style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "black",
                    marginBottom: 10
                }}>{board.title}</p>
                <p style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "grey",
                }}>{"PKR " + board.total}</p>
                <div style={{ marginTop: 20 }}>
                    {board.deals.map((deal, dealIndex) => (
                        <DraggableDeal
                            key={dealIndex}
                            index={dealIndex}
                            deal={deal}
                            boardIndex={index}
                        />
                    ))}
                </div>
                <button
                    onClick={() => {
                        setOpen(true);
                        setIndex(index);
                    }}
                    className='add-deal-button'
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#2d8647",
                        height: "40px",
                        borderRadius: "6px",
                        border: "none",
                        outline: "none",
                        cursor: "pointer",
                        fontSize: "20px",
                        fontWeight: "400",
                        color: "whitesmoke",
                        marginTop: 40
                    }}><FaPlus color="white" /></button>
            </div>
        );
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
                {boards.map((board, index) => (
                    <DroppableBoard
                        key={board.id}
                        board={board}
                        index={index}
                        isHighlighted={highlightedBoard === index}
                    />
                ))}
            </div>
            <CreateTask open={open} setOpen={setOpen} handleCreateDeal={handleCreateDeal} dealForm={dealForm} setDealForm={setDealForm} />
        </DndProvider>
    );
};


export default Boards;
import React from 'react';
import { GrPowerCycle } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { LuBarChart3 } from "react-icons/lu";
import { IoMdArrowDropdown } from "react-icons/io";
import { GrDownload } from "react-icons/gr";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MdOutlineEdit } from "react-icons/md";
import { BsFillPinFill } from "react-icons/bs";
import { IoArrowDown } from "react-icons/io5";
import CreateTask from './CreateTask';

const DealsHeader = () => {
    
    const [tabs, setTabs] = React.useState({
        active1: false,
        active2: false,
        active3: false,
    });

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openModal, setOpenModal] = React.useState(false);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: 'flex' }}>
                    <div style={{
                        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                        borderRadius: "5px",
                        display: "flex",
                        justifyContent: "center",
                        width: 185,
                    }}>
                        <div onClick={() => setTabs({ active1: true })} className='deals-tabs' style={{
                            backgroundColor: tabs.active1 === true ? "#eff6ff" : "",
                            padding: "5px 20px",
                            border: `1px solid ${tabs.active1 === true ? "#0d68c5" : "#d9d9d9"}`,
                            borderTopLeftRadius: "5px",
                            borderBottomLeftRadius: "5px",
                        }}>
                            <LuBarChart3 size={20} color={tabs.active1 === true ? "#0d68c5" : ""} />
                        </div>
                        <div onClick={() => setTabs({ active2: true })} className='deals-tabs' style={{
                            backgroundColor: tabs.active2 === true ? "#eff6ff" : "",
                            padding: "5px 20px",
                            border: `1px solid ${tabs.active2 === true ? "#0d68c5" : "#d9d9d9"}`,
                        }}>
                            <RxHamburgerMenu size={20} color={tabs.active2 === true ? "#0d68c5" : ""} />
                        </div>
                        <div onClick={() => setTabs({ active3: true })} className='deals-tabs' style={{
                            backgroundColor: tabs.active3 === true ? "#eff6ff" : "",
                            padding: "5px 20px",
                            border: `1px solid ${tabs.active3 === true ? "#0d68c5" : "#d9d9d9"}`,
                            borderTopRightRadius: "5px",
                            borderBottomRightRadius: "5px",
                        }}>
                            <GrPowerCycle size={20} color={tabs.active3 === true ? "#0d68c5" : ""} />
                        </div>
                    </div>
                    <button onClick={() => setOpenModal(true)} className='add-deal-button' style={{
                        width: "80px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#2d8647",
                        height: "35px",
                        borderTopLeftRadius: "6px",
                        borderBottomLeftRadius: "6px",
                        border: "none",
                        outline: "none",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "whitesmoke",
                        marginLeft: 10
                    }}>+ Deal</button>
                    <button onClick={handleClick} className='add-deal-button' style={{
                        width: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#2d8647",
                        height: "35px",
                        borderTopRightRadius: "6px",
                        borderBottomRightRadius: "6px",
                        border: "none",
                        outline: "none",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "whitesmoke",
                        marginLeft: 1
                    }}>
                        <IoMdArrowDropdown color="white" />
                    </button>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                width: 160,
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&::before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem onClick={handleClose}>
                            <GrDownload style={{ marginRight: 10 }} /> Import Data
                        </MenuItem>
                    </Menu>
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex' }}>
                        <button style={{
                            backgroundColor: "white",
                            width: "130px",
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            color: "black",
                            height: "35px",
                            borderTopLeftRadius: "6px",
                            borderBottomLeftRadius: "6px",
                            border: "1px solid #d9d9d9",
                            outline: "none",
                            cursor: "pointer",
                            fontSize: "16px",
                            fontWeight: "500",
                            marginLeft: 10
                        }}>
                            <LuBarChart3 size={20} color={tabs.active1 === true ? "#0d68c5" : ""} /> Pipeline</button>
                        <button onClick={handleClick} style={{
                            backgroundColor: "white",
                            width: "40px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "35px",
                            borderTopRightRadius: "6px",
                            borderBottomRightRadius: "6px",
                            border: "1px solid #d9d9d9",
                            outline: "none",
                            cursor: "pointer",
                            fontSize: "16px",
                            fontWeight: "500",
                            marginLeft: 1
                        }}>
                            <MdOutlineEdit color="black" />
                        </button>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <button style={{
                            backgroundColor: "white",
                            width: "130px",
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            color: "black",
                            height: "35px",
                            borderTopLeftRadius: "6px",
                            borderBottomLeftRadius: "6px",
                            border: "1px solid #d9d9d9",
                            outline: "none",
                            cursor: "pointer",
                            fontSize: "16px",
                            fontWeight: "500",
                            marginLeft: 10
                        }}>
                            <LuBarChart3 size={20} color={tabs.active1 === true ? "#0d68c5" : ""} /> Everyone</button>
                        <button onClick={handleClick} style={{
                            backgroundColor: "white",
                            width: "40px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "35px",
                            borderTopRightRadius: "6px",
                            borderBottomRightRadius: "6px",
                            border: "1px solid #d9d9d9",
                            outline: "none",
                            cursor: "pointer",
                            fontSize: "16px",
                            fontWeight: "500",
                            marginLeft: 1
                        }}>
                            <IoMdArrowDropdown color="black" />
                        </button>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
                <div>
                    <BsFillPinFill />
                    <p>Pin filter</p>
                </div>
                <div style={{ display: "flex" }}>
                    <div style={{
                        backgroundColor: "#eff6ff",
                        padding: "6px",
                        fontWeight: "600",
                        color: '#0d68c5',
                        fontSize: "14px",
                        borderRadius: "5px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "10px"
                    }}>
                        <IoArrowDown />
                    </div>
                    <div style={{
                        backgroundColor: "#eff6ff",
                        padding: "6px",
                        fontWeight: "600",
                        color: '#0d68c5',
                        fontSize: "14px",
                        borderRadius: "5px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <p>Sort by: Next activity</p>
                    </div>
                    <div style={{
                        backgroundColor: "#eff6ff",
                        padding: "6px",
                        fontWeight: "600",
                        color: '#0d68c5',
                        fontSize: "14px",
                        borderRadius: "5px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <IoMdArrowDropdown />
                    </div>
                </div>
            </div>
            <CreateTask open={openModal} setOpen={setOpenModal} />
        </div>
    );
}

export default DealsHeader;

import React, { useState } from 'react';
import './SideBar.css';
import { useNavigate } from 'react-router-dom';
import threeDotsIcon from '../../assets/three-dots.png.png';
import automationIcon from '../../assets/Automation.png'; // Replace with your actual icon paths
import assignmentIcon from '../../assets/Automatic_Assignment.png';
import documentsIcon from '../../assets/Document.png';
import importIcon from '../../assets/Import_Data.png';  // Add your three-dot icon

const SideBar = ({ items, setItems, icons }) => {

    const navigate = useNavigate();
    const [isExtraSidebarVisible, setIsExtraSidebarVisible] = useState(false);
    const [isExtraSidebarVisible2, setIsExtraSidebarVisible2] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [activeEmailLink, setEmailLink] = useState("");

    const toggleExtraSidebar = () => {
        setIsExtraSidebarVisible(!isExtraSidebarVisible);
        setIsExtraSidebarVisible2(false)
    };

    return (
        <div className="sidebar-container">
            <div className="custom-sidebar">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`sidebar-item ${item.isActive ? 'selected' : ''}`}
                        onClick={() => {
                            if (item.path === "/") {
                                window.location.href = "https://infiniti-suite-final.vercel.app/";
                            } else {
                                navigate(item.path);
                                setItems((prevItems) => prevItems.map((it, ind) => index === ind ? { ...it, isActive: true } : { ...it, isActive: false }));
                                setTimeout(() => {
                                    window.location.reload();
                                }, 100);
                            }
                        }}
                        onMouseEnter={() => setHoveredItem(index)}
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        {icons[index]}
                        {hoveredItem === index && (
                            <div className="sidebar-tooltip">
                                {item?.path?.slice(1, 2).toUpperCase() + item?.path?.slice(2)} {/* Display text based on path */}
                            </div>
                        )}
                    </div>
                ))}
                <div className="sidebar-item three-dots" onClick={toggleExtraSidebar}>
                    <img width={30} src={threeDotsIcon} alt="More" />
                </div>
            </div>
            {isExtraSidebarVisible && (
                <div className={`extra-sidebar ${isExtraSidebarVisible ? 'slide-in' : ''}`}>
                    <div className="option" onClick={() => navigate('/automations')}>
                        <img src={automationIcon} alt="Automations" className="option-icon" />
                        Automations
                    </div>
                    <div className="option" onClick={() => navigate('/automatic-assignment')}>
                        <img src={assignmentIcon} alt="Automatic Assignment" className="option-icon" />
                        Automatic Assignment
                    </div>
                    <div className="option" onClick={() => navigate('/documents')}>
                        <img src={documentsIcon} alt="Documents" className="option-icon" />
                        Documents
                    </div>
                    <div className="option" onClick={() => navigate('/import-data')}>
                        <img src={importIcon} alt="Import Data" className="option-icon" />
                        Import Data
                    </div>
                </div>
            )}
            {isExtraSidebarVisible2 && (
                <div className={`extra-sidebar ${isExtraSidebarVisible2 ? 'slide-in' : ''}`}>
                    <div style={{ margin: "0 10px", marginBottom: 20 }}>
                        <button style={{
                            backgroundColor: "#2d8647",
                            width: "100%",
                            height: "40px",
                            borderRadius: "10px",
                            border: "none",
                            outline: "none",
                            cursor: "pointer",
                            fontSize: "16px",
                            fontWeight: "600",
                            color: "whitesmoke",
                        }}>New Email</button>
                    </div>
                    <div style={{ backgroundColor: activeEmailLink === "INBOX" ? "#e1eeff" : "" }} className="option" onClick={() => {
                        navigate('/automations')
                        setEmailLink("INBOX")
                    }}>
                        <img src={automationIcon} alt="Automations" className="option-icon" />
                        <p style={{ fontWeight: activeEmailLink === "INBOX" ? "600" : "", color: activeEmailLink === "INBOX" ? "#0d68c5" : "black" }}>Inbox</p>
                    </div>
                    <div style={{ backgroundColor: activeEmailLink === "DRAFTS" ? "#e1eeff" : "" }} className="option" onClick={() => {
                        navigate('/automatic-assignment')
                        setEmailLink("DRAFTS")
                    }}>
                        <img src={assignmentIcon} alt="Automatic Assignment" className="option-icon" />
                        <p style={{ fontWeight: activeEmailLink === "DRAFTS" ? "600" : "", color: activeEmailLink === "DRAFTS" ? "#0d68c5" : "black" }}>Drafts</p>
                    </div>
                    <div style={{ backgroundColor: activeEmailLink === "OUTBOX" ? "#e1eeff" : "" }} className="option" onClick={() => {
                        navigate('/documents')
                        setEmailLink("OUTBOX")
                    }}>
                        <img src={documentsIcon} alt="Documents" className="option-icon" />
                        <p style={{ fontWeight: activeEmailLink === "OUTBOX" ? "600" : "", color: activeEmailLink === "OUTBOX" ? "#0d68c5" : "black" }}>Outbox</p>
                    </div>
                    <div style={{ backgroundColor: activeEmailLink === "SENT" ? "#e1eeff" : "" }} className="option" onClick={() => {
                        navigate('/import-data')
                        setEmailLink("SENT")
                    }}>
                        <img src={importIcon} alt="Import Data" className="option-icon" />
                        <p style={{ fontWeight: activeEmailLink === "SENT" ? "600" : "", color: activeEmailLink === "SENT" ? "#0d68c5" : "black" }}>Sent</p>
                    </div>
                    <div style={{ backgroundColor: activeEmailLink === "ARCHIVE" ? "#e1eeff" : "" }} className="option" onClick={() => {
                        navigate('/import-data')
                        setEmailLink("ARCHIVE")
                    }}>
                        <img src={importIcon} alt="Import Data" className="option-icon" />
                        <p style={{ fontWeight: activeEmailLink === "ARCHIVE" ? "600" : "", color: activeEmailLink === "ARCHIVE" ? "#0d68c5" : "black" }}>Archive</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SideBar;

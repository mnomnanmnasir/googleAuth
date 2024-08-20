import logo from '../logo.svg';
import '../App.css';
import NavBar from '../comp/Navbar/Header';
import { AiOutlineHome, AiOutlineRedEnvelope, AiOutlineUser, AiOutlineDollar, AiOutlineProject, AiOutlineArrowDown } from "react-icons/ai";
import SideBar from '../comp/SideBar/SideBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { gapi } from 'gapi-script';
import DOMPurify from 'dompurify';
import { Grid } from 'react-loader-spinner'
import Loader from '../comp/loader';
import { IoMdArrowDropdown, IoIosAttach } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaRegWindowMinimize } from "react-icons/fa";
import { MdCloseFullscreen } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { useParams, useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import threeDotsIcon from '../assets/three-dots.png.png';
import automationIcon from '../assets/Automation.png'; // Replace with your actual icon paths
import assignmentIcon from '../assets/Automatic_Assignment.png';
import documentsIcon from '../assets/Document.png';
import importIcon from '../assets/Import_Data.png';  // Add your three-dot icon

function Campaigns() {
    return (
        <div>
            <div className='compaigns-content'>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", minHeight: "80vh" }}>
                    <p style={{ fontSize: "40px", color: "black", marginBottom: "20px" }}>Send email marketing <strong>campaigns</strong> that get clicks</p>
                    <p style={{ fontSize: "25px", color: "black", marginBottom: "20px" }}>Bring marketing and sales under one roof with the Campaigns add-on.</p>
                    <button style={{
                        backgroundColor: "#2d8647",
                        width: "220px",
                        height: "40px",
                        borderRadius: "10px",
                        border: "none",
                        outline: "none",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "whitesmoke",
                    }}
                    >Get started for free</button>
                    <p style={{ fontSize: "16px", color: "grey", fontWeight: "500", marginTop: 20 }}>Free during Pipedrive trial. <a href='#'>View pricing.</a></p>
                </div>
            </div>
        </div>
    );
}

export default Campaigns;
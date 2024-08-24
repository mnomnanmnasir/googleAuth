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

function Gmail() {

    const params = useParams()
    const [searchParams] = useSearchParams();
    const email = searchParams.get('email');
    const password = searchParams.get('password');

    useEffect(() => {
        localStorage.setItem("auth_token", params.token)
        localStorage.setItem("email", email)
        localStorage.setItem("password", password)
    }, [])

    const [items, setItems] = useState([
        { path: 'Home', isActive: false },
        { path: 'About', isActive: false },
        { path: 'Services', isActive: false },
        { path: 'Contact', isActive: false },
        { path: 'Blog', isActive: false },
    ]);
    const icons = [<AiOutlineHome size={20} />, <AiOutlineRedEnvelope size={20} />, <AiOutlineDollar size={20} />, <AiOutlineUser size={20} />, <AiOutlineProject size={20} />];

    const [recipients, setRecipients] = useState([]);
    const [isAuth, setIsAuth] = useState(false);
    const [sendingMessage, setSendingMessage] = useState(false);
    const [emailUser, setEmailUser] = useState('');
    const [emailSubject, setEmailSubject] = useState('');
    const [emailMessage, setEmailMessage] = useState('');

    const [selectedItem, setSelectedItem] = useState('');
    const [openCompose, setOpenCompose] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [emails, setEmails] = useState([]);
    const [sendEmails, setSendEmails] = useState([]);
    const [activeTab, setActiveTab] = useState({
        inboxActive: true,
        sentItemsActive: false,
        starredActive: false,
        snoozeActive: false,
        importantActive: false,
        draftsActive: false,
    });
    const [headerActive, setHeaderActive] = useState({
        primaryActive: true,
        socialActive: false,
        promotionsActive: false,
    });
    const [selectedEmail, setSelectedEmail] = useState(null);

    const handleSelect = (item) => {
        setSelectedItem(item);
    };

    // const clientId = "928209376096-euig13evhrr352f9m3cov0t8aq4o4dj7.apps.googleusercontent.com";
    const clientId = "209177226023-dv7fd0gg4cl14ql4i75l6jh084r919a2.apps.googleusercontent.com";

    const initClient = () => {
        gapi.client.init({
            apiKey: "AIzaSyAOKvw3Bh_mf4mgRJ2JyQLNZSVidmogk9o",
            clientId: clientId,  // Ensure this is correctly set
            discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"],
            scope: "https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/contacts.readonly https://www.googleapis.com/auth/drive.readonly"
        }).then(() => {
            console.log("GAPI client initialized.");
            gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
            updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
            getUserInfo()
        }, (error) => {
            console.error("Failed to init GAPI client", error);
        });
    }

    function getUserInfo() {
        var auth2 = gapi.auth2.getAuthInstance();
        if (auth2.isSignedIn.get()) {
            var profile = auth2.currentUser.get().getBasicProfile();
            setCurrentUser(profile)
            localStorage.setItem("pipedrive_user", JSON.stringify(profile))
        } else {
            console.log('Not signed in');
        }
    }


    const handleEmailSelect = (email) => {
        setSelectedEmail(email);
    };

    const signIn = async () => {
        const auth2 = gapi.auth2.getAuthInstance();
        await auth2.signIn();
        console.log(auth2.currentUser.get().getAuthResponse().access_token);
        localStorage.setItem("user_token", auth2.currentUser.get().getAuthResponse().access_token);
    };

    const signOut = () => {
        gapi.auth2.getAuthInstance().signOut().then(() => {
            console.log("User signed out.");
            // Optionally, you can fetch messages or perform other operations here
        }).catch(error => {
            console.error("Error signing out: ", error);
        });
    };

    const updateSigninStatus = (isSignedIn) => {
        if (isSignedIn) {
            console.log("Logged in!");
            setIsAuth(true)
            listMessages();
            listSentMessages()
        } else {
            console.log("Not logged in.");
            setIsAuth(false)
        }
    }

    // FOR SENT ITEMS

    const listSentMessages = () => {
        const request = gapi.client.gmail.users.messages.list({
            'userId': 'me',
            'labelIds': ['SENT'],
            'maxResults': 10  // You can adjust the number of results here
        });

        request.execute((response) => {
            console.log("sent items =======>", response);
            if (response.messages && response.messages.length > 0) {
                const seenIds = new Set();
                const newMessages = [];
                response.messages.forEach((message) => {
                    getMessageById(message.id)
                });
            }
        });
    };

    function getMessageById(messageId) {
        gapi.client.gmail.users.messages.get({
            'userId': 'me',
            'id': messageId,
            'format': 'full'  // Fetches the full email message data, including body and attachments
        }).then(function (response) {
            const headers = response.result.payload.headers;
            const subject = headers.find(header => header.name === 'Subject')?.value || "No subject";
            const to = headers.find(header => header.name === 'To')?.value || "No recipient";
            const date = headers.find(header => header.name === 'Date')?.value || "No date";
            // Extract and process the body content
            const bodyContent = extractContent2(response.result.payload);
            // console.log(bodyContent); // You might want to display this in your UI
            let messageObj = {
                id: response.result.id,
                subject: subject,
                to: to,
                date: date,
                body: bodyContent
            }
            setSendEmails(prevState => [...prevState, messageObj]);
            // Handle attachments if any
            if (response.result.payload.parts) {
                response.result.payload.parts.forEach(part => {
                    if (part.filename && part.body && part.body.attachmentId) {
                        getAttachment(part.body.attachmentId, messageId, part.filename);
                    }
                });
            }
        }, function (error) {
            console.error("Failed to get message details", error);
        });
    }

    function extractContent2(payload) {
        let content = '';
        if (payload.parts) {
            payload.parts.forEach(part => {
                if (part.parts) {
                    content += extractContent(part);  // Recursively handle multipart/alternative
                } else if (part.mimeType === 'text/html' || part.mimeType === 'text/plain') {
                    content += atob(part.body.data.replace(/-/g, '+').replace(/_/g, '/'));
                }
            });
        } else if (payload.body && payload.body.data) {
            content = atob(payload.body.data.replace(/-/g, '+').replace(/_/g, '/'));
        }
        return content;
    }

    function getAttachment(attachmentId, messageId, filename) {
        gapi.client.gmail.users.messages.attachments.get({
            'userId': 'me',
            'messageId': messageId,
            'id': attachmentId
        }).then(function (response) {
            console.log(`Attachment: ${filename}`);
            const attachmentData = response.result.data;
            // Convert the attachment data from base64
            const attachment = atob(attachmentData.replace(/-/g, '+').replace(/_/g, '/'));
            // Process the attachment data, display it, or prepare for download
        }, function (error) {
            console.error("Failed to get attachment", error);
        });
    }

    const EmailView2 = () => {
        if (!selectedEmail) return <p>No email selected</p>;

        const markup = createMarkup(selectedEmail.body);

        return (
            <div className="emailDetail">
                <div className="emailDetailHeader">
                    <h1>{selectedEmail.subject}</h1>
                    <div style={{ display: "flex", alignItems: "center", margin: "30px 0" }}>
                        <img width={50} style={{ borderRadius: "100%", marginRight: "15px" }} src={currentUser?.hK} />
                        <div>
                            <div style={{ display: "flex" }}>
                                <p style={{ fontWeight: 600, marginRight: 10 }}>{currentUser?.Ad}</p>
                                <p>{`<${currentUser?.cu}>`}</p>
                            </div>
                            <h3 style={{ color: "grey", fontWeight: "500", fontSize: 15 }}>To: {selectedEmail.to}</h3>
                        </div>
                    </div>
                </div>
                <div className="emailDetailBody" dangerouslySetInnerHTML={markup}></div>
            </div>
        );
    };

    // FOR INBOX

    const listMessages = () => {
        gapi.client.gmail.users.messages.list({
            'userId': 'me',
            'labelIds': 'INBOX',
            'maxResults': 10
        }).then(function (response) {
            const messages = response.result.messages;
            getMessagesDetail(messages);
        });
    };

    const getMessagesDetail = (messages) => {
        const emailsBatch = [];

        messages.forEach(message => {
            gapi.client.gmail.users.messages.get({
                'userId': 'me',
                'id': message.id,
                'format': 'full'  // Requests a full MIME message
            }).then(function (response) {
                const headers = response.result.payload.headers;
                const subject = headers.find(h => h.name === "Subject")?.value;
                const date = headers.find(h => h.name === "Date")?.value;
                const from = headers.find(h => h.name === "From")?.value;
                const bodyContent = extractContent(response.result.payload);

                const messageData = {
                    id: response.result.id,
                    subject: subject,
                    date: date,
                    from: from,
                    body: bodyContent
                };

                emailsBatch.push(messageData);
                if (emailsBatch.length === messages.length) {
                    setEmails(emailsBatch); // Update state with all new emails at once
                }
            });
        });
    };

    // Function to extract and decode email content
    function extractContent(payload) {
        let content = '';
        if (payload.parts) {
            payload.parts.forEach(part => {
                if (part.mimeType === 'text/html' || part.mimeType === 'text/plain') {
                    content += atob(part.body.data.replace(/-/g, '+').replace(/_/g, '/'));
                } else if (part.mimeType.includes('image')) {
                    // For images, create an <img> tag with a src that points to the base64 encoded string
                    const imageData = `data:${part.mimeType};base64,${part.body.data}`;
                    content += `<img src="${imageData}" alt="Embedded Image" />`;
                }
            });
        } else {
            content = atob(payload.body.data.replace(/-/g, '+').replace(/_/g, '/'));
        }
        return content;
    }

    const preprocessHTML = (htmlContent) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');

        // Remove all <style> elements
        doc.querySelectorAll('style').forEach(el => el.remove());

        // Optional: Remove excessively long URLs
        doc.querySelectorAll('a').forEach(a => {
            const url = new URL(a.href);
            // Check for overly long URLs or URLs that contain tracking parameters
            if (url.search.length > 50) {
                a.href = url.origin + url.pathname; // Strip query parameters
            }
        });

        // Remove images used for tracking
        doc.querySelectorAll('img').forEach(img => {
            if (img.width === 1 && img.height === 1) { // Check if it's likely a tracking pixel
                img.remove();
            }
        });

        return doc.body.innerHTML;
    };

    const createMarkup = (htmlContent) => {
        const preprocessedContent = preprocessHTML(htmlContent);
        const sanitizedContent = DOMPurify.sanitize(preprocessedContent, {
            ALLOWED_TAGS: ['div', 'span', 'p', 'img', 'a', 'ul', 'li', 'b', 'i', 'strong', 'em', 'table', 'tr', 'td', 'th', 'tbody', 'thead', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'br', 'hr'],
            ALLOWED_ATTR: ['href', 'src', 'height', 'width', 'alt', 'class', 'style']
        });
        return { __html: sanitizedContent };
    };

    const EmailView = () => {
        if (!selectedEmail) return <p>No email selected</p>;

        const markup = createMarkup(selectedEmail.body);

        return (
            <div className="emailDetail">
                <div className="emailDetailHeader">
                    <h1>{selectedEmail.subject}</h1>
                    <h2>From: {selectedEmail.from}</h2>
                    <h3>Date: {new Date(selectedEmail.date).toLocaleString()}</h3>
                </div>
                <div className="emailDetailBody" dangerouslySetInnerHTML={markup}></div>
            </div>
        );
    };

    function sendMessage() {
        setOpenCompose(false)
        setSendingMessage(true)

        const emailLines = [
            'Content-Type: text/plain; charset="UTF-8"',
            'MIME-Version: 1.0',
            'Content-Transfer-Encoding: 7bit',
            `To: ${emailUser}`,
            `From: ${currentUser?.cu}`,
            `Subject: ${emailSubject}`,
            '',
            `${emailMessage}`
        ];
        const base64EncodedEmail = btoa(unescape(encodeURIComponent(emailLines.join('\n'))))
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');
        gapi.client.gmail.users.messages.send({
            'userId': 'me',
            'resource': {
                'raw': base64EncodedEmail
            }
        }).then(function (response) {
            setSendingMessage(false)
            alert("Email sent successfully!")
            console.log("Email sent successfully!", response.result);
        }, function (error) {
            setSendingMessage(false)
            alert("Something went wrong!")
            console.error("Failed to send email", error);
        });
    }

    const deleteMessage = (messageId) => {
        return gapi.client.gmail.users.messages.delete({
            'userId': 'me',
            'id': messageId
        }).then(response => {
            console.log('Message deleted:', response);
            // Optionally, you can refresh the list of messages after deletion
            listMessages();
        }).catch(error => {
            console.error('Error deleting message:', error);
        });
    };

    useEffect(() => {
        gapi.load('client:auth2', initClient);
    }, []);

    function Unauthenticated() {

        const [activeEmailLink, setEmailLink] = useState("");
        const navigate = useNavigate();
        const [email, setEmail] = useState("");
        const [error, setError] = useState("");

        const validateEmail = (email) => {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        }

        const handleSignIn = async () => {
            if (!validateEmail(email)) {
                setError("Please enter a valid email");
                return;
            }
            try {
                setError("")
                const auth2 = gapi.auth2.getAuthInstance();
                await auth2.signIn({ prompt: 'select_account', login_hint: email });
                const token = auth2.currentUser.get().getAuthResponse().access_token;
                localStorage.setItem("user_token", token);
                console.log(token);
            } catch (error) {
                console.error("Error signing in", error);
            }
        };

        console.log(activeEmailLink);

        return (
            <div>
                <div className={`extra-sidebar-2 slide-in`}>
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
                        setEmailLink("INBOX")
                    }}>
                        <img src={automationIcon} alt="Automations" className="option-icon" />
                        <p style={{ fontWeight: activeEmailLink === "INBOX" ? "600" : "", color: activeEmailLink === "INBOX" ? "#0d68c5" : "black" }}>Inbox</p>
                    </div>
                    <div style={{ backgroundColor: activeEmailLink === "DRAFTS" ? "#e1eeff" : "" }} className="option" onClick={() => {
                        setEmailLink("DRAFTS")
                    }}>
                        <img src={assignmentIcon} alt="Automatic Assignment" className="option-icon" />
                        <p style={{ fontWeight: activeEmailLink === "DRAFTS" ? "600" : "", color: activeEmailLink === "DRAFTS" ? "#0d68c5" : "black" }}>Drafts</p>
                    </div>
                    <div style={{ backgroundColor: activeEmailLink === "OUTBOX" ? "#e1eeff" : "" }} className="option" onClick={() => {
                        setEmailLink("OUTBOX")
                    }}>
                        <img src={documentsIcon} alt="Documents" className="option-icon" />
                        <p style={{ fontWeight: activeEmailLink === "OUTBOX" ? "600" : "", color: activeEmailLink === "OUTBOX" ? "#0d68c5" : "black" }}>Outbox</p>
                    </div>
                    <div style={{ backgroundColor: activeEmailLink === "SENT" ? "#e1eeff" : "" }} className="option" onClick={() => {
                        setEmailLink("SENT")
                    }}>
                        <img src={importIcon} alt="Import Data" className="option-icon" />
                        <p style={{ fontWeight: activeEmailLink === "SENT" ? "600" : "", color: activeEmailLink === "SENT" ? "#0d68c5" : "black" }}>Sent</p>
                    </div>
                    <div style={{ backgroundColor: activeEmailLink === "ARCHIVE" ? "#e1eeff" : "" }} className="option" onClick={() => {
                        setEmailLink("ARCHIVE")
                    }}>
                        <img src={importIcon} alt="Import Data" className="option-icon" />
                        <p style={{ fontWeight: activeEmailLink === "ARCHIVE" ? "600" : "", color: activeEmailLink === "ARCHIVE" ? "#0d68c5" : "black" }}>Archive</p>
                    </div>
                </div>
                <div className='email-content'>
                    <div style={{ margin: "40px 20px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <p style={{ fontSize: "25px", color: "black", marginBottom: "20px" }}>Email Sync</p>
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
                                onClick={handleSignIn}
                            >Connect email account</button>
                        </div>
                        <p style={{ fontSize: "16px", color: "black" }}>Connect your email accounts to manage sales conversations in Infiniti Suit. Close deals faster.</p>
                    </div>
                    <div style={{ backgroundColor: '#f8f8fe', padding: "50px 60px" }}>
                        <p style={{ fontSize: "25px", color: "black", marginBottom: "20px", width: "500px" }}>
                            Connect your email accounts. Link sales emails to <strong>deals,</strong> <strong>leads</strong> or <strong>contacts</strong>.
                        </p>
                        <p style={{ fontWeight: "500", marginBottom: 10 }}>Email address</p>
                        <div>
                            <input onChange={(e) => setEmail(e.target.value)} style={{ outline: "none", border: "1px solid grey", borderRadius: "5px", padding: "10px", width: "250px", margin: 0 }} />
                        </div>
                        <p style={{ color: "#C82627", fontWeight: "500", margin: "10px 0" }}>{error}</p>
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
                            marginTop: 20,
                            marginBottom: 20,
                        }}
                            onClick={handleSignIn}
                        >Connect email account</button>
                        <div>
                            <a style={{ fontWeight: "600" }} href='#'>Learn more about email sync</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    console.log({ emails, sendEmails });

    return (
        <div>
            {isAuth ? (
                <>
                    {openCompose && (
                        <div className="prompt-box">
                            <div className="prompt-box-content">
                                <div className="prompt-box-header">
                                    <h3>New Message</h3>
                                    {/* <button onClick={() => setOpenCompose(false)}>&times;</button> */}
                                    <div>
                                        <FaRegWindowMinimize size={13} className='header-icons' />
                                        <MdCloseFullscreen size={13} className='header-icons' />
                                        <IoClose onClick={() => setOpenCompose(false)} size={13} className='header-icons' />
                                    </div>
                                </div>
                                <div className="prompt-box-body">
                                    <div className="input-section">
                                        <input onChange={(e) => setEmailUser(e.target.value)} type="text" style={{ outline: "none" }} placeholder="Recipients" />
                                        {/* <div className="cc-bcc">
                                    <span>CC</span>
                                    <span>BCC</span>
                                </div> */}
                                    </div>
                                    <input onChange={(e) => setEmailSubject(e.target.value)} type="text" style={{ outline: "none" }} placeholder="Subject" />
                                    <textarea onChange={(e) => setEmailMessage(e.target.value)} style={{ outline: "none" }} rows={8}></textarea>
                                </div>
                                <div className="prompt-box-footer">
                                    <button className="send-btn" onClick={sendMessage}>
                                        <p>{sendingMessage ? "Sending..." : "Send"}</p>
                                        <IoMdArrowDropdown size={20} />
                                    </button>
                                    <IoIosAttach style={{ marginLeft: 10 }} size={20} className='header-icons' />
                                    <MdAttachEmail style={{ marginLeft: 10 }} size={20} className='header-icons' />
                                    <IoIosAttach style={{ marginLeft: 10 }} size={20} className='header-icons' />
                                    <IoIosAttach style={{ marginLeft: 10 }} size={20} className='header-icons' />
                                    <IoIosAttach style={{ marginLeft: 10 }} size={20} className='header-icons' />
                                    <IoIosAttach style={{ marginLeft: 10 }} size={20} className='header-icons' />
                                    <IoIosAttach style={{ marginLeft: 10 }} size={20} className='header-icons' />
                                </div>
                            </div>
                        </div>
                    )}
                    {emails?.length === 0 ? (
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            height: '120vh',
                        }}>
                            <Loader />
                        </div>
                    ) : (
                        <>
                            {/* <div className="header">

                                <div className="header__left">
                                    <span className="material-icons"> menu </span>
                                    <img
                                        src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
                                        alt=""
                                    />
                                </div>
                                <div className="header__middle">
                                    <span className="material-icons"> search </span>
                                    <input type="text" placeholder="Search mail" />
                                    <span className="material-icons"> arrow_drop_down </span>
                                </div>
                                <div className="header__right">
                                    <span className="material-icons"> apps </span>
                                    <span className="material-icons"> notifications </span>
                                    <span className="material-icons"> account_circle </span>
                                </div>
                            </div> */}
                            <div className="main__body">
                                <div className="sidebar">
                                    <button className="sidebar__compose" onClick={() => setOpenCompose(true)}>
                                        <span className="material-icons"> add </span>Compose
                                    </button>
                                    <div onClick={() => {
                                        setActiveTab({ inboxActive: true })
                                        setSelectedEmail("")
                                    }} className={`sidebarOption ${activeTab?.inboxActive === true ? "sidebarOption__active" : ""}`}>
                                        <span className="material-icons"> inbox </span>
                                        <h3>Inbox ({emails?.length})</h3>
                                    </div>
                                    <div onClick={() => {
                                        setActiveTab({ starredActive: true })
                                        setSelectedEmail("")
                                    }} className={`sidebarOption ${activeTab?.starredActive === true ? "sidebarOption__active" : ""}`}>
                                        <span className="material-icons"> star </span>
                                        <h3>Starred</h3>
                                    </div>
                                    <div onClick={() => {
                                        setActiveTab({ snoozeActive: true })
                                        setSelectedEmail("")
                                    }} className={`sidebarOption ${activeTab?.snoozeActive === true ? "sidebarOption__active" : ""}`}>
                                        <span className="material-icons"> access_time </span>
                                        <h3>Snoozed</h3>
                                    </div>
                                    <div onClick={() => {
                                        setActiveTab({ importantActive: true })
                                        setSelectedEmail("")
                                    }} className={`sidebarOption ${activeTab?.importantActive === true ? "sidebarOption__active" : ""}`}>
                                        <span className="material-icons"> label_important </span>
                                        <h3>Important</h3>
                                    </div>
                                    <div onClick={() => {
                                        setActiveTab({ sentItemsActive: true })
                                        setSelectedEmail("")
                                    }} className={`sidebarOption ${activeTab?.sentItemsActive === true ? "sidebarOption__active" : ""}`}>
                                        <span className="material-icons"> near_me </span>
                                        <h3>Sent ({sendEmails?.length})</h3>
                                    </div>
                                    <div onClick={() => {
                                        setActiveTab({ draftsActive: true })
                                        setSelectedEmail("")
                                    }} className={`sidebarOption ${activeTab?.draftsActive === true ? "sidebarOption__active" : ""}`}>
                                        <span className="material-icons"> note </span>
                                        <h3>Drafts</h3>
                                    </div>
                                </div>
                                <div className="emailList">
                                    <div className="emailList__settings">
                                        <div className="emailList__settingsLeft">
                                            <input type="checkbox" />
                                            <span className="material-icons header-icons"> arrow_drop_down </span>
                                            <span className="material-icons header-icons"
                                                onClick={() => {
                                                    if (activeTab.inboxActive === true) {
                                                        listMessages();
                                                    }
                                                    if (activeTab.sentItemsActive === true) {
                                                        listSentMessages()
                                                    }
                                                }}>
                                                redo
                                            </span>
                                            <span className="material-icons header-icons"> more_vert </span>
                                        </div>
                                        <div className="emailList__settingsRight">
                                            <span className="material-icons header-icons"> chevron_left </span>
                                            <span className="material-icons header-icons"> chevron_right </span>
                                            <span className="material-icons header-icons"> keyboard_hide </span>
                                            <span className="material-icons header-icons"> settings </span>
                                        </div>
                                    </div>
                                    <div className="emailList__sections">
                                        <div onClick={() => setHeaderActive({ primaryActive: true })} className={`section ${headerActive.primaryActive === true ? "section__selected" : ""}`}>
                                            <span className="material-icons"> inbox </span>
                                            <h4>Primary</h4>
                                        </div>
                                        <div onClick={() => setHeaderActive({ socialActive: true })} className={`section ${headerActive.socialActive === true ? "section__selected" : ""}`}>
                                            <span className="material-icons"> people </span>
                                            <h4>Social</h4>
                                        </div>
                                        <div onClick={() => setHeaderActive({ promotionsActive: true })} className={`section ${headerActive.promotionsActive === true ? "section__selected" : ""}`}>
                                            <span className="material-icons"> local_offer </span>
                                            <h4>Promotions</h4>
                                        </div>
                                    </div>
                                    <div className="emailList__list">
                                        {activeTab.inboxActive && (
                                            selectedEmail ? (
                                                <EmailView />
                                            ) : emails?.length > 0 ? emails?.sort((a, b) => new Date(b.date) - new Date(a.date))?.map((email) => {
                                                const cleanString = email?.from?.replace(/<.*?>/g, '').trim();
                                                return (
                                                    <div className="emailRow" onClick={() => handleEmailSelect(email)}>
                                                        <div className="emailRow__options">
                                                            <input type="checkbox" name="" id="" />
                                                            <span className="material-icons"> star_border </span>
                                                            {/* <span className="material-icons"> label_important </span> */}
                                                        </div>
                                                        <h3 className="emailRow__title">{cleanString}</h3>
                                                        <div className="emailRow__message">
                                                            <h4>
                                                                <span className="emailRow__description">
                                                                    {email?.subject}
                                                                </span>
                                                            </h4>
                                                        </div>
                                                        {/* <button onClick={() => deleteMessage(email.id)}>Delete</button> */}
                                                        <p className="emailRow__time">{new Date(email?.date).toLocaleDateString()}</p>
                                                    </div>
                                                )
                                            }) : ""
                                        )}
                                        {activeTab.sentItemsActive && (
                                            selectedEmail ? (
                                                <EmailView2 />
                                            ) : sendEmails?.length > 0 ? sendEmails?.sort((a, b) => new Date(b.date) - new Date(a.date))?.map((email) => {
                                                const cleanString = email?.to?.replace(/<.*?>/g, '').trim();
                                                return (
                                                    <div className="emailRow" onClick={() => handleEmailSelect(email)}>
                                                        <div className="emailRow__options" onClick={() => handleEmailSelect(email)}>
                                                            <input type="checkbox" name="" id="" />
                                                            <span className="material-icons"> star_border </span>
                                                            {/* <span className="material-icons"> label_important </span> */}
                                                        </div>
                                                        <h3 className="emailRow__title">{cleanString}</h3>
                                                        <div className="emailRow__message" onClick={() => handleEmailSelect(email)}>
                                                            <h4>
                                                                <span className="emailRow__description">
                                                                    {email?.subject}
                                                                </span>
                                                            </h4>
                                                        </div>
                                                        {/* <button onClick={() => deleteEmail(email.id)}>Delete</button> */}
                                                        <p className="emailRow__time">{new Date(email?.date).toLocaleDateString()}</p>
                                                    </div>
                                                )
                                            }) : ""
                                        )}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </>
            ) : <Unauthenticated />}
        </div>
    );
}

export default Gmail;
import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';
import DOMPurify from 'dompurify';
import md5 from 'md5';
import Loader2 from './Loader2';

const Docs = () => {
    
    const [docs, setDocs] = useState([]);
    const [loading, setLoading] = useState(false);
    // const clientId = "928209376096-euig13evhrr352f9m3cov0t8aq4o4dj7.apps.googleusercontent.com";
    const clientId = "209177226023-dv7fd0gg4cl14ql4i75l6jh084r919a2.apps.googleusercontent.com";
    const apiKey = "AIzaSyAOKvw3Bh_mf4mgRJ2JyQLNZSVidmogk9o";
    const discoveryDocs = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
    const scope = "https://www.googleapis.com/auth/drive.readonly";

    const initClient = () => {
        gapi.client.init({
            apiKey: apiKey,
            clientId: clientId,
            discoveryDocs: discoveryDocs,
            scope: scope
        }).then(() => {
            console.log("GAPI client initialized.");
            gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
            updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        }, (error) => {
            console.error("Failed to init GAPI client", error);
        });
    };

    const signIn = async () => {
        const auth2 = gapi.auth2.getAuthInstance();
        try {
            await auth2.signIn({
                scope: scope
            });
            console.log(auth2.currentUser.get().getAuthResponse().access_token);
            localStorage.setItem("user_token", auth2.currentUser.get().getAuthResponse().access_token);
        } catch (error) {
            console.error("Sign-in failed", error);
        }
    };

    const signOut = () => {
        const auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(() => {
            console.log('User signed out.');
        });
    };

    const updateSigninStatus = (isSignedIn) => {
        if (isSignedIn) {
            console.log("Logged in!");
            listDocs();
        } else {
            console.log("Not logged in.");
            signIn();
        }
    };

    const listDocs = () => {
        setLoading(true);
        gapi.client.drive.files.list({
            'pageSize': 10,
            'fields': "nextPageToken, files(id, name, mimeType, owners, webViewLink, createdTime, modifiedTime, description)"
        }).then((response) => {
            setLoading(false);
            const files = response.result.files.map(file => ({
                ...file,
                reasonSuggested: getReasonSuggested(file)
            }));
            console.log('Files:', files);
            setDocs(files);
        }, (error) => {
            setLoading(false);
            if (error.status === 403) {
                console.error("Permission error: ", error);
                signOut();
                alert("You do not have permission to access these files. Please ensure the files are shared with you.");
            } else {
                console.error("Failed to list files", error);
            }
        });
    };

    const getReasonSuggested = (file) => {
        const modifiedDate = new Date(file.modifiedTime);
        const now = new Date();
        const timeDiff = Math.abs(now - modifiedDate);
        const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

        if (diffDays <= 1) {
            return `You modified • ${modifiedDate.toLocaleTimeString()}`;
        } else if (diffDays <= 7) {
            return `You modified • ${modifiedDate.toLocaleDateString()}`;
        } else {
            return `You modified • ${modifiedDate.toLocaleDateString()}`;
        }
    };

    useEffect(() => {
        gapi.load('client:auth2', initClient);
    }, []);

    const getFileIcon = (mimeType) => {
        switch (mimeType) {
            case 'application/vnd.google-apps.document':
                return 'https://img.icons8.com/color/48/000000/google-docs.png';
            case 'application/vnd.google-apps.spreadsheet':
                return 'https://img.icons8.com/color/48/000000/google-sheets.png';
            case 'application/vnd.google-apps.presentation':
                return 'https://img.icons8.com/color/48/000000/google-slides.png';
            case 'application/vnd.google-apps.folder':
                return 'https://img.icons8.com/color/48/000000/folder-invoices.png';
            default:
                return 'https://img.icons8.com/color/48/000000/file.png';
        }
    };

    const getGravatarUrl = (email) => {
        const hash = md5(email.trim().toLowerCase());
        return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
    };

    console.log(docs);

    return (
        <div className="container">
            {loading ? (
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '80vh',
                }}>
                    <Loader2 />
                </div>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Reason suggested</th>
                            <th>Owner</th>
                        </tr>
                    </thead>
                    <tbody>
                        {docs.map((doc, index) => (
                            <tr key={index} style={{ cursor: "pointer" }} onClick={() => {
                                window.location.href = doc.webViewLink;
                            }}>
                                <td className="file-name">
                                    <img className="icon" src={getFileIcon(doc.mimeType)} alt="icon" />
                                    <span>{doc.name}</span>
                                </td>
                                <td>{doc.reasonSuggested}</td>
                                <td className="owner">
                                    {doc.owners && doc.owners.length > 0 && (
                                        <>
                                            <img src={getGravatarUrl(doc.owners[0].emailAddress)} alt="owner" />
                                            <span>{doc.owners[0].displayName}</span>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Docs;
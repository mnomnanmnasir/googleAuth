import React from 'react';
import { useParams } from 'react-router-dom';

function SSTrack() {
    const token = localStorage.getItem("auth_token")
    return (
        <div style={{ padding: '70px 0 0 65px' }}>
            <iframe src={`https://www.sstrack.io/${token}`} style={{ width: "100%", height: "100vh", overflow: "hidden", border: "none" }} />;
        </div>
    )
}

export default SSTrack;
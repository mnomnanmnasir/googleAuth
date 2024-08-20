import React from 'react';

function ClickHR() {
    const email = localStorage.getItem("email")
    const password = localStorage.getItem("password")
    return (
        <div style={{ padding: '70px 0 0 65px' }}>
            <iframe src={`https://www.click-hr.com/?email=${email}&password=${password}`} style={{ width: "100%", height: "100vh", overflow: "hidden", border: "none" }} />;
        </div>
    )
}

export default ClickHR;
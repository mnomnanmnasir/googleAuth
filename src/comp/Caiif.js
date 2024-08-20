import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Caiif() {
    return (
        <div style={{ padding: '70px 0 0 65px' }}>
            <iframe src={`https://caiif.ca/dashboard`} style={{ width: "100%", height: "100vh", overflow: "hidden !important", border: "none" }} />;
        </div>
    )
}

export default Caiif;
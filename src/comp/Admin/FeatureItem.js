import React, { useState } from 'react'
import './FeatureItem.css'

const FeatureItem = ({ feature }) => {

    const [isEnabled, setIsEnabled] = useState(feature.enabled);

    const handleToggle = () => {
        setIsEnabled(!isEnabled);
    };


    return (
        <div className={`feature-item ${feature.enabled ? 'enabled' : 'disabled'}`}>

            <div className="feature-details">
                <h3>{feature.name}</h3>
                <p>{feature.detail}</p>
            </div>
            <div className="toggle-container">
                <label className="switch">
                    <input type="checkbox" checked={isEnabled} onChange={handleToggle} />
                    <span className="slider"></span>
                </label>
            </div>
        </div>
    )
}

export default FeatureItem

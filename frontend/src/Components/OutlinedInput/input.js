import React, { useState, useRef } from 'react';
import './inputstyle.css';

const Input = ({ label }) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef =useRef(null);

    const handleInputFocus = () => {
        setIsFocused(true);
    };

    const handleInputBlur = () => {
        if (inputRef.current.value) {
            setIsFocused(true);
        } else {
            setIsFocused(false);
        }
    };

    return (
        <div className={`outlined-input-container ${isFocused ? 'focused' : ''}`}>
            <input
                ref={inputRef}
                type="text"
                className="outlined-input"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />
            <label className={`outlined-label ${isFocused ? 'active' : ''}`}>
                {label}
            </label>
        </div>
    );
};

export default Input;
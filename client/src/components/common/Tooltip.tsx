import React, { useState } from 'react';

interface TooltipProps {
    text: string;
    children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const toggleTooltip = () => {
        setShowTooltip(!showTooltip);
    };

    return (
        <div
            className="relative"
            onMouseEnter={toggleTooltip}
            onMouseLeave={toggleTooltip}
        >
            {showTooltip && (
                <div className="absolute top-[-30px] left-[-5px] bg-gray-600 p-1 rounded-xl ">
                    {text}
                </div>
            )}
            {children}
        </div>
    );
};

export default Tooltip;

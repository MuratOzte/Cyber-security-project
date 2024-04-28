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
            {children}
            {showTooltip && (
                <div className="absolute top-[40px] left-[-2px] bg-gray-600 p-[2px] text-xs rounded-xl">
                    {text}
                </div>
            )}
        </div>
    );
};

export default Tooltip;

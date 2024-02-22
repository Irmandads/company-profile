import React from "react";

const RoundedBtn = ({ children, className, onClick, color }) => {
    const primaryColor = "border-primary text-black";
    const baseColor = "border-base-300 text-base-300";

    const determineColor = () => {
        if (color === "base") {
            return baseColor;
        } else {
            return primaryColor;
        }
    };

    return (
        <button className={`${className} btn flex items-center gap-2 border-2 bg-transparent hover:bg-primary hover:border-transparent hover:text-white duration-500 ${determineColor()} rounded-full`} onClick={onClick}>
            {children}
        </button>
    );
};

export default RoundedBtn;

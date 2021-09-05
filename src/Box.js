import React from "react";

const Box = ({ id, height, width, backgroundColor, handleRemove }) => {
    // all boxes are given an idea in order to handle removing them later
    const remove = () => handleRemove(id);
    return (
        <div>
            <div style={{
                height: `${height}.em`,
                width: `${width}.em`,
                backgroundColor
            }}>
            <button onClick={remove}>Remove this box</button>
            </div>
        </div>
    )
}

export default Box; 
import React from 'react';

const ResultImage = (props) => {
    return (
        <div className="image-container">
            <img src={props.imageUrl} className="result-image" alt="result" />
        </div>
    )
}

export default ResultImage;
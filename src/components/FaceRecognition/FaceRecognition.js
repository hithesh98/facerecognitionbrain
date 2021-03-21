import React from 'react';

const FaceRecognition = ({imageURL}) => {
    return (
        <div className='center ma'>
            <div>
                <img src= {imageURL} alt='' className='mt2' width='500px' height = 'auto' />
            </div>
        </div>
    );
}

export default FaceRecognition;
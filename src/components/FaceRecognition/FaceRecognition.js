import React from 'react' ;
const FaceRecognition = ({imgURL}) => {
    return(
        <div className='center'>
            <div className='mt3'>

            <img alt='' src={imgURL} width='500px' height='auto'></img>
            </div>
        </div>
    );
}
export default FaceRecognition;

import React from 'react'; 
import './ImageLinkForm.css';


const ImageLinkForm = ({onInputChange , onClickEvent}) => {
    return(
        <div className='f3'>
            <p>{'This App Will Try To Detect Age , Gender and Region of Image , Give It a Try (Enter URL of Image)'} </p>
            <div className='center'>
                <div className='form center br3 pa4 shadow-5'>
                    <input className='w-70 f4 pa2 center' type='text' onChange={onInputChange}></input>
                    <button className='w-30 ph3 pv2 dib f4 grow link' onClick={onClickEvent}>{'Detect'}</button>
                </div>
            </div>
        </div>
    );
}
export default ImageLinkForm ;
import React from 'react'
import './Modal.css'
import ReactDOM from 'react-dom';

const Backdrop = (props) =>{
    return <div className='backdrop' onClick={props.onClose}/>
}

const ModelOverlay = (props) =>{
    return(
        <div className='modal'>
            <div className='content'>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays')    

const Model = (props) => {
  return (
    <div>
        {ReactDOM.createPortal(<Backdrop onClick={props.onClose}/>, portalElement)}
        {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>, portalElement)}
    </div>
  )
}

export default Model
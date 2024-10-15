import React, { useEffect, useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import "./Modal.css";

const Modal = ({open, onClose ,children}) => {
    const modalBoxRef = useRef(null);

    const handleOnBackgroundClick = (event) => {
        if(!modalBoxRef.current.contains(event.target)){
            onClose();
        }
    }

    useEffect(() => {
        if(open) document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        }
    },[open])

    if(open){
        return (
            <div className="modal"> 
                <div className="modalBackground" onClick={handleOnBackgroundClick}></div>
                <div className="modalContent">
                    <div className="modalCloseButton" onClick={onClose}>
                        <IoCloseOutline/>
                    </div>
                    <div className="modalBox" ref={modalBoxRef}>
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;
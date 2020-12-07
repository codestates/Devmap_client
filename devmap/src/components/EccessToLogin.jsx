import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import Button from './Button'
import Login from './Login';

/* <button
                className="login-modal-open-close"
                onClick={handleLoginModal}
            >Login
            </button> */


function EccessToLogin({ handleLoginStatus, onEmailHandler, onPasswordHandler }) {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleLoginModal = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div className="login-modal">            
            <Button onClick={handleLoginModal}>sign in</Button>  
                {isOpen && (
                    <dialog
                        className="dialog"
                        style={{position: "absolute"}}
                        open
                    >
                        <button className="modal-close-button" onClick={handleLoginModal}>X</button>
                        <Login 
                          handleLoginStatus={handleLoginStatus}
                          onEmailHandler={onEmailHandler}
                          onPasswordHandler={onPasswordHandler}
                        />
                    </dialog>
                )}
        </div>
    );
}

export default withRouter(EccessToLogin);
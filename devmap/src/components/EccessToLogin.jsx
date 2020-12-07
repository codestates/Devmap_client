import React, { useState } from 'react';
import { withRouter } from "react-router-dom";

import Login from './Login';

function EccessToLogin({ handleLoginStatus, onEmailHandler, onPasswordHandler }) {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleLoginModal = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div className="login-modal">
            <button
                className="login-modal-open-close"
                onClick={handleLoginModal}
            >Login
            </button>
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
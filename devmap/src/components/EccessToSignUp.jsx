import React, { useState } from 'react';
import { withRouter } from "react-router-dom";

import SignUp from './SignUp';

function EccessToSignUp({ onEmailHandler, onPasswordHandler, onConfirmPasswordHandler, onNicknameHandler }) {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleSignUpModal = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div className="signup-modal">
            <button
                className="signup-modal-open-close"
                onClick={handleSignUpModal}
            >Sign Up
            </button>
                {isOpen && (
                    <dialog
                        className="dialog"
                        style={{position: "absolute"}}
                        open
                    >
                        <button className="modal-close-button" onClick={handleSignUpModal}>X</button>
                        <SignUp 
                          onEmailHandler={onEmailHandler} 
                          onPasswordHandler={onPasswordHandler}
                          onConfirmPasswordHandler={onConfirmPasswordHandler}
                          onNicknameHandler={onNicknameHandler}                       
                        />
                    </dialog>
                )}
        </div>
    );
}

export default withRouter(EccessToSignUp);
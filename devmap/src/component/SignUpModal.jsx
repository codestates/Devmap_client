import React, { useState , useEffect} from 'react';
import styled from 'styled-components';

import SignUp from './SignUp';

export default function SignUpModal({ onEmailHandler, onPasswordHandler }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true)
    };
    const closeModal = () => {
        setIsModalOpen(false)
    };

    return (
        <SignUp onEmailHandler={onEmailHandler} onPasswordHandler={onPasswordHandler} />
    )
    
}
import React, { useState , useEffect} from 'react';
import styled from 'styled-components';

function SignModal({ onEmailHandler, onPasswordHandler }) {
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
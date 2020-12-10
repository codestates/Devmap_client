import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mainImage from '../png/main-image.png';

function Main() {
    const Main_style = styled.div`
        width: 97%;
        height: 85%;
        background-color: #EEFFFE;
        border: 5px solid;
        border-radius: 3%;
        border-color: #A3DFEA;
        text-align: center;
        margin: 0 auto;
        padding-top: 80px;
        padding-bottom: 30px;
    `;

    const Image_style = styled.img`
        width: inherit;
        max-width: 40%;
        max-height: 40%;
        text-align: center;
        padding-bottom: 10px;
    `;

    const Text_style = styled.p`
        color: #A3DFEA;
        font-size: 30px;
        font-family: Gugi;
    `;

    const Button_Ul_style = styled.ul`
        display: inline-block;
        list-style: none;
        padding-left: 0px;
    `;

    const Button_Li_style= styled.li`
        float: left;
        margin: 5px;
    `;

    const Button_style = styled.button`
        width: 350px;
        height: 160px;
        background-color: #FFF4F4;
        border: 2px solid;
        border-radius: 10%;
        border-color: #FED0D3;
        color: #FED0D3;
        font-size: 25px;
        font-family: Jua;
    `;

  return (
    <Main_style>
        <Image_style src={mainImage} alt="oops!" />
        <Text_style>
            개발 공부를 하기로 마음먹은 당신..<br/>
            무엇부터 공부해야 할지, 이 다음에는 무엇을 해야할 지 막막하시죠?<br/>
            Devmap에서 청사진을 미리 살펴보세요!
        </Text_style>
        <Button_Ul_style>
            <Button_Li_style>
                <Link to="/totalmap-front">
                    <Button_style>프론트엔드 로드맵</Button_style>
                </Link>
            </Button_Li_style>
            <Button_Li_style>
                <Link to="/totalmap-back">
                    <Button_style>백엔드 로드맵</Button_style>
                </Link>
            </Button_Li_style>
        </Button_Ul_style>
    </Main_style>
  );
};

export default Main;
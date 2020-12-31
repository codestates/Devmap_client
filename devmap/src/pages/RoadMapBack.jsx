import React, { useState } from 'react';

import { Link } from "react-router-dom";

import styled from 'styled-components';
import { darken, lighten } from 'polished';

import ModalBack from './ModalBack';

import arrow_1 from '../img/arrow_1.png';
import arrow_6 from '../img/arrow_6.png';
import arrow_9 from '../img/arrow_9.png';
import arrow_10 from '../img/arrow_10.png';
import arrow_11 from '../img/arrow_11.png';
import arrow_12 from '../img/arrow_12.png';
import arrow_13 from '../img/arrow_13.png';

const InfoText = styled.div`
    margin-top: 2px;
    padding-left: 10px;
    color: #78b8c4;
    font-size: 20px;
    font-family: Jua;
    float: left;
`;

const ToFront = styled.button`
    margin-top: 4px;
    margin-right: 10px;
    color: #a3dfea;
    background-color: #eefffe;
    font-size: 20px;
    font-family: Jua;
    float: right;
    border: 3px solid;
    border-radius: 10px;
    outline: 0;
    cursor: pointer;
    &:hover {
        background: ${lighten(0.012, '#eefffe')};
        box-shadow:  0 2px #dedede;
    }
    &:active {
        background: ${darken(0.0005, '#eefffe')};
        box-shadow: 0 2px #ffffff;
        transform: translateY(4px);
    }
`;

const RoadMapBorder = styled.div`
    width: 97%;
    height: 755px;
    margin: 0 auto;
    background-color: #eefffe;
    border: 5px solid;
    border-radius: 10px;
    border-color: #a3dfea;
`;

const RoadMapContainer = styled.div`
    display: grid;
    width: 97%;
    height: 700px;
    margin: 0 auto;
    margin-top: 0%;
    // border: 1px solid;
    grid-template-rows: repeat(auto-fit, minmax(8.7%, 1fr));
    grid-template-columns: repeat(auto-fit, minmax(2%, 1fr));
`;

const Invisible = styled.button`
    font-size: 30px;
    font-color: #eefffe;
    opacity: 1%;
    background-color: #eefffe;
    border: #eefffe
`;

const Browser = styled.button`
    border: 3px solid;
    border-radius: 10px;
    color: #a3dfea;
    background-color: #eefffe;
    text-align: center;
    font-size: 20px;
    font-family: Jua;
    outline: 0;
    cursor: pointer;
    grid-column-start: 2;
    grid-column-end: 5;
    grid-row-start: 6;
    grid-row-end: 7;
    &:hover {
        background: ${lighten(0.012, '#eefffe')};
        box-shadow:  0 2px #dedede;
    }
    &:active {
        background: ${darken(0.0005, '#eefffe')};
        box-shadow: 0 2px #ffffff;
        transform: translateY(4px);
    }
`;

const Language = styled.button`
    border: 3px solid;
    border-radius: 10px;
    color: #a3dfea;
    background-color: #eefffe;
    text-align: center;
    font-size: 20px;
    font-family: Jua;
    outline: 0;
    cursor: pointer;
    grid-column-start: 7;
    grid-column-end: 10;
    grid-row-start: 6;
    grid-row-end: 7;
    &:hover {
        background: ${lighten(0.012, '#eefffe')};
        box-shadow:  0 2px #dedede;
    }
    &:active {
        background: ${darken(0.0005, '#eefffe')};
        box-shadow: 0 2px #ffffff;
        transform: translateY(4px);
    }
`;

const Java = styled.button`
    margin-top: 20px;
    border: 3px solid;
    border-radius: 10px;
    color: #a3dfea;
    background-color: #eefffe;
    text-align: center;
    font-size: 20px;
    font-family: Jua;
    outline: 0;
    cursor: pointer;
    grid-column-start: 10;
    grid-column-end: 15;
    grid-row-start: 4;
    grid-row-end: 5;
    &:hover {
        background: ${lighten(0.012, '#eefffe')};
        box-shadow:  0 2px #dedede;
    }
    &:active {
        background: ${darken(0.0005, '#eefffe')};
        box-shadow: 0 2px #ffffff;
        transform: translateY(4px);
    }
`;

const Python = styled.button`
    margin-top: 20px;
    border: 3px solid;
    border-radius: 10px;
    color: #a3dfea;
    background-color: #eefffe;
    text-align: center;
    font-size: 20px;
    font-family: Jua;
    outline: 0;
    cursor: pointer;
    grid-column-start: 10;
    grid-column-end: 15;
    grid-row-start: 3;
    grid-row-end: 4;
    &:hover {
        background: ${lighten(0.012, '#eefffe')};
        box-shadow:  0 2px #dedede;
    }
    &:active {
        background: ${darken(0.0005, '#eefffe')};
        box-shadow: 0 2px #ffffff;
        transform: translateY(4px);
    }
`;

const JavaScript = styled.button`
    margin-top: 20px;
    border: 3px solid;
    border-radius: 10px;
    color: #a3dfea;
    background-color: #eefffe;
    text-align: center;
    font-size: 20px;
    font-family: Jua;
    outline: 0;
    cursor: pointer;
    grid-column-start: 10;
    grid-column-end: 15;
    grid-row-start: 2;
    grid-row-end: 3;
    &:hover {
        background: ${lighten(0.012, '#eefffe')};
        box-shadow:  0 2px #dedede;
    }
    &:active {
        background: ${darken(0.0005, '#eefffe')};
        box-shadow: 0 2px #ffffff;
        transform: translateY(4px);
    }
`;

const FrameWork = styled.button`
    border: 3px solid;
    border-radius: 10px;
    color: #a3dfea;
    background-color: #eefffe;
    text-align: center;
    font-size: 20px;
    font-family: Jua;
    outline: 0;
    cursor: pointer;
    grid-column-start: 16;
    grid-column-end: 20;
    grid-row-start: 3;
    grid-row-end: 4;
    &:hover {
        background: ${lighten(0.012, '#eefffe')};
        box-shadow:  0 2px #dedede;
    }
    &:active {
        background: ${darken(0.0005, '#eefffe')};
        box-shadow: 0 2px #ffffff;
        transform: translateY(4px);
    }
`;

const Spring = styled.button`
    margin-top: 20px;
    border: 3px solid;
    border-radius: 10px;
    color: #a3dfea;
    background-color: #eefffe;
    text-align: center;
    font-size: 20px;
    font-family: Jua;
    outline: 0;
    cursor: pointer;
    grid-column-start: 21;
    grid-column-end: 25;
    grid-row-start: 4;
    grid-row-end: 5;
    &:hover {
        background: ${lighten(0.012, '#eefffe')};
        box-shadow:  0 2px #dedede;
    }
    &:active {
        background: ${darken(0.0005, '#eefffe')};
        box-shadow: 0 2px #ffffff;
        transform: translateY(4px);
    }
`;

const Django = styled.button`
    margin-top: 20px;
    border: 3px solid;
    border-radius: 10px;
    color: #a3dfea;
    background-color: #eefffe;
    text-align: center;
    font-size: 20px;
    font-family: Jua;
    outline: 0;
    cursor: pointer;
    grid-column-start: 21;
    grid-column-end: 25;
    grid-row-start: 3;
    grid-row-end: 4;
    &:hover {
        background: ${lighten(0.012, '#eefffe')};
        box-shadow:  0 2px #dedede;
    }
    &:active {
        background: ${darken(0.0005, '#eefffe')};
        box-shadow: 0 2px #ffffff;
        transform: translateY(4px);
    }
`;

const Node = styled.button`
    margin-top: 20px;
    border: 3px solid;
    border-radius: 10px;
    color: #a3dfea;
    background-color: #eefffe;
    text-align: center;
    font-size: 20px;
    font-family: Jua;
    outline: 0;
    cursor: pointer;
    grid-column-start: 21;
    grid-column-end: 25;
    grid-row-start: 2;
    grid-row-end: 3;
    &:hover {
        background: ${lighten(0.012, '#eefffe')};
        box-shadow:  0 2px #dedede;
    }
    &:active {
        background: ${darken(0.0005, '#eefffe')};
        box-shadow: 0 2px #ffffff;
        transform: translateY(4px);
    }
`;

const VersionControl = styled.button`
    border: 3px solid;
    border-radius: 10px;
    color: #a3dfea;
    background-color: #eefffe;
    text-align: center;
    font-size: 20px;
    font-family: Jua;
    outline: 0;
    cursor: pointer;
    grid-column-start: 12;
    grid-column-end: 17;
    grid-row-start: 6;
    grid-row-end: 7;
    &:hover {
        background: ${lighten(0.012, '#eefffe')};
        box-shadow:  0 2px #dedede;
    }
    &:active {
        background: ${darken(0.0005, '#eefffe')};
        box-shadow: 0 2px #ffffff;
        transform: translateY(4px);
    }
`;

const DataBase = styled.button`
    border: 3px solid;
    border-radius: 10px;
    color: #a3dfea;
    background-color: #eefffe;
    text-align: center;
    font-size: 20px;
    font-family: Jua;
    outline: 0;
    cursor: pointer;
    grid-column-start: 19;
    grid-column-end: 24;
    grid-row-start: 6;
    grid-row-end: 7;
    &:hover {
        background: ${lighten(0.012, '#eefffe')};
        box-shadow:  0 2px #dedede;
    }
    &:active {
        background: ${darken(0.0005, '#eefffe')};
        box-shadow: 0 2px #ffffff;
        transform: translateY(4px);
    }
`;

const PostgreSQL = styled.button`
    margin-bottom: 20px;
    border: 3px solid;
    border-radius: 10px;
    color: #a3dfea;
    background-color: #eefffe;
    text-align: center;
    font-size: 20px;
    font-family: Jua;
    outline: 0;
    cursor: pointer;
    grid-column-start: 23;
    grid-column-end: 28;
    grid-row-start: 8;
    grid-row-end: 9;
    &:hover {
        background: ${lighten(0.012, '#eefffe')};
        box-shadow:  0 2px #dedede;
    }
    &:active {
        background: ${darken(0.0005, '#eefffe')};
        box-shadow: 0 2px #ffffff;
        transform: translateY(4px);
    }
`;

const MySQL = styled.button`
    margin-bottom: 20px;
    border: 3px solid;
    border-radius: 10px;
    color: #a3dfea;
    background-color: #eefffe;
    text-align: center;
    font-size: 20px;
    font-family: Jua;
    outline: 0;
    cursor: pointer;
    grid-column-start: 23;
    grid-column-end: 28;
    grid-row-start: 9;
    grid-row-end: 10;
    &:hover {
        background: ${lighten(0.012, '#eefffe')};
        box-shadow:  0 2px #dedede;
    }
    &:active {
        background: ${darken(0.0005, '#eefffe')};
        box-shadow: 0 2px #ffffff;
        transform: translateY(4px);
    }
`;

const MSSQL = styled.button`
    margin-bottom: 20px;
    border: 3px solid;
    border-radius: 10px;
    color: #a3dfea;
    background-color: #eefffe;
    text-align: center;
    font-size: 20px;
    font-family: Jua;
    outline: 0;
    cursor: pointer;
    grid-column-start: 23;
    grid-column-end: 28;
    grid-row-start: 10;
    grid-row-end: 11;
    &:hover {
        background: ${lighten(0.012, '#eefffe')};
        box-shadow:  0 2px #dedede;
    }
    &:active {
        background: ${darken(0.0005, '#eefffe')};
        box-shadow: 0 2px #ffffff;
        transform: translateY(4px);
    }
`;

const MariaDB = styled.button`
    margin-bottom: 20px;
    border: 3px solid;
    border-radius: 10px;
    color: #a3dfea;
    background-color: #eefffe;
    text-align: center;
    font-size: 20px;
    font-family: Jua;
    outline: 0;
    cursor: pointer;
    grid-column-start: 23;
    grid-column-end: 28;
    grid-row-start: 11;
    grid-row-end: 12;
    &:hover {
        background: ${lighten(0.012, '#eefffe')};
        box-shadow:  0 2px #dedede;
    }
    &:active {
        background: ${darken(0.0005, '#eefffe')};
        box-shadow: 0 2px #ffffff;
        transform: translateY(4px);
    }
`;

const WebSocket = styled.button`
    margin-bottom: 20px;
    border: 3px solid;
    border-radius: 10px;
    color: #a3dfea;
    background-color: #eefffe;
    text-align: center;
    font-size: 20px;
    font-family: Jua;
    outline: 0;
    cursor: pointer;
    grid-column-start: 15;
    grid-column-end: 20;
    grid-row-start: 8;
    grid-row-end: 9;
    &:hover {
        background: ${lighten(0.012, '#eefffe')};
        box-shadow:  0 2px #dedede;
    }
    &:active {
        background: ${darken(0.0005, '#eefffe')};
        box-shadow: 0 2px #ffffff;
        transform: translateY(4px);
    }
`;

const NoSQL = styled.button`
    margin-bottom: 20px;
    border: 3px solid;
    border-radius: 10px;
    color: #a3dfea;
    background-color: #eefffe;
    text-align: center;
    font-size: 20px;
    font-family: Jua;
    outline: 0;
    cursor: pointer;
    grid-column-start: 15;
    grid-column-end: 20;
    grid-row-start: 9;
    grid-row-end: 10;
    &:hover {
        background: ${lighten(0.012, '#eefffe')};
        box-shadow:  0 2px #dedede;
    }
    &:active {
        background: ${darken(0.0005, '#eefffe')};
        box-shadow: 0 2px #ffffff;
        transform: translateY(4px);
    }
`;

const MongoDB = styled.button`
    margin-bottom: 20px;
    border: 3px solid;
    border-radius: 10px;
    color: #a3dfea;
    background-color: #eefffe;
    text-align: center;
    font-size: 20px;
    font-family: Jua;
    outline: 0;
    cursor: pointer;
    grid-column-start: 9;
    grid-column-end: 14;
    grid-row-start: 9;
    grid-row-end: 10;
    &:hover {
        background: ${lighten(0.012, '#eefffe')};
        box-shadow:  0 2px #dedede;
    }
    &:active {
        background: ${darken(0.0005, '#eefffe')};
        box-shadow: 0 2px #ffffff;
        transform: translateY(4px);
    }
`;

const API = styled.button`
    border: 3px solid;
    border-radius: 10px;
    color: #a3dfea;
    background-color: #eefffe;
    text-align: center;
    font-size: 20px;
    font-family: Jua;
    outline: 0;
    cursor: pointer;
    grid-column-start: 26;
    grid-column-end: 29;
    grid-row-start: 6;
    grid-row-end: 7;
    &:hover {
        background: ${lighten(0.012, '#eefffe')};
        box-shadow:  0 2px #dedede;
    }
    &:active {
        background: ${darken(0.0005, '#eefffe')};
        box-shadow: 0 2px #ffffff;
        transform: translateY(4px);
    }
`;

const Certification = styled.button`
    border: 3px solid;
    border-radius: 10px;
    color: #a3dfea;
    background-color: #eefffe;
    text-align: center;
    font-size: 20px;
    font-family: Jua;
    outline: 0;
    cursor: pointer;
    grid-column-start: 31;
    grid-column-end: 34;
    grid-row-start: 5;
    grid-row-end: 6;
    &:hover {
        background: ${lighten(0.012, '#eefffe')};
        box-shadow:  0 2px #dedede;
    }
    &:active {
        background: ${darken(0.0005, '#eefffe')};
        box-shadow: 0 2px #ffffff;
        transform: translateY(4px);
    }
`;

const Caching = styled.button`
    border: 3px solid;
    border-radius: 10px;
    color: #a3dfea;
    background-color: #eefffe;
    text-align: center;
    font-size: 20px;
    font-family: Jua;
    outline: 0;
    cursor: pointer;
    grid-column-start: 31;
    grid-column-end: 34;
    grid-row-start: 7;
    grid-row-end: 8;
    &:hover {
        background: ${lighten(0.012, '#eefffe')};
        box-shadow:  0 2px #dedede;
    }
    &:active {
        background: ${darken(0.0005, '#eefffe')};
        box-shadow: 0 2px #ffffff;
        transform: translateY(4px);
    }
`;

const Security = styled.button`
    border: 3px solid;
    border-radius: 10px;
    color: #a3dfea;
    background-color: #eefffe;
    text-align: center;
    font-size: 20px;
    font-family: Jua;
    outline: 0;
    cursor: pointer;
    grid-column-start: 36;
    grid-column-end: 40;
    grid-row-start: 6;
    grid-row-end: 7;
    &:hover {
        background: ${lighten(0.012, '#eefffe')};
        box-shadow:  0 2px #dedede;
    }
    &:active {
        background: ${darken(0.0005, '#eefffe')};
        box-shadow: 0 2px #ffffff;
        transform: translateY(4px);
    }
`;

const Testing = styled.button`
    border: 3px solid;
    border-radius: 10px;
    color: #a3dfea;
    background-color: #eefffe;
    text-align: center;
    font-size: 20px;
    font-family: Jua;
    outline: 0;
    cursor: pointer;
    grid-column-start: 42;
    grid-column-end: 46;
    grid-row-start: 6;
    grid-row-end: 7;
    &:hover {
        background: ${lighten(0.012, '#eefffe')};
        box-shadow:  0 2px #dedede;
    }
    &:active {
        background: ${darken(0.0005, '#eefffe')};
        box-shadow: 0 2px #ffffff;
        transform: translateY(4px);
    }
`;

const CICD = styled.button`
    border: 3px solid;
    border-radius: 10px;
    color: #a3dfea;
    background-color: #eefffe;
    text-align: center;
    font-size: 20px;
    font-family: Jua;
    outline: 0;
    cursor: pointer;
    grid-column-start: 48;
    grid-column-end: 51;
    grid-row-start: 6;
    grid-row-end: 7;
    &:hover {
        background: ${lighten(0.012, '#eefffe')};
        box-shadow:  0 2px #dedede;
    }
    &:active {
        background: ${darken(0.0005, '#eefffe')};
        box-shadow: 0 2px #ffffff;
        transform: translateY(4px);
    }
`;

const ArrowArrow1 = styled.img`
    width: 80%;
    margin-top: 30%;
    margin-left: 10%;
    grid-column-start: 5;
    grid-column-end: 7;
    grid-row-start: 6;
    grid-row-end: 7;
`;

const ArrowArrow2 = styled.img`
    width: 80%;
    margin-top: 30%;
    margin-left: 10%;
    grid-column-start: 10;
    grid-column-end: 12;
    grid-row-start: 6;
    grid-row-end: 7;
`;

const ArrowArrow3 = styled.img`
    width: 80%;
    margin-top: 30%;
    margin-left: 10%;
    grid-column-start: 17;
    grid-column-end: 19;
    grid-row-start: 6;
    grid-row-end: 7;
`;

const ArrowArrow4 = styled.img`
    width: 80%;
    margin-top: 30%;
    margin-left: 10%;
    grid-column-start: 24;
    grid-column-end: 26;
    grid-row-start: 6;
    grid-row-end: 7;
`;

const ArrowArrow5 = styled.img`
    width: 80%;
    margin-top: 30%;
    margin-left: 10%;
    grid-column-start: 29;
    grid-column-end: 31;
    grid-row-start: 6;
    grid-row-end: 7;
`;

const ArrowArrow6 = styled.img`
    width: 80%;
    margin-top: 30%;
    margin-left: 10%;
    grid-column-start: 34;
    grid-column-end: 36;
    grid-row-start: 6;
    grid-row-end: 7;
`;

const ArrowArrow7 = styled.img`
    width: 80%;
    margin-top: 30%;
    margin-left: 10%;
    grid-column-start: 40;
    grid-column-end: 42;
    grid-row-start: 6;
    grid-row-end: 7;
`;

const ArrowArrow8 = styled.img`
    width: 80%;
    margin-top: 30%;
    margin-left: 10%;
    grid-column-start: 46;
    grid-column-end: 48;
    grid-row-start: 6;
    grid-row-end: 7;
`;

const ArrowArrow9 = styled.img`
    width: 40%;
    margin-top: 5%;
    margin-left: 25%;
    grid-column-start: 32;
    grid-column-end: 33;
    grid-row-start: 6;
    grid-row-end: 7;
`;

const ArrowArrow10 = styled.img`
    width: 50%;
    margin-top: 35%;
    margin-left: 20%;
    grid-column-start: 8;
    grid-column-end: 10;
    grid-row-start: 2;
    grid-row-end: 6;
`;

const ArrowArrow11 = styled.img`
    width: 60%;
    margin-top: 15%;
    margin-left: 25%;
    grid-column-start: 20;
    grid-column-end: 23;
    grid-row-start: 7;
    grid-row-end: 12;
`;

const ArrowArrow12 = styled.img`
    width: 80%;
    margin-top: 40%;
    margin-left: 10%;
    grid-column-start: 14;
    grid-column-end: 15;
    grid-row-start: 9;
    grid-row-end: 10;
`;

const ArrowArrow13 = styled.img`
    width: 85%;
    margin-top: 150%;
    margin-left: 5%;
    grid-column-start: 20;
    grid-column-end: 21;
    grid-row-start: 2;
    grid-row-end: 5;
`;

const ArrowArrow14 = styled.img`
    width: 85%;
    margin-top: 150%;
    margin-left: 5%;
    grid-column-start: 15;
    grid-column-end: 16;
    grid-row-start: 2;
    grid-row-end: 5;
`;

export default function RoadMapBack() {

    const [isBackModalOpen, setIsBackModalOpen] = useState({name: '', modal: false});

    const openBackModal = (name) => {
        setIsBackModalOpen({name: name, modal: true})
        // console.log(isBackModalOpen)
    };
    const closeBackModal = () => {
        setIsBackModalOpen({name: '', modal: false})
    };


    return (
        <RoadMapBorder>
            <InfoText>*자세한 내용을 보시려면 아래 각 항목을 클릭하세요</InfoText>
            <Link to="/users/totalmap-front">              
                <ToFront>프론트엔드 로드맵 보러가기</ToFront>
            </Link>
            <RoadMapContainer>
                <Invisible>(1)보이나</Invisible>
                <Browser onClick={() => openBackModal('browser')}>브라우저</Browser>
                <Language onClick={() => openBackModal('language')}>언 어</Language>
                <Java onClick={() => openBackModal('java')}>Java</Java>
                <Python onClick={() => openBackModal('python')}>Python</Python>
                <JavaScript onClick={() => openBackModal('javascript')}>JavaScript</JavaScript>
                <FrameWork onClick={() => openBackModal('framework')}>프레임 워크</FrameWork>
                <Spring onClick={() => openBackModal('spring')}>Spring</Spring>
                <Django onClick={() => openBackModal('django')}>Django</Django>
                <Node onClick={() => openBackModal('node')}>Node.js</Node>
                <Invisible>(11)보이나</Invisible>
                <VersionControl onClick={() => openBackModal('version')}>버전 관리 시스템</VersionControl>
                <DataBase onClick={() => openBackModal('database')}>데이터 베이스</DataBase>
                <PostgreSQL onClick={() => openBackModal('postgresql')}>PostgreSQL</PostgreSQL>
                <MySQL onClick={() => openBackModal('mysql')}>MySQL</MySQL>
                <MSSQL onClick={() => openBackModal('mssql')}>MSSQL</MSSQL>
                <MariaDB onClick={() => openBackModal('mariadb')}>MariaDB</MariaDB>
                <WebSocket onClick={() => openBackModal('websocket')}>웹소켓 I/O</WebSocket>
                <NoSQL onClick={() => openBackModal('nosql')}>NoSQL</NoSQL>
                <MongoDB onClick={() => openBackModal('mongodb')}>MongoDB</MongoDB>
                <Invisible>(21)보이나</Invisible>
                <API onClick={() => openBackModal('api')}>API</API>
                <Certification onClick={() => openBackModal('authentication')}>인증</Certification>
                <Caching onClick={() => openBackModal('caching')}>캐싱</Caching>
                <Security onClick={() => openBackModal('security')}>웹 보안 지식</Security>
                <Testing onClick={() => openBackModal('testing')}>테스팅 도구</Testing>
                <CICD onClick={() => openBackModal('cicd')}>CI/CD</CICD>
                <ArrowArrow1 src={arrow_1} alt='oops!' />
                <ArrowArrow2 src={arrow_1} alt='oops!' />
                <ArrowArrow3 src={arrow_1} alt='oops!' />
                <Invisible>(31)보이나</Invisible>
                <ArrowArrow4 src={arrow_1} alt='oops!' />
                <ArrowArrow5 src={arrow_1} alt='oops!' />
                <ArrowArrow6 src={arrow_1} alt='oops!' />
                <ArrowArrow7 src={arrow_1} alt='oops!' />
                <ArrowArrow8 src={arrow_1} alt='oops!' />
                <ArrowArrow9 src={arrow_6} alt='oops!' />
                <ArrowArrow10 src={arrow_9} alt='oops!' />
                <ArrowArrow11 src={arrow_10} alt='oops!' />
                <ArrowArrow12 src={arrow_11} alt='oops!' />
                <Invisible>(41)보이나</Invisible>
                <ArrowArrow13 src={arrow_12} alt='oops!' />
                <ArrowArrow14 src={arrow_13} alt='oops!' />
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(51)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(61)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(71)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(81)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(91)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(101)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(111)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(121)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(131)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(141)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(151)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(161)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(171)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(181)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(191)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(201)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(211)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(221)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>            
                <Invisible>(231)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(241)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(251)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(261)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(271)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(281)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(291)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(301)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(311)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(321)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(331)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(341)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(351)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(361)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(371)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(381)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(391)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(401)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(411)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(421)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(431)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(441)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(451)보이나</Invisible>
                {/* <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(461)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(471)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(481)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(491)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(501)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(511)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(521)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(531)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(541)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div> */}
            </RoadMapContainer>
            <ModalBack isBackModalOpen={isBackModalOpen} closeBackModal={closeBackModal} />
        </RoadMapBorder>
    )
}
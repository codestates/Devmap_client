import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

import arrow_1 from '../img/arrow_1.png';
import arrow_2 from '../img/arrow_2.png';
import arrow_3 from '../img/arrow_3.png';
import arrow_4 from '../img/arrow_4.png';
import arrow_5 from '../img/arrow_5.png';
import arrow_6 from '../img/arrow_6.png';
import arrow_7 from '../img/arrow_7.png';
import arrow_8 from '../img/arrow_8.png';
import etc from '../img/etc.png';

export default function RoadMapFront() {
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
        margin-top: 1.5%;
        // border: 1px solid;
        grid-template-rows: repeat(auto-fit, minmax(9%, 1fr));
        grid-template-columns: repeat(auto-fit, minmax(2%, 1fr));
    `;

    const RoadMapItem = styled.button`
        border: 3px solid;
        border-radius: 10px;
        color: #a3dfea;
        background-color: #eefffe;
        text-align: center;
        font-size: 20px;
        font-family: Jua;
        cursor: pointer;
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
        cursor: pointer;
        grid-column-start: 2;
        grid-column-end: 5;
        grid-row-start: 6;
        grid-row-end: 7;
    `;

    const Language = styled.button`
        border: 3px solid;
        border-radius: 10px;
        color: #a3dfea;
        background-color: #eefffe;
        text-align: center;
        font-size: 20px;
        font-family: Jua;
        cursor: pointer;
        grid-column-start: 7;
        grid-column-end: 10;
        grid-row-start: 6;
        grid-row-end: 7;
    `;

    const HTML = styled.button`
        border: 3px solid;
        border-radius: 10px;
        color: #a3dfea;
        background-color: #eefffe;
        text-align: center;
        font-size: 20px;
        font-family: Jua;
        cursor: pointer;
        grid-column-start: 12;
        grid-column-end: 15;
        grid-row-start: 5;
        grid-row-end: 6;
    `;

    const CSS = styled.button`
        border: 3px solid;
        border-radius: 10px;
        color: #a3dfea;
        background-color: #eefffe;
        text-align: center;
        font-size: 20px;
        font-family: Jua;
        cursor: pointer;
        grid-column-start: 12;
        grid-column-end: 15;
        grid-row-start: 7;
        grid-row-end: 8;
    `;

    const CSSFrameWork = styled.button`
        margin-bottom: 20px;
        border: 3px solid;
        border-radius: 10px;
        color: #a3dfea;
        background-color: #eefffe;
        text-align: center;
        font-size: 20px;
        font-family: Jua;
        cursor: pointer;
        grid-column-start: 16;
        grid-column-end: 21;
        grid-row-start: 8;
        grid-row-end: 9;
    `;

    const TypeScript = styled.button`
        border: 3px solid;
        border-radius: 10px;
        color: #a3dfea;
        background-color: #eefffe;
        text-align: center;
        font-size: 20px;
        font-family: Jua;
        cursor: pointer;
        grid-column-start: 11;
        grid-column-end: 16;
        grid-row-start: 3;
        grid-row-end: 4;
    `;

    const JavaScript = styled.button`
        border: 3px solid;
        border-radius: 10px;
        color: #a3dfea;
        background-color: #eefffe;
        text-align: center;
        font-size: 20px;
        font-family: Jua;
        cursor: pointer;
        grid-column-start: 11;
        grid-column-end: 16;
        grid-row-start: 9;
        grid-row-end: 10;
    `;

    const CSSInJs = styled.button`
        margin-bottom: 20px;
        border: 3px solid;
        border-radius: 10px;
        color: #a3dfea;
        background-color: #eefffe;
        text-align: center;
        font-size: 20px;
        font-family: Jua;
        cursor: pointer;
        grid-column-start: 16;
        grid-column-end: 21;
        grid-row-start: 10;
        grid-row-end: 11;
    `;

    const VersionControl = styled.button`
        border: 3px solid;
        border-radius: 10px;
        color: #a3dfea;
        background-color: #eefffe;
        text-align: center;
        font-size: 20px;
        font-family: Jua;
        cursor: pointer;
        grid-column-start: 22;
        grid-column-end: 27;
        grid-row-start: 5;
        grid-row-end: 6;
    `;

    const Testing = styled.button`
        border: 3px solid;
        border-radius: 10px;
        color: #a3dfea;
        background-color: #eefffe;
        text-align: center;
        font-size: 20px;
        font-family: Jua;
        cursor: pointer;
        grid-column-start: 22;
        grid-column-end: 27;
        grid-row-start: 7;
        grid-row-end: 8;
    `;

    const FrameWork = styled.button`
        border: 3px solid;
        border-radius: 10px;
        color: #a3dfea;
        background-color: #eefffe;
        text-align: center;
        font-size: 20px;
        font-family: Jua;
        cursor: pointer;
        grid-column-start: 29;
        grid-column-end: 33;
        grid-row-start: 6;
        grid-row-end: 7;
    `;

    const React = styled.button`
        margin-bottom: 20px;
        border: 3px solid;
        border-radius: 10px;
        color: #a3dfea;
        background-color: #eefffe;
        text-align: center;
        font-size: 20px;
        font-family: Jua;
        cursor: pointer;
        grid-column-start: 31;
        grid-column-end: 34;
        grid-row-start: 5;
        grid-row-end: 6;
    `;

    const Vue = styled.button`
        margin-bottom: 20px;
        border: 3px solid;
        border-radius: 10px;
        color: #a3dfea;
        background-color: #eefffe;
        text-align: center;
        font-size: 20px;
        font-family: Jua;
        cursor: pointer;
        grid-column-start: 31;
        grid-column-end: 34;
        grid-row-start: 4;
        grid-row-end: 5;
    `;

    const Angular = styled.button`
        margin-bottom: 20px;
        border: 3px solid;
        border-radius: 10px;
        color: #a3dfea;
        background-color: #eefffe;
        text-align: center;
        font-size: 20px;
        font-family: Jua;
        cursor: pointer;
        grid-column-start: 31;
        grid-column-end: 34;
        grid-row-start: 3;
        grid-row-end: 4;
    `;

    const Redux = styled.button`
        margin-bottom: 20px;
        border: 3px solid;
        border-radius: 10px;
        color: #a3dfea;
        background-color: #eefffe;
        text-align: center;
        font-size: 20px;
        font-family: Jua;
        cursor: pointer;
        grid-column-start: 35;
        grid-column-end: 38;
        grid-row-start: 5;
        grid-row-end: 6;
    `;

    const BuildTool = styled.button`
        border: 3px solid;
        border-radius: 10px;
        color: #a3dfea;
        background-color: #eefffe;
        text-align: center;
        font-size: 20px;
        font-family: Jua;
        cursor: pointer;
        grid-column-start: 35;
        grid-column-end: 38;
        grid-row-start: 6;
        grid-row-end: 7;
    `;

    const Security = styled.button`
        border: 3px solid;
        border-radius: 10px;
        color: #a3dfea;
        background-color: #eefffe;
        text-align: center;
        font-size: 20px;
        font-family: Jua;
        cursor: pointer;
        grid-column-start: 40;
        grid-column-end: 44;
        grid-row-start: 6;
        grid-row-end: 7;
    `;

    const Mobile = styled.button`
        border: 3px solid;
        border-radius: 10px;
        color: #a3dfea;
        background-color: #eefffe;
        text-align: center;
        font-size: 20px;
        font-family: Jua;
        cursor: pointer;
        grid-column-start: 45;
        grid-column-end: 50;
        grid-row-start: 4;
        grid-row-end: 5;
    `;

    const Server = styled.button`
        border: 3px solid;
        border-radius: 10px;
        color: #a3dfea;
        background-color: #eefffe;
        text-align: center;
        font-size: 20px;
        font-family: Jua;
        cursor: pointer;
        grid-column-start: 45;
        grid-column-end: 50;
        grid-row-start: 8;
        grid-row-end: 9;
    `;

    const Arrow_arrow_1 = styled.img`
        width: 80%;
        margin-top: 30%;
        margin-left: 10%;
        grid-column-start: 5;
        grid-column-end: 7;
        grid-row-start: 6;
        grid-row-end: 7;
    `;

    const Arrow_arrow_2 = styled.img`
        width: 80%;
        margin-top: 30%;
        margin-left: 10%;
        grid-column-start: 10;
        grid-column-end: 12;
        grid-row-start: 6;
        grid-row-end: 7;
    `;

    const Arrow_arrow_3 = styled.img`
        width: 80%;
        margin-top: 30%;
        margin-left: 10%;
        grid-column-start: 27;
        grid-column-end: 29;
        grid-row-start: 6;
        grid-row-end: 7;
    `;

    const Arrow_arrow_4 = styled.img`
        width: 80%;
        margin-top: 30%;
        margin-left: 10%;
        grid-column-start: 33;
        grid-column-end: 35;
        grid-row-start: 6;
        grid-row-end: 7;
    `;

    const Arrow_arrow_5 = styled.img`
        width: 80%;
        margin-top: 30%;
        margin-left: 10%;
        grid-column-start: 38;
        grid-column-end: 40;
        grid-row-start: 6;
        grid-row-end: 7;
    `;

    const Arrow_arrow_6 = styled.img`
        width: 90%;
        margin-top: 8%;
        margin-left: 6%;
        grid-column-start: 15;
        grid-column-end: 22;
        grid-row-start: 6;
        grid-row-end: 7;
    `;

    const Arrow_arrow_7 = styled.img`
        width: 80%;
        margin-top: 22%;
        margin-left: 18%;
        grid-column-start: 8;
        grid-column-end: 10;
        grid-row-start: 3;
        grid-row-end: 6;
    `;

    const Arrow_arrow_8 = styled.img`
        width: 80%;
        margin-top: 22%;
        margin-left: 18%;
        grid-column-start: 8;
        grid-column-end: 10;
        grid-row-start: 7;
        grid-row-end: 10;
    `;

    const Arrow_arrow_9 = styled.img`
        width: 60%;
        margin-top: 5%;
        margin-left: 21%;
        grid-column-start: 13;
        grid-column-end: 16;
        grid-row-start: 8;
        grid-row-end: 9;
    `;

    const Arrow_arrow_10 = styled.img`
        width: 60%;
        margin-top: 5%;
        margin-left: 21%;
        grid-column-start: 13;
        grid-column-end: 16;
        grid-row-start: 10;
        grid-row-end: 11;
    `;

    const Arrow_arrow_11 = styled.img`
        width: 45%;
        margin-top: 12%;
        margin-left: 25%;
        grid-column-start: 13;
        grid-column-end: 14;
        grid-row-start: 6;
        grid-row-end: 7;
    `;

    const Arrow_arrow_12 = styled.img`
        width: 45%;
        margin-top: 12%;
        margin-left: 25%;
        grid-column-start: 24;
        grid-column-end: 25;
        grid-row-start: 6;
        grid-row-end: 7;
    `;

    const Arrow_arrow_13 = styled.img`
        width: 80%;
        margin-top: 22%;
        margin-left: 18%;
        grid-column-start: 29;
        grid-column-end: 31;
        grid-row-start: 3;
        grid-row-end: 6;
    `;

    const Arrow_arrow_14 = styled.img`
        width: 80%;
        margin-top: 30%;
        margin-left: 10%;
        grid-column-start: 34;
        grid-column-end: 35;
        grid-row-start: 5;
        grid-row-end: 6;
    `;

    const Arrow_arrow_15 = styled.img`
        width: 80%;
        margin-top: 30%;
        margin-left: 10%;
        grid-column-start: 44;
        grid-column-end: 46;
        grid-row-start: 6;
        grid-row-end: 7;
    `;

    const Arrow_arrow_16 = styled.img`
        width: 80%;
        margin-top: 30%;
        margin-left: 10%;
        grid-column-start: 47;
        grid-column-end: 49;
        grid-row-start: 6;
        grid-row-end: 7;
    `;

    // 일단 눌러서 들어가면 로드맵이 한번에 딱 뜬다
    // -> 
    // 거기서 하나를 누르면 거기에 해당하는 정보를 사이드 바(모달?)에서 띄운다(프론트엔드에서 정보(json) 관리!)

    return (
        <RoadMapBorder>
            <RoadMapContainer>
                <Invisible>(1)보이나</Invisible>
                <Arrow_arrow_1 src={arrow_1} alt='oops!' />
                <Arrow_arrow_2 src={arrow_1} alt='oops!' />
                <Arrow_arrow_3 src={arrow_1} alt='oops!' />
                <Arrow_arrow_4 src={arrow_1} alt='oops!' />
                <Arrow_arrow_5 src={arrow_1} alt='oops!' />
                <Arrow_arrow_6 src={arrow_2} alt='oops!' />
                <Arrow_arrow_7 src={arrow_3} alt='oops!' />
                <Arrow_arrow_8 src={arrow_4} alt='oops!' />
                <Arrow_arrow_9 src={arrow_5} alt='oops!' />
                <Invisible>(11)보이나</Invisible>
                <Arrow_arrow_10 src={arrow_5} alt='oops!' />
                <Arrow_arrow_11 src={arrow_6} alt='oops!' />
                <Arrow_arrow_12 src={arrow_6} alt='oops!' />
                <Arrow_arrow_13 src={arrow_7} alt='oops!' />
                <Arrow_arrow_14 src={arrow_8} alt='oops!' />
                <Arrow_arrow_15 src={arrow_1} alt='oops!' />
                <Arrow_arrow_16 src={etc} alt='oops!' />
                <div></div>
                <div></div>
                <Invisible>(21)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(31)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(41)보이나</Invisible>
                <div></div>
                <div></div>
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
                <Angular>Angular</Angular>
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
                <TypeScript>TypeScript</TypeScript>
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
                <Angular>Angular</Angular>
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
                <Vue>Vue.js</Vue>
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
                <Mobile>Mobile Application</Mobile>
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
                <HTML>HTML</HTML>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(221)보이나</Invisible>
                <VersionControl>버전 관리 시스템</VersionControl>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>            
                <React>리액트</React>
                <div></div>
                <Redux>Redux</Redux>
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
                <Browser>브라우저</Browser>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Language>언 어</Language>
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
                <FrameWork>프레임 워크</FrameWork>
                <div></div>
                <Invisible>(281)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <BuildTool>빌드 툴</BuildTool>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(291)보이나</Invisible>
                <div></div>
                <Security>웹 보안 지식</Security>
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
                <CSS>CSS</CSS>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(321)보이나</Invisible>
                <Testing>테스팅 도구</Testing>
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
                <CSSFrameWork>CSS 프레임 워크</CSSFrameWork>
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
                <Server>서버사이드 렌더링</Server>
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
                <JavaScript>JavaScript</JavaScript>
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
                <div></div>
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
                <CSSInJs>CSS-in-JS</CSSInJs>
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
                <div></div>
            </RoadMapContainer>
        </RoadMapBorder>
    )
}
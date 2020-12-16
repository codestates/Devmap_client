import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

import ModalFront from './ModalFront';
// typeScript로 모달 실험 중임

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

    const [isFrontModalOpen, setIsFrontModalOpen] =
    useState(false
        // browser: false,
        // language: false,
        // html: false,
        // css: false,
        // cssF: false,
        // typeScript: false,
        // javaScript: false,
        // cssinjs: false,
        // versionControl: false,
        // testing: false,
        // framework: false,
        // react: false,
        // vue: false,
        // angular: false,
        // redux: false,
        // build: false,
        // security: false,
        // mobile: false,
        // server: false
    );

    // const openBrowserModal = () => {
    //     setIsFrontModalOpen({browser: !isFrontModalOpen.browser})
    //     console.log(isFrontModalOpen.browser)
    // };
    // const openLanguageModal = () => {
    //     setIsFrontModalOpen({language: !isFrontModalOpen.language})
    //     console.log(isFrontModalOpen.language)
    // };
    // const openHtmlModal = () => {
    //     setIsFrontModalOpen({html: !isFrontModalOpen.html})
    //     console.log(isFrontModalOpen.html)
    // };
    // const openCssModal = () => {
    //     setIsFrontModalOpen({css: !isFrontModalOpen.css})
    //     console.log(isFrontModalOpen.css)
    // };
    // const openCssFModal = () => {
    //     setIsFrontModalOpen({cssF: !isFrontModalOpen.cssF})
    //     console.log(isFrontModalOpen.cssF)
    // };



    const openFrontModal = () => {
        setIsFrontModalOpen(!isFrontModalOpen)
        // console.log(isFrontModalOpen)
    };
    const closeFrontModal = () => {
        setIsFrontModalOpen(false)
    };



    // const openJavaScriptModal = () => {
    //     setIsFrontModalOpen({javaScript: !isFrontModalOpen.javaScript})
    //     console.log(isFrontModalOpen.javaScript)
    // };
    // const openCssInJsModal = () => {
    //     setIsFrontModalOpen({cssinjs: !isFrontModalOpen.cssinjs})
    //     console.log(isFrontModalOpen.cssinjs)
    // };
    // const openVersionControlModal = () => {
    //     setIsFrontModalOpen({versionControl: !isFrontModalOpen.versionControl})
    //     console.log(isFrontModalOpen.versionControl)
    // };
    // const openTestingModal = () => {
    //     setIsFrontModalOpen({testing: !isFrontModalOpen.testing})
    //     console.log(isFrontModalOpen.testing)
    // };
    // const openFrameworkModal = () => {
    //     setIsFrontModalOpen({framework: !isFrontModalOpen.framework})
    //     console.log(isFrontModalOpen.framework)
    // };
    // const openReactModal = () => {
    //     setIsFrontModalOpen({react: !isFrontModalOpen.react})
    //     console.log(isFrontModalOpen.react)
    // };
    // const openVueModal = () => {
    //     setIsFrontModalOpen({vue: !isFrontModalOpen.vue})
    //     console.log(isFrontModalOpen.vue)
    // };
    // const openAngularModal = () => {
    //     setIsFrontModalOpen({angular: !isFrontModalOpen.angular})
    //     console.log(isFrontModalOpen.angular)
    // };
    // const openReduxModal = () => {
    //     setIsFrontModalOpen({redux: !isFrontModalOpen.redux})
    //     console.log(isFrontModalOpen.redux)
    // };
    // const openBuildModal = () => {
    //     setIsFrontModalOpen({build: !isFrontModalOpen.build})
    //     console.log(isFrontModalOpen.build)
    // };
    // const openSecurityModal = () => {
    //     setIsFrontModalOpen({security: !isFrontModalOpen.security})
    //     console.log(isFrontModalOpen.security)
    // };
    // const openMobileModal = () => {
    //     setIsFrontModalOpen({mobile: !isFrontModalOpen.mobile})
    //     console.log(isFrontModalOpen.mobile)
    // };
    // const openServerModal = () => {
    //     setIsFrontModalOpen({server: !isFrontModalOpen.server})
    //     console.log(isFrontModalOpen.server)
    // };

    const InfoText = styled.span`
        margin-top: 2px;
        padding-left: 10px;
        color: #78b8c4;
        font-size: 20px;
        font-family: Jua;
        float: left;
    `;

    const ToBack = styled.button`
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

    // need to modify grid setting(under space)
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

    const RoadMapItem = styled.button`
        border: 3px solid;
        border-radius: 10px;
        color: #a3dfea;
        background-color: #eefffe;
        text-align: center;
        font-size: 20px;
        font-family: Jua;
        outline: 0;
        cursor: pointer;
    `;

    const Invisible = styled.button`
        font-size: 30px;
        font-color: #eefffe;
        opacity: 1%;
        background-color: #eefffe;
        border: #eefffe;
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

    const HTML = styled.button`
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
        grid-column-end: 15;
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

    const CSS = styled.button`
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
        grid-column-end: 15;
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

    const CSSFrameWork = styled.button`
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
        grid-column-start: 16;
        grid-column-end: 21;
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

    const TypeScript = styled.button`
        border: 3px solid;
        border-radius: 10px;
        color: #a3dfea;
        background-color: #eefffe;
        text-align: center;
        font-size: 20px;
        font-family: Jua;
        outline: 0;
        cursor: pointer;
        grid-column-start: 11;
        grid-column-end: 16;
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
        border: 3px solid;
        border-radius: 10px;
        color: #a3dfea;
        background-color: #eefffe;
        text-align: center;
        font-size: 20px;
        font-family: Jua;
        outline: 0;
        cursor: pointer;
        grid-column-start: 11;
        grid-column-end: 16;
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

    const CSSInJs = styled.button`
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
        grid-column-start: 16;
        grid-column-end: 21;
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
        grid-column-start: 22;
        grid-column-end: 27;
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
        grid-column-start: 22;
        grid-column-end: 27;
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
        grid-column-start: 29;
        grid-column-end: 33;
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

    const React = styled.button`
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

    const Vue = styled.button`
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
        grid-column-start: 31;
        grid-column-end: 34;
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

    const Angular = styled.button`
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
        grid-column-start: 31;
        grid-column-end: 34;
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

    const Redux = styled.button`
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
        grid-column-start: 35;
        grid-column-end: 38;
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

    const BuildTool = styled.button`
        border: 3px solid;
        border-radius: 10px;
        color: #a3dfea;
        background-color: #eefffe;
        text-align: center;
        font-size: 20px;
        font-family: Jua;
        outline: 0;
        cursor: pointer;
        grid-column-start: 35;
        grid-column-end: 38;
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
        grid-column-start: 40;
        grid-column-end: 44;
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

    const Mobile = styled.button`
        border: 3px solid;
        border-radius: 10px;
        color: #a3dfea;
        background-color: #eefffe;
        text-align: center;
        font-size: 20px;
        font-family: Jua;
        outline: 0;
        cursor: pointer;
        grid-column-start: 45;
        grid-column-end: 50;
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

    const Server = styled.button`
        border: 3px solid;
        border-radius: 10px;
        color: #a3dfea;
        background-color: #eefffe;
        text-align: center;
        font-size: 20px;
        font-family: Jua;
        outline: 0;
        cursor: pointer;
        grid-column-start: 45;
        grid-column-end: 50;
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
        width: 70%;
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
        width: 40%;
        margin-top: 12%;
        margin-left: 25%;
        grid-column-start: 13;
        grid-column-end: 14;
        grid-row-start: 6;
        grid-row-end: 7;
    `;

    const Arrow_arrow_12 = styled.img`
        width: 40%;
        margin-top: 12%;
        margin-left: 25%;
        grid-column-start: 24;
        grid-column-end: 25;
        grid-row-start: 6;
        grid-row-end: 7;
    `;

    const Arrow_arrow_13 = styled.img`
        width: 70%;
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
            <InfoText>*자세한 내용을 보시려면 아래 각 항목을 클릭하세요</InfoText>
            <Link to="/users/totalmap-back">              
                <ToBack>백엔드 로드맵 보러가기</ToBack>
            </Link>
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
                <TypeScript onClick={openFrontModal}>TypeScript</TypeScript>
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
                <Angular onClick={openFrontModal}>Angular</Angular>
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
                <Vue onClcik={openFrontModal}>Vue.js</Vue>
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
                <Mobile onClcik={openFrontModal}>Mobile Application</Mobile>
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
                <HTML onClcik={openFrontModal}>HTML</HTML>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(221)보이나</Invisible>
                <VersionControl onClcik={openFrontModal}>버전 관리 시스템</VersionControl>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>            
                <React onClick={openFrontModal}>리액트</React>
                <div></div>
                <Redux onClick={openFrontModal}>Redux</Redux>
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
                <Browser onClcik={openFrontModal}>브라우저</Browser>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Language onClcik={openFrontModal}>언 어</Language>
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
                <FrameWork onClcik={openFrontModal}>프레임 워크</FrameWork>
                <div></div>
                <Invisible>(281)보이나</Invisible>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <BuildTool onClcik={openFrontModal}>빌드 툴</BuildTool>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(291)보이나</Invisible>
                <div></div>
                <Security onClcik={openFrontModal}>웹 보안 지식</Security>
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
                <CSS onClcik={openFrontModal}>CSS</CSS>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Invisible>(321)보이나</Invisible>
                <Testing onClcik={openFrontModal}>테스팅 도구</Testing>
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
                <CSSFrameWork onClcik={openFrontModal}>CSS 프레임 워크</CSSFrameWork>
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
                <Server onClcik={openFrontModal}>서버사이드 렌더링</Server>
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
                <JavaScript onClcik={openFrontModal}>JavaScript</JavaScript>
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
                <CSSInJs onClcik={openFrontModal}>CSS-in-JS</CSSInJs>
                {/* <div></div>
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
                <div></div> */}
                {/* <Invisible>(501)보이나</Invisible>
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
            <ModalFront isFrontModalOpen={isFrontModalOpen} closeFrontModal={closeFrontModal} />
        </RoadMapBorder>
    )
}
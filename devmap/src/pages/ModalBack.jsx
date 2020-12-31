import React from 'react';

import styled from 'styled-components';
import { darken, lighten } from 'polished';

import logo from '../img/devmap_logo.png';
import notReady from '../img/notready_1.png';
import backJsonData from '../json/RoadMapBack';

const ModalBackShadow = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
`;

const ModalBackWrapper = styled.div`
    position: absolute;
    display: block;
    z-index: 1000;
    top: -24%;
    left: 0.5%;
    width: 30%;
    height: 124%;
    background-color: #eefffe;
    border: 5px solid;
    border-radius: 10px;
    border-color: #a3dfea;
    animation: slidein 1s ease-in-out;
    @keyframes slidein {
        from {
            left: -30%;
        }
        to {
            left: 0.5%;
        }
    }
    // 슬라이드 아웃하려면 display를 none으로?
`;

const LogoImg = styled.img`
    width: 30%;
    margin-top: 2%;
    margin-left: 2%;
`;

const TitleAndStarRating = styled.div`
    margin-top: 3%;
    margin-left: 5%;
    font-size: 30px;
    font-family: Jua;
    color: #78b8c4;
`;

const Title = styled.span`
`;

// const StarRate = styled.span`
//     margin-left: 5%;
// `;

// const Checkbox = styled.input`
//     -webkit-transform: scale(1.6);
// `;

// const CheckboxText = styled.span`
//     margin-left: 8px;
//     font-size: 20px;
//     font-family: Jua;
// `;

const ItemInfo = styled.div`
    margin-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
    padding: 5%;
    padding-left: 2%;
    padding-right: 2%;
    font-size: 20px;
    font-family: Gaegu;
    color: #78b8c4;
    background-color: #fff8f8;
    border: 3px solid;
    border-radius: 10px;
    border-color: #fed0d3;
    max-height: 33%;
    overflow: auto;
    ::-webkit-scrollbar {
        width: 15px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #fed0d3;
        border: 2px solid transparent;
        border-radius: 10px;
        background-clip: padding-box;
    }
    ::-webkit-scrollbar-track {
        background-color: #fff4f4;
        border-radius: 10px;
        box-shadow: inset 0px 0px 5px white;
    }
`;

const ItemTitle = styled.div`
    font-size: 20px;
    font-family: Jua;
`;

const Link = styled.a`
    font-size: 20px;
    font-family: Gaegu;
    text-decoration: none;
    color: #78b8c4;
    
    // &;visited {
    //     color: #grey;
    // }
`;

const DiffPopu = styled.div`
    margin-top: 2%;
`;

const Difficult = styled.span`
    margin-left: 3.5%;
`;

const Popular = styled.span`
    margin-left: 3.5%;
`;

// const StarRating = styled.div`
//     margin-top: 5%;
//     margin-left: 5%;
//     font-size: 20px;
//     font-family: Jua;
//     color: #78b8c4;
// `;

const NotReadyImage = styled.img`
    position: fixed;
    margin-top: 1.5%;
    margin-left: 6.5%;
    z-index: 2000;
    width: 18%;
    height: 32%;
`;

const NotReady = styled.div`
    position: fixed;
    margin-top: 1%;
    margin-left: 1%;
    border-radius: 10px;
    z-index: 1001;
    width: 28%;
    height: 34%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.1);
`;

const Comment = styled.div`
    margin-top: 5%;
    margin-left: 5%;
    font-size: 20px;
    font-family: Jua;
    color: #78b8c4;
`;

const CommentInput = styled.input`
    padding-top: 3%;
    width: 77%;
    height: 60px;
    border: 3px solid;
    border-radius: 10px;
    border-color: #78b8c4;
    outline: 0;
    ::placeholder {
        color: #78b8c4;
        padding-left: 5px;
    }
`;

const CommentButton = styled.button`
    margin-left: 2%;
    padding: 3%;
    padding-top: 1%;
    padding-right: 2%;
    background-color: #78b8c4;
    border: 3px solid;
    border-radius: 10px;
    border-color: #78b8c4;
    color: #eefffe;
    font-size: 40px;
    outline: 0;
    cursor: pointer;
    &:hover {
        background: ${lighten(0.004, '#78b8c4')};
        box-shadow:  0 2px #dedede;
    }
    &:active {
        background: ${darken(0.0008, '#78b8c4')};
        box-shadow: 0 2px #ffffff;
        transform: translateY(4px);
    }
`;

const CommentList = styled.ol`
    list-style: none;
    margin-top: 5%;
    margin-left: -2%;
    margin-right: 5%;
`;

const AComment = styled.li`
    height: 55px;
    margin-top: 2%;
    padding: 2%;
    border: 3px solid;
    border-radius: 10px;
    border-color: #fed0d3;
    background-color: #fff8f8;
    font-size: 20px;
    font-family: Do Hyeon;
    color: #78b8c4;
`;


export default function ModalBack({ isBackModalOpen, closeBackModal }) {

    // const [isChecked, setIsChecked] 
    // = useState(
    //     {
    //         browser: false,
    //         language: false,
    //         java: false,
    //         phyton: false,
    //         javascript: false,
    //         framework: false,
    //         spring: false,
    //         django: false,
    //         node: false,
    //         version: false,
    //         database: false,
    //         postgresql: false,
    //         mysql: false,
    //         mssql: false,
    //         mariadb: false,
    //         websocket: false,
    //         nosql: false,
    //         mongodb: false,
    //         api: false,
    //         authentication: false,
    //         caching: false,
    //         security: false,
    //         testing: false,
    //         cicd: false
    //     }
    // );

    // const handleCheckChange =() => { // 지금으로썬 불가능..
    //     setIsChecked(!isChecked)
    // };

    if (isBackModalOpen.modal === true) {
        for (let i = 0; i < backJsonData.length; i++) {
            if (isBackModalOpen.name === backJsonData[i].name) {
                return (
                    <div>
                        <ModalBackWrapper>
                            <LogoImg src={logo} alt='oops!' />
                            <TitleAndStarRating>
                                <Title># {backJsonData[i].title}</Title>
                                {/* <StarRate>★★★★☆</StarRate> */}
                                <DiffPopu>
                                    <Difficult>난이도 : {backJsonData[i].diffStar}</Difficult>
                                    <Popular>인기도 : {backJsonData[i].popuStar}</Popular>
                                </DiffPopu>
                                {/* <div>
                                    <Checkbox 
                                        name='isChecked'
                                        type='checkbox'
                                        checked={isChecked}
                                        onChange={handleCheckChange}
                                    ></Checkbox>
                                    <CheckboxText>공부할래요!</CheckboxText>
                                </div> */}
                            </TitleAndStarRating>
                            <ItemInfo>
                                <ItemTitle>🚀 {backJsonData[i].title}(이)란?</ItemTitle>
                                <p>{backJsonData[i].info}</p>
                                <ItemTitle>💻 추천 링크</ItemTitle>
                                <p></p>
                                <Link href={backJsonData[i].link} target="_blank">➤ 이동하기</Link>
                            </ItemInfo>
                            {/* <StarRating>
                                ☆☆☆☆☆
                            </StarRating> */}
                            <NotReadyImage src={notReady} alt='oops!' />
                            <NotReady></NotReady>
                            <Comment>
                                <CommentInput placeholder="댓글 기능 준비중입니다" />
                                <CommentButton>▶</CommentButton>
                            </Comment>
                            <CommentList>
                                <AComment>댓글 기능 준비중입니다</AComment>
                                <AComment>댓글 기능 준비중입니다</AComment>
                            </CommentList>
                            {/* <button onClick={openBackModal}>버튼</button> */}
                        </ModalBackWrapper>
                        <ModalBackShadow onClick={closeBackModal} />
                        {console.log(isBackModalOpen)}
                        {/* onClick event가 작동 안함, 역시 또 오타 때문이었다.. */}
                    </div>
                )
            }
            // } else if (isBackModalOpen === false){
            //     return (
            //         ''
            //     )
            // } else {
            //     return (
            //         alert('뭔가 잘못됐다..')
            //     )
            // }
        }
    } else if (isBackModalOpen.modal === false){
        return (
            ''
        )
    } else {
        return (
            alert('뭔가 잘못됐다..')
        )
    } 
}
import React, { useState } from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

import logo from '../img/devmap_logo.png';
import frontJsonData from '../json/RoadMapFront';

import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

console.log(frontJsonData[0].name);

const ModalFrontShadow = styled.div`
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

const ModalFrontWrapper = styled.div`
    position: absolute;
    display: block;
    z-index: 1000;
    top: -24%;
    left: 0.5%;
    width: 30%;
    height: 124%;
    background-color: #eefffe;
    border: 3px dashed;
    border-radius: 10px;
    border-color: #a3dfea;
    animation: slidein 0.5s ease-in-out;
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

const StarRate = styled.span`
    margin-left: 5%;
`;

const ItemInfo = styled.div`
    margin-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
    padding: 5%;
    padding-left: 2%;
    padding-right: 2%;
    font-size: 20px;
    font-family: Do Hyeon;
    color: #78b8c4;
    background-color: #fff8f8;
    border: 3px solid;
    border-radius: 10px;
    border-color: #ffa2b4;
    max-height: 30%;
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

const Link = styled.a`
    font-size: 20px;
    font-family: Jua;
    text-decoration: none;
    color: #78b8c4;
    
    // &;visited {
    //     color: #grey;
    // }
`;

const StarRating = styled.div`
    margin-top: 5%;
    margin-left: 5%;
    font-size: 20px;
    font-family: Jua;
    color: #78b8c4;
`;

const Comment = styled.div`
    margin-top: 2%;
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
        box-shadow:  0 5px #dedede;
    }
    &:active {
        background: ${darken(0.0008, '#78b8c4')};
        box-shadow: 0 5px #ffffff;
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
    border-color: #ffa2b4;
    background-color: #fff8f8;
    font-size: 20px;
    font-family: Do Hyeon;
    color: #78b8c4;
`;

export default function ModalFront({ isFrontModalOpen, closeFrontModal }) {
    if (isFrontModalOpen.modal === true) {
        console.log(isFrontModalOpen.name === frontJsonData[1].name)
        for (let i = 0; i < frontJsonData.length; i++) {
            if (isFrontModalOpen.name === frontJsonData[i].name) {
                return (
                    <div>
                        <ModalFrontWrapper>
                            <LogoImg src={logo} alt='oops!' />
                            <TitleAndStarRating>
                                <Title># {frontJsonData[i].title}</Title>
                                <StarRate>★★★★☆</StarRate>
                            </TitleAndStarRating>
                            <ItemInfo>
                                <p>🚀 {frontJsonData[i].title}(이)란?</p>
                                <p>{frontJsonData[i].info.replaceAll("\n", "<br/>")}</p>
                                <p>💻 추천 링크</p>
                                <Link href={frontJsonData[i].link} target="_blank">➤ 이동하기</Link>
                            </ItemInfo>
                            <StarRating>
                                ☆☆☆☆☆
                            </StarRating>
                            <Comment>
                                <CommentInput placeholder="댓글을 입력하세요" />
                                <CommentButton>▶</CommentButton>
                            </Comment>
                            <CommentList>
                                <AComment>댓글 1</AComment>
                                <AComment>댓글 2</AComment>
                                <AComment>댓글 3</AComment>
                            </CommentList>
                            {/* <button onClick={openFrontModal}>버튼</button> */}
                        </ModalFrontWrapper>
                        <ModalFrontShadow onClick={closeFrontModal} />
                        {console.log(isFrontModalOpen)}
                        {/* onClick event가 작동 안함, 역시 또 오타 때문이었다.. */}
                    </div>
                )  
            }
            // } else {
            //     return (
            //         alert('항목이 없습니다!')
            //     )
            // }
        }
    } else if (isFrontModalOpen.modal === false){
        return (
            ''
        )
    } else {
        return (
            alert('뭔가 잘못됐다..')
        )
    }
}
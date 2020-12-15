import React from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

import logo from '../img/devmap_logo.png';

const ModalTypeScriptShadow = styled.div`
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

const ModalTypeScriptWrapper = styled.div`
    position: absolute;
    display: block;
    z-index: 1000;
    left: 0.5%;
    top: -24%;
    width: 30%;
    height: 124%;
    background-color: #eefffe;
    border: 3px dashed;
    border-radius: 10px;
    border-color: #a3dfea;
`;

const LogoImg = styled.img`
    width: 30%;
    margin-top: 2%;
    margin-left: 2%;
`;

const TitleAndStarRating = styled.div`
    margin-top: 3%;
    margin-left: 5%;
    font-size: 40px;
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
    margin-left: -2%;
    margin-right: 5%;

`;

const AComment = styled.li`
    height: 60px;
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


export default function ModalTypeScript({ isFrontModalOpen, closeTypeScriptModal }) {
    if (isFrontModalOpen === false) {
        return (
            <div>
                <ModalTypeScriptWrapper>
                    <LogoImg src={logo} alt='oops!' />
                    <TitleAndStarRating>
                        <Title># 타입스크립트</Title>
                        <StarRate>★★★★☆</StarRate>
                    </TitleAndStarRating>
                    <ItemInfo>
                        * 타입스크립트란?<br/>
                        제목, 본문 영역에는 json으로 클라이언트단에서 정보를 뿌릴 예정<br/>
                        별점, 댓글 등은 당연히 서버와 통신..<br/>
                        <br/>
                        * 추천 링크<br/>
                        근데 이렇게 아이템별로 하나하나 컴포넌트를 따로 주는게 맞는건지..<br/>
                        스타일만 되어있고 기능은 아직 하나도 안되어있음<br/>
                    </ItemInfo>
                    <StarRating>
                        ☆☆☆☆☆ (컴포넌트 만들기)
                    </StarRating>
                    <Comment>
                        <CommentInput placeholder="댓글을 입력하세요" />
                        <CommentButton>▶</CommentButton>
                    </Comment>
                    <CommentList>
                        <AComment>댓글</AComment>
                        <AComment>댓글</AComment>
                        <AComment>댓글</AComment>
                    </CommentList>
                </ModalTypeScriptWrapper>
                <ModalTypeScriptShadow onClcik={closeTypeScriptModal}></ModalTypeScriptShadow>
            </div>
        )
    } else {
        return (
            alert('뭔가 잘못됐다..')
        )
    }
}
import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { darken, lighten } from 'polished';

import mainImage from '../img/main-image.png';

const MainBorder = styled.div`
    width: 97%;
    height: 655px;
    background-color: #EEFFFE;
    border: 5px solid;
    border-radius: 15px;
    border-color: #A3DFEA;
    text-align: center;
    margin: 0 auto;
    padding-top: 80px;
    padding-bottom: 20px;
`;

const Image = styled.img`
    width: inherit;
    max-width: 40%;
    max-height: 40%;
    text-align: center;
    padding-bottom: 20px;
`;

const Text = styled.p`
    color: #78b8c4;
    margin-bottom: 10px;
    font-size: 30px;
    font-family: Gugi;
`;

const ButtonUl = styled.ul`
    display: inline-block;
    list-style: none;
    padding-left: 0px;
`;

const ButtonLi= styled.li`
    float: left;
    margin: 5px;
`;

const Button = styled.button`
    width: 350px;
    height: 160px;
    background-color: #FFF4F4;
    border: 3px solid;
    border-radius: 10px;
    border-color: #FED0D3;
    color: #ffa2b4;
    font-size: 25px;
    font-family: Jua;
    outline: 0;
    cursor: pointer;

    &:hover {
        background: ${lighten(0.004, '#fff4f4')};
        box-shadow:  0 2px #dedede;
    }
    &:active {
        background: ${darken(0.0008, '#fff4f4')};
        box-shadow: 0 2px #666;
        transform: translateY(4px);
    }
`;

function Main() {

  return (
    <MainBorder>
        <Image src={mainImage} alt="oops!" />
        <Text>
            개발 공부를 하기로 마음먹은 당신..!!!<br/>
            무엇부터 공부해야 할지, 이 다음에는 무엇을 해야할 지 막막하시죠?<br/>
            Devmap에서 청사진을 미리 살펴보세요!
        </Text>
        <ButtonUl>
            <ButtonLi>
                <Link to="/users/totalmap-front">
                    <Button>프론트엔드 로드맵</Button>
                </Link>
            </ButtonLi>
            <ButtonLi>
                <Link to="/users/totalmap-back">
                    <Button>백엔드 로드맵</Button>
                </Link>
            </ButtonLi>
        </ButtonUl>
    </MainBorder>
  );
};

export default Main;

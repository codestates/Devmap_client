import React from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

import logo from '../img/devmap_logo.png';

const RoadMapModalShadow = styled.div`
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

const RoadMapModalWrapper = styled.div`
    position: absolute;
    display: block;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 800px;
    background-color: #fff2f2;
    border: 3px dashed;
    border-radius: 10px;
    border-color: #fed0d3;
`;
const LogoImg = styled.img`
    width: 70%;
`;

export default function RoadMapItems() {
    return (
        <RoadMapModalShadow>
            {/* <RoadMapModalWrapper>

            </RoadMapModalWrapper> */}
        </RoadMapModalShadow>
    )
}
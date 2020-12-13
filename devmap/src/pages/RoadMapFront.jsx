import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

export default function RoadMapFront() {
    const RoadMapWrapper = styled.div`
        width: 97%;
        height: 755px;
        margin: 0 auto;
        background-color: #eefffe;
        border: 5px solid;
        border-radius: 10px;
        border-color: #a3dfea;
    `;

    return (
        <RoadMapWrapper>프론트엔드 로드맵</RoadMapWrapper>
    )
}
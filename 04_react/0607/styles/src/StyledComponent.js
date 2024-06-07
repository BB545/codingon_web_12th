import React from 'react';
import styled from 'styled-components';

// CSS in JS : css를 자바스크립트 안에다가 쓰는 문법
// styled-components, emotion, styled-jsx ...
// 각 컴포넌트마다 격리된 스타일 적용 가능

const StyledContainer = styled.div`
    display: flex;
`;

const StyledBox = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${(props) => props.$bgColor || 'blue'};

    &:hover {
        transform: translateY(-20px);
    }
`

export default function StyledComponent() {
  return (
    <StyledContainer>
        {/* $를 붙여주면 props요소를 html에서 읽지 않음 (div태그에 없는 비정상적인 요소를 인식하지 않고 props로만 전달함) - warning 사라짐 */}
        <StyledBox $bgColor='red' />
        <StyledBox $bgColor='green' />
        <StyledBox />
    </StyledContainer>
  )
}

import styled, { keyframes } from "styled-components";

const loader = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledLoader = styled.span`
font-size: 1.4rem;
width: 60px;
    height: 60px;
    border: 5px solid #000;
    border-bottom-color: transparent;
    border-radius: 50%;
    margin: 60px auto 0px;
    display: inline-block;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${loader} 2s linear infinite;
`

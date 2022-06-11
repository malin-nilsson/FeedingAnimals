import styled from "styled-components";

export const StyledButton = styled.button`
border-radius: 5px;
border: none;
background-color: #1F5F5B;
font-size: 1.1rem;
font-weight: 600;
color: #fff;
padding: 15px 18px;
margin: 5px 0px;
transition: all 0.2s ease-in-out;

&:hover {
    cursor: pointer;
    background-color: #1e4d4a;
}

&:disabled {
border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
  cursor: unset;
  pointer-events:none;
}
`

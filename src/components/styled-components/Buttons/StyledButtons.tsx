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

&:hover {
    cursor: pointer;
    background-color: #173e3c;
    transition: all 0.2s ease-in-out;
}

&:disabled {
border: 1px solid #8bb4aa;
  background-color: #8bb4aa;
  color: #4a4a4a;
  cursor: unset;
  pointer-events:none;
}
`

import styled from "styled-components";

export const StyledButton = styled.button`
border-radius: 5px;
border: none;
background-color: #000;
font-weight: 500;
color: #fff;
padding: 10px;

&:hover {
    cursor: pointer;
}

&:disabled {
    border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
  cursor: unset;
}
`

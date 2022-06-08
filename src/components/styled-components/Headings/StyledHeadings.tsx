import styled from "styled-components";

interface IHeadingsProps {
    fontsize?: string
}

export const StyledHeading = styled.h1`
font-size: ${(props: IHeadingsProps) => props.fontsize || "2 rem"};
text-align: center;
padding: 10px 0px;
margin: 0;
`
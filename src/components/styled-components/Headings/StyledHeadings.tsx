import styled from "styled-components";

interface IHeadingsProps {
    fontsize?: string,
    padding?: string,
}

export const StyledHeading = styled.h1`
font-size: ${(props: IHeadingsProps) => props.fontsize || "2 rem"};
text-align: center;
padding: ${(props: IHeadingsProps) => props.padding || "10px 0px"};
margin: 0;
`
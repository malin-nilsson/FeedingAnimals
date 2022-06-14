import styled from "styled-components";

interface IHeadingsProps {
    fontsize?: string,
    padding?: string,
    align?: string,
    margin?: string
}

export const BigHeading = styled.h1`
font-size: ${(props: IHeadingsProps) => props.fontsize || "3 rem"};
text-align: ${(props: IHeadingsProps) => props.align || "center"};
padding: ${(props: IHeadingsProps) => props.padding || "0px"};
font-family: 'Abril Fatface', cursive;
margin: 0;
`

export const SmallHeading = styled.h2`
font-size: ${(props: IHeadingsProps) => props.fontsize || "1.2 rem"};
text-align:  ${(props: IHeadingsProps) => props.align || "center"};
padding: ${(props: IHeadingsProps) => props.padding || "5px 0px"};
font-family: 'Abril Fatface', cursive;
margin: 0;

`
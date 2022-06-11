import styled from "styled-components";

interface IParagraphProps {
    fontsize?: string,
    padding?: string,
    align?: string,
    justify?: string,
    direction?: string,
    color?: string,
}

export const StyledParagraph = styled.p`
font-size: ${(props: IParagraphProps) => props.fontsize || "1rem"};
text-align:  ${(props: IParagraphProps) => props.align || "center"};
padding: ${(props: IParagraphProps) => props.padding || "10px 0px"};
margin: 0;
font-family: 'Lato', sans-serif;
color: ${(props: IParagraphProps) => props.color || "black"};
display: flex;
flex-direction:  ${(props: IParagraphProps) => props.direction || "column"};
justify-content: ${(props: IParagraphProps) => props.justify || "center"};
gap: 10px;

span {
    display: inline;
}
`
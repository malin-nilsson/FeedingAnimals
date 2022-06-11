import styled from "styled-components";

interface IParagraphProps {
    fontsize?: string,
    padding?: string,
    display?: string,
    align?: string,
    justify?: string,
    direction?: string,
    color?: string,
    querypadding?: string,
    queryjustify?: string
}

export const StyledParagraph = styled.p`
font-size: ${(props: IParagraphProps) => props.fontsize || "1rem"};
text-align:  ${(props: IParagraphProps) => props.align || "center"};
padding: ${(props: IParagraphProps) => props.padding || "0px"};
margin: 0;
width: 100%;
font-family: 'Lato', sans-serif;
color: ${(props: IParagraphProps) => props.color || "black"};
display: ${(props: IParagraphProps) => props.display || "flex"};
flex-direction: ${(props: IParagraphProps) => props.direction || "column"};
justify-content: ${(props: IParagraphProps) => props.justify || "center"};
gap: 10px;

@media (min-width: 768px) {
  padding: ${(props: IParagraphProps) => props.querypadding || "0px"};
  display: ${(props: IParagraphProps) => props.display || "flex"};
  justify-content: ${(props: IParagraphProps) => props.queryjustify || "flex-start"};
  }

span {
    display: inline;
}
`

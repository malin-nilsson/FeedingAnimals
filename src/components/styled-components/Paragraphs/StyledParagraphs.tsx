import styled from "styled-components";

interface IParagraphProps {
  fontsize?: string,
  padding?: string,
  display?: string,
  align?: string,
  justify?: string,
  direction?: string,
  color?: string,
  querydisplay?: string,
  querydirection?: string,
  querypadding?: string,
  queryjustify?: string,
  queryalign?: string,
  bgcolor?: string,
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
background-color: ${(props: IParagraphProps) => props.bgcolor || ""};

@media (min-width: 768px) {
  padding: ${(props: IParagraphProps) => props.querypadding || "0px"};
  display: ${(props: IParagraphProps) => props.querydisplay || "flex"};
  flex-direction: ${(props: IParagraphProps) => props.querydirection || "column"};
  justify-content: ${(props: IParagraphProps) => props.queryjustify || "flex-start"};
  text-align: ${(props: IParagraphProps) => props.queryalign || "left"};
  }

span {
    display: inline;
}
`

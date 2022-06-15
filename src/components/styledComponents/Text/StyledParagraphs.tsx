import styled from "styled-components";

interface IParagraphProps {
  fontSize?: string,
  padding?: string,
  display?: string,
  align?: string,
  justify?: string,
  direction?: string,
  color?: string,
  queryDisplay?: string,
  queryDirection?: string,
  queryPadding?: string,
  queryJustify?: string,
  queryAlign?: string,
  bgColor?: string
}

export const StyledParagraph = styled.p`
font-size: ${(props: IParagraphProps) => props.fontSize || "1rem"};
background-color: ${(props: IParagraphProps) => props.bgColor || ""};
text-align:  ${(props: IParagraphProps) => props.align || "center"};
padding: ${(props: IParagraphProps) => props.padding || "0px"};
font-family: 'Lato', sans-serif;
color: ${(props: IParagraphProps) => props.color || "black"};
display: ${(props: IParagraphProps) => props.display || "flex"};
flex-direction: ${(props: IParagraphProps) => props.direction || "column"};
justify-content: ${(props: IParagraphProps) => props.justify || "center"};
gap: 10px;
margin: 0;
width: 100%;

@media (min-width: 768px) {
  padding: ${(props: IParagraphProps) => props.queryPadding || "0px"};
  display: ${(props: IParagraphProps) => props.queryDisplay || "flex"};
  flex-direction: ${(props: IParagraphProps) => props.queryDirection || "column"};
  justify-content: ${(props: IParagraphProps) => props.queryJustify || "flex-start"};
  text-align: ${(props: IParagraphProps) => props.queryAlign || "left"};
  }

span {
    display: inline;
}
`

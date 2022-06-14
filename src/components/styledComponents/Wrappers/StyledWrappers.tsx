import styled from "styled-components";

interface IWrapperProps {
  width?: string,
  justify?: string,
  align?: string,
  backgroundimg?: string,
  backgroundpos?: string
}

////////////////////
// Layout wrapper //
////////////////////
export const LayoutWrapper = styled.div`
width: 100vw;
height: 100vh;
`

///////////////////////////
// Landing page wrappers //
///////////////////////////
export const LandingPageWrapperLg = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 10px;
width: ${(props: IWrapperProps) => props.width || "95%"};
margin: 20px auto;


@media (min-width: 768px) {
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  margin: 0 auto;
  padding: 50px 0px;
  }

a {
  text-decoration: none;
  width: 100%;

@media (min-width: 768px) {
  width: 40%;
  }

  @media (min-width: 1100px) {
    width: 30%;
  }
}
`

export const LandingPageWrapperSm = styled(LandingPageWrapperLg)`
  flex-direction: column;
  align-items: ${(props: IWrapperProps) => props.align || "flex-start"};
  justify-content: ${(props: IWrapperProps) => props.justify || "center"};
  width: ${(props: IWrapperProps) => props.width || "100%"};
  background-color: #f1f1f1;

  @media (min-width: 768px) {
  align-items: ${(props: IWrapperProps) => props.align || "center"};
  justify-content: ${(props: IWrapperProps) => props.justify || "flex-start"};
  padding: 0px 0px 20px;
  margin: 13px 0px;
  min-height: 510px;

  &:hover {
    opacity: 0.9;
  }
  }
`

/////////////////////
// Text wrappers //
/////////////////////
export const TextWrapper = styled.div`
padding: 10px;

@media (min-width: 768px) {
  padding: 0px 20px;
  }

p {
  padding: 2px 0px;
  margin: 0;
}
`

/////////////////////
// Image wrappers //
/////////////////////
export const GridImageWrapper = styled.div`
background-image: ${(props: IWrapperProps) => "url(" + props.backgroundimg + ")" || ""};
background-position: ${(props: IWrapperProps) => props.backgroundpos || "top"};
background-size: cover;
background-repeat: no-repeat;
height: 280px;
width: 100%;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

@media (min-width: 768px) {
  height: 350px;
  width: 100%;
  }

@media (min-width: 1100px) {
  width: 360px;
  }
`

export const SingleImageWrapper = styled.div`
width: 100%;

@media (min-width: 768px) {
  width: 50%;
  padding: 10px 0px;
  }
`;

//////////////////////////
// Single page wrappers //
//////////////////////////
export const SinglePageWrapperLg = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 10px;
width: 95%;
margin: 0 auto;

@media (min-width: 768px) {
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 90%;
  padding: 30px 0px;
  }

  @media (min-width: 1100px) {
    width: 70%;
  }
  
`;

export const SinglePageWrapperSm = styled(SinglePageWrapperLg)`
width: 100%;

@media (min-width: 768px) {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 40%;
  padding: 0px;
  }
`;

export const NotFoundWrapper = styled.div`
width: 100%;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
gap: 10px;
font-size: 1.4rem;
margin: 70px auto;
`;




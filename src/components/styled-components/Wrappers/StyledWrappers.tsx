import styled from "styled-components";

export const StyledLayoutWrapper = styled.div`
width: 100vw;
height: 100vh;
`

export const StyledBigWrapper = styled.div`
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
  width: 80%;
  }
`

export const StyledSmallWrapper = styled(StyledBigWrapper)`
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
  width: 30%;
  }
`;
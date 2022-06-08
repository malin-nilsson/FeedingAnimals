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
  align-items:flex-start;
  justify-content: center;
  width: 85%;
  }

a {
  color: #000;
  text-decoration: none;
  width: 100%;

@media (min-width: 768px) {
  width: 30%;
  }
}

`

export const StyledSmallWrapper = styled(StyledBigWrapper)`
  flex-direction: column;
  align-items: flex-start;
  justify-content:  center;
  width: 100%;
  padding: 20px 0px;
  border-radius: 5px;

  &:hover {
    background-color: #c2c2c2;
  }

  @media (min-width: 768px) {
  align-items: center;
  justify-content:  flex-start;

  img {
    height: 200px;
    width: auto;
  }
  }
`

export const StyledButtonWrapper = styled(StyledBigWrapper)`
width: 100%;
`;
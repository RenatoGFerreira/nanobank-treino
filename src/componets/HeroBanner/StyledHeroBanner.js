import styled from "styled-components";
import poster from "../../images/flash-poster.jpg";

export const BannerContainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${poster}) top right no-repeat;
  background-attachment: fixed;
  background-size: 100%;
  margin-top: 70px;

  display: flex;
  flex-direction: row;

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${poster}) no-repeat;
  background-attachment: initial;
  background-size: cover;
  }

`;

export const BannerContent = styled.div`
  width: 50%;
  margin: 0 20px;
  padding: 10px;
  color: #fff;
  font-family: "Roboto", sans-serif;
  @media (max-width: 1100px) {
   margin-top: 50px;
   width: 80%;
   h2{
    text-align: center;
    font-size: 40pt;
   }
   h1{
    text-align: center;
   }
   div{
    display: flex;
    justify-content: center;
   }
  }

  h2 {
    color: #e04e37;
    font-size: 30pt;
    text-decoration: double underline white;
    letter-spacing: 0.1em;
    margin: 20px;
  }

  h1 {
    margin-top: 20px;
    margin-bottom: 40px;
  }
  p {
    text-align: justify;
    margin-bottom: 40px;
  }
  span {
    color: #e04e37;
  }
`;

export const BannerCard = styled.div`
  width: 50%;
  margin: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 1100px) {
    margin-top: 50px;
    width: 80%;
    display: flex;
    flex-direction: column;
  }
`;
export const LeftCard = styled.div`
  padding: 10px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const RightCard = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 80%;
  align-self: center;
  @media (max-width: 1100px) {
    flex-direction: row;
    width: 90%;
    scroll-behavior: smooth;
  }

`;



export const RadiusContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 0 10px 0;
  span{
    font-size: 10pt;
    margin-right: 14px;
  }
  
`
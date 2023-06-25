import styled from "styled-components";

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: cemter;
  align-items: center;
  @media (max-width: 1100px) {
    flex-direction: row;
    overflow-x: scroll;
    overscroll-behavior-x: contain;
    scroll-behavior: smooth;
    }
`;

export const PosterCard = styled.img`
  width: 157px;
  height: 80px;
  margin: 10px;
  cursor: pointer;
  @media (max-width: 1100px) {
    flex-direction: row;
  }
`;

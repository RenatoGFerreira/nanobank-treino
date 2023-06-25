import { Link } from "react-router-dom";
import styled from "styled-components";
import { CgMenuRightAlt } from "react-icons/cg";

export const ScreenContainer = styled.header`
  width: 100%;
  height: 70px;
  background: #962639;
  position: fixed;
  top: 0;
  padding: 14px 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;

  > section {
    display: flex;
    gap: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &:last-child {
      gap: 1rem;
    }

    > img {
      width: 230px;
    }

    > nav {
      display: flex;
      gap: 1rem;
    }

    @media (max-width: 900px) {
      > nav {
        display: none;
      }
    }
  }

  @media (max-width: 700px) {
    padding: 14.5px 16px;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  position: relative;

  &:before {
    content: "";
    border-radius: 50px;
    bottom: 0px;
    position: absolute;
    width: 0%;
    height: 2px;
    background: #fff;
    transition: 0.3s;
  }

  &:hover {
    &:before {
      width: 100%;
    }
  }
`;

export const Mobile = styled(CgMenuRightAlt)`
  display: none;
  width: 1.8em;
  height: 1.3em;
  @media (max-width: 900px) {
    display: initial;
  }
`;

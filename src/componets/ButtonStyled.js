import styled from "styled-components";
import { BsFilePlay } from "react-icons/bs";
import { FcFlashOn } from "react-icons/fc"

export const ButtonStyled = styled.button`
  background-color: #e04e37;
  border: 1px solid #fff;
  margin: 0 20px;
  padding: 5px;
  position: relative;
  width: 7.2em;
  height: 3em;
  transition: 0.5s;
  font-size: 17px;
  border-radius: 0.4em;
  p {
    position: absolute;
    top: .9em;
    left: 1.3em;
    margin: 0;
    padding: 0;
    transition: 0.5s;
    color: #fff;
  }
  :hover {
    background-color: #fff;
  }
  :hover p {
    left: 0.5em;
    color: #e04e37;
  }
  :hover :last-child {
    opacity: 1;
  }
`;

export const IconPlay = styled(FcFlashOn)`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  margin: 0;
  padding: 0;
  opacity: 0;
  transition: 0.5s;
  height: 1.8em;
  width: 1.8em;
  color: #e04e37;
`;

export const IconCircle = styled(BsFilePlay)`
  position: absolute;
  top: 0.5em;
  right: 0.4em;
  margin: 0;
  padding: 0;
  opacity: 0;
  transition: 0.5s;
  height: 2em;
  width: 1.2em;
  color: #e04e37;
`;

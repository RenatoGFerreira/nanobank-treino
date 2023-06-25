import styled from "styled-components";
import { FcSimCardChip } from "react-icons/fc";
import { MdOutlineContactless } from "react-icons/md";
import movie from "../../images/flash-poster.jpg";


export const FlipCard = styled.div`
  background-color: transparent;
  width: 288px;
  height: 185px;
  perspective: 1000px;
    margin-top: 20px;
`;
export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  :hover {
    transform: rotateY(180deg);
  }
`;
export const FlipCardFront = styled.div`
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 2px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset;
  background-color: #171717;

  background-image: url(${(props) => props.imageCard? props.imageCard : movie});
  background-size: cover;
  background-position: center ;
  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 1rem;
`;
export const HeadLine = styled.div`
  position: absolute;
  letter-spacing: 0.2em;
  font-size: .8em;
  top: 1.1em;
  left: 9.3em;
  color: ${(props) => props.textcolor};
`;

export const Logo = styled.svg`
  position: absolute;
  top: 6.3em;
  left: 10.8em;
  width: 50px;
`;
export const Chip = styled(FcSimCardChip)`
  position: absolute;
  font-size: 2.1em;
  top: 1.4em;
  left: 0.5em;
`;

export const Contactless = styled(MdOutlineContactless)`
  position: absolute;
  font-size: 1.3em;
  top: 3em;
  left: 9.1em;
  color: ${(props) => props.textcolor};
`;

export const FlipCardBack = styled.div`
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 2px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset;
  background-color: ${(props) => props.backcolor? props.backcolor : "#0b0b0b"};
  transform: rotateY(180deg);
  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 1rem;
`;
export const Strip = styled.div`
  position: absolute;
  background-color: black;
  width: 100%;
  height: 1.5em;
  top: 2.4em;
  background: repeating-linear-gradient(
    45deg,
    #303030,
    #303030 10px,
    #202020 10px,
    #202020 20px
  );
`;
export const Mstrip = styled.div`
  position: absolute;
  background-color: rgb(255, 255, 255);
  width: 8em;
  height: 0.8em;
  top: 5em;
  left: 0.6em;
  border-radius: 2.5px;
  transform: rotateY(180deg);
`;
export const Sstrip = styled.div`
  position: absolute;
  background-color: rgb(255, 255, 255);
  width: 2.1em;
  height: 0.8em;
  top: 5em;
  left: 9em;
  border-radius: 2.5px;
  transform: rotateY(180deg);
`;
export const Code = styled.p`
  font-weight: bold;
  text-align: center;
  margin: 0.2em;
  color: black;
`;

export const TextContainer = styled.div`
  font-family: 'Oswald', sans-serif;
  width: 70%;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 12px 0 12px 10px;
  text-align: left;
  color: ${(props) => props.textcolor};
  
`;

export const Number = styled.p`
  font-size: 0.5em;
  letter-spacing: .1em;
  margin-bottom: 3px;
`;

export const Validate = styled.p`
  font-size: 0.3em;
`;

export const Date = styled.p`
  font-weight: bold;
  font-size: 0.5em;
`;

export const Name = styled.p`
  margin-top: 3px;
  font-weight: 500;
  font-size: 0.5em;
  letter-spacing: .1em;

`;

import styled from "styled-components";
import { IoCloseSharp } from "react-icons/io5";

export const ScreenContainer = styled.div`

background: rgb(150,38,57);
background: linear-gradient(90deg, rgba(150,38,57,.6) 14%, rgba(150,38,48,.9) 84%);

backdrop-filter: blur(3px);
position: absolute;
width: 100%;
height: 100%;
top: 0;
right: 0;
left: 0;
bottom: 0;
z-index: 9999;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
opacity: ${(props => props.isVisible? 1 : 0)};
pointer-events: ${(props => props.isVisible? "auto" : "none")};;

nav{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    text-transform: uppercase;
    font-weight: 900;
}
`

export const CloseIcon = styled(IoCloseSharp)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 1.8em;
    height: 1.3em;
`


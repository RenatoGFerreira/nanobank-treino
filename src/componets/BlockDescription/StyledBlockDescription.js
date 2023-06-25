import styled from "styled-components";
import { BsCreditCard , BsGraphUp} from "react-icons/bs"
import { FaMoneyBillAlt} from "react-icons/fa"


export const ScreenContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
h1 {
    color: #e04e37;
    font-size: 45pt;
    text-decoration: double underline #cecece;
    margin: 20px;
  }
h2{
    color: #000;
    font-size: 25pt;
    margin-bottom: 5px;
}
h3{
    font-size: 15pt;
    color: #000;
}
@media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    h1{
        font-size: 25pt;
        text-align: center;
    }
    h2{
        font-size: 20pt;
        text-align: center;
    }
    h3{
        font-size: 15pt;
        text-align: center;
    }
  }
`

export const LeftScreen = styled.div`
width: 50%;
@media (max-width: 1100px) {
    width: 90%;
  }
`
export const RightScreen = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
@media (max-width: 1100px) {
    width: 90%;
  }
`
export const BoxScreen = styled.div`
width: 90%;
margin: 15px 0;
@media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const CardIcon = styled(BsCreditCard)`
color: #e04e37;
font-size: 40px;
`

export const GraphIcon = styled(BsGraphUp)`
color: #e04e37;
font-size: 40px;
`

export const BackIcon = styled(FaMoneyBillAlt)`
color: #e04e37;
font-size: 40px;
`
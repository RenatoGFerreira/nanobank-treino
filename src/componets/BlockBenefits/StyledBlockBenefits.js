import styled from "styled-components";
import { MdPix} from "react-icons/md"
import { TbShoppingCartDiscount, TbPigMoney, Tb24Hours, TbFreeRights } from "react-icons/tb"
import { FaCreativeCommonsZero } from "react-icons/fa"
import { MdOutlineContactless, MdMoneyOff } from "react-icons/md"


export const ScreenContainer = styled.div`
width: 100%;
height: 100%;
min-height: 95vh;
display: flex;
flex-direction: row;
align-items: center;
background-color: #F0F0F2;
h1 {
    color: #e04e37;
    font-size: 45pt;
    text-decoration: double underline #cecece;
    margin: -40px 20px 20px 0px;
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
span{
    color: #e04e37;
}

@media (max-width: 1100px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    height: 100%;
    h1{
        margin: 40px 20px 20px 0px;
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

export const AdvantageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`

export const BlockContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: baseline;
    width: 450px;
    margin: 2px 0;
`

export const LeftContainer = styled.div`
    width: 70%;
    margin-left: 40px;
`
export const RightContainer = styled.div`
width: 30%;
display: flex;
flex-direction: row;
justify-content: end;
align-items: flex-start;
    img{
        width: 100%;
    }
`

export const PixIcon = styled(MdPix)`
    color:  #e04e37;
    margin-right: 15px;
`

export const ShoppingIcon = styled(TbShoppingCartDiscount)`
    color:  #e04e37;
    margin-right: 15px;
`

export const GrowthIcon = styled(TbPigMoney)`
    color:  #e04e37;
    margin-right: 15px;
`

export const ZeroIcon = styled(FaCreativeCommonsZero)`
    color:  #e04e37;
    margin-right: 15px;
`
export const ContactlessIcon = styled(MdOutlineContactless)`
    color:  #e04e37;
    margin-right: 15px;
`

export const HourIcon = styled(Tb24Hours)`
    color:  #e04e37;
    margin-right: 15px;
`

export const TaxesIcon = styled(MdMoneyOff)`
    color:  #e04e37;
    margin-right: 15px;
`

export const RatesIcon = styled(TbFreeRights)`
    color:  #e04e37;
    margin-right: 15px;
`
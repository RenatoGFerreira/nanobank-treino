import { ScreenContainer, LeftContainer, BlockInfo, BlockContainer } from "./StyledBlockPremium"
import CeoCard from "../../images/others/visit-card.png"
import Tshirt from "../../images/others/t-shirt.png" 
import PortaCartao from "../../images/others/golden-border.png"
import Poster from "../../images/others/cellphone.png"

import { ButtonStyled, IconCircle } from "../ButtonStyled"
export default function BlockPremium(){
    return(
        <ScreenContainer>
            <LeftContainer>
                <h1>Quer Mais?</h1>
                <h2>Você não precisa ter milhões investidos para ser nosso cliente <span>premium</span>. </h2>
                <BlockContainer>
                <BlockInfo>
                    <h3>Solicite o plano <span>NanoVip</span> em até 12 vezes no seu cartão.</h3>
                    <img src={CeoCard} alt="cliente vip"/>
                    <ButtonStyled>
                        <p>Saiba Mais</p>
                        <IconCircle/>
                    </ButtonStyled>
                </BlockInfo>
                <BlockInfo>
                    <h3>Receba brindes ao completar metas financeiras.</h3>
                    <img src={Tshirt} alt="cliente vip"/>
                    <ButtonStyled>
                        <p>Saiba Mais</p>
                        <IconCircle/>
                    </ButtonStyled>
                </BlockInfo>
                <BlockInfo>
                    <h3>Receba junto ao seu cartão o novo Porta-Cartão NanoBank.</h3>
                    <img src={PortaCartao} alt="cliente vip"/>
                    <ButtonStyled>
                        <p>Saiba Mais</p>
                        <IconCircle/>
                    </ButtonStyled>
                </BlockInfo>
                <BlockInfo>
                    <h3>Controle financeiro poderoso em um App nas suas mãos</h3>
                    <img src={Poster} alt="cliente vip"/>
                    <ButtonStyled>
                        <p>Saiba Mais</p>
                        <IconCircle/>
                    </ButtonStyled>
                </BlockInfo>
                </BlockContainer>
            </LeftContainer>
        </ScreenContainer>
    )
}
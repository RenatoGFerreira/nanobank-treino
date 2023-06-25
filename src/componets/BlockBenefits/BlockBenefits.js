import { BlockContainer, ScreenContainer, LeftContainer, RightContainer, AdvantageContainer, PixIcon, ShoppingIcon, GrowthIcon, ZeroIcon, ContactlessIcon, HourIcon, TaxesIcon, RatesIcon } from "./StyledBlockBenefits"
import goldenLogo from "../../images/others/street-publi.png"


export default function BlockBenefits(){
    return(
        <ScreenContainer>
            <LeftContainer>
                <h1>Muito mais benefícios para você</h1>
                <h2>Todos os Cartões <span>Nanobank</span> possuem:</h2>
                <AdvantageContainer>

                <BlockContainer>
                    <PixIcon/>
                    <h3>Pix no crédito</h3>
                </BlockContainer>
                <BlockContainer>
                    <ShoppingIcon/>
                    <h3>Shopping com cashback</h3>
                </BlockContainer>
                <BlockContainer>
                    <GrowthIcon/>
                    <h3>Rendimento direto na conta</h3>
                </BlockContainer>
                <BlockContainer>
                    <ZeroIcon/>
                    <h3>Conta Digital sem custo</h3>
                </BlockContainer>
                <BlockContainer>
                    <ContactlessIcon/>
                    <h3>Pagamento por aproximação</h3>
                </BlockContainer>
                <BlockContainer>
                    <HourIcon/>
                    <h3>4 Saques sem custo nas redes 24Horas</h3>
                </BlockContainer>
                <BlockContainer>
                    <TaxesIcon/>
                    <h3>Taxa Zero para investir </h3>
                </BlockContainer>
                <BlockContainer>
                    <RatesIcon/>
                    <h3>Anuidade Gratuita</h3>
                </BlockContainer>

                </AdvantageContainer>
            </LeftContainer>
            <RightContainer>
                <img src={goldenLogo} alt="Publicidade na rua"/>
            </RightContainer>
        </ScreenContainer>
    )
}
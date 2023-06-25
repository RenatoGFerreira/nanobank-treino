import {ScreenContainer, LinkStyled, BottonContainer, TopContainer, SocialMedias } from "./StyledFooter"
import ios from "../../images/others/ios_image.png"
import android from "../../images/others/android_image.png"
import { SlSocialYoutube, SlSocialTwitter, SlSocialLinkedin, SlSocialInstagram, SlSocialFacebook } from "react-icons/sl"

export default function Footer(){
    return(
        <ScreenContainer>
        <TopContainer>
            <ul>
        <h1>NanoBank</h1>
            <li><LinkStyled to="/redirect">Sobre Nós</LinkStyled></li>
            <li><LinkStyled to="/redirect">Carreira</LinkStyled></li>
            <li><LinkStyled to="/redirect">Perguntas Frequentes</LinkStyled></li>
            <li><LinkStyled to="/redirect">Contato</LinkStyled></li>
            <li><LinkStyled to="/redirect">Imprensa</LinkStyled></li>
            <li><LinkStyled to="/redirect">ESG</LinkStyled></li>
            <li><LinkStyled to="/redirect">LGBTQIA+</LinkStyled></li>
            <li><LinkStyled to="/redirect">Investidores</LinkStyled></li>
        </ul>
        <ul>
        <h1>Produtos</h1>
        <li><LinkStyled to="/redirect">Conta Digital</LinkStyled></li>
        <li><LinkStyled to="/redirect">Empréstimos</LinkStyled></li>
        <li><LinkStyled to="/redirect">Programa MeuApê</LinkStyled></li>
        <li><LinkStyled to="/redirect">Cartão +Vantagens</LinkStyled></li>
        <li><LinkStyled to="/redirect">Investimentos</LinkStyled></li>
        <li><LinkStyled to="/redirect">Conta PJ</LinkStyled></li>
        <li><LinkStyled to="/redirect">Construindo meu Futuro</LinkStyled></li>
        </ul>
        <ul>
        <h1>Transparência</h1>
        <li><LinkStyled to="/redirect">Políticas de Privacidade</LinkStyled></li>
        <li><LinkStyled to="/redirect">Políticas de Segurança</LinkStyled></li>
        <li><LinkStyled to="/redirect">Éticas e Compliance</LinkStyled></li>
        </ul>
        <ul>
        <h1>Dúvidas</h1>
        <li><LinkStyled to="/redirect">socorronanobank@nanobank.com.br</LinkStyled></li>
        <li><LinkStyled to="/redirect">0800 000 0000</LinkStyled></li>
        <li><LinkStyled to="/redirect">Pelo Whats? Clique aqui</LinkStyled></li>
        </ul>
        </TopContainer>
        <BottonContainer> 
        <div>
            Baixe o App:
            <img src={android} alt="android"/>
             <img src={ios} alt="android"/>
        </div>
        <div>
            <p>
                © 2023 Nanobank S.A - Instituição de Pagamento. 00.000.000/0000-00
                Rua Sem Nome, 00 - São Francisco, SF - 00000-000
            </p>
            <SocialMedias>
                <SlSocialYoutube/>
                <SlSocialTwitter/>
                <SlSocialLinkedin/>
                <SlSocialInstagram/>
                <SlSocialFacebook/>
            </SocialMedias>
        </div>
        </BottonContainer>
        </ScreenContainer>
    )
}
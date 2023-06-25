import CreditCard from "../CreditCard/CreditCard";
import {
  BannerContainer,
  BannerContent,
  BannerCard,
  LeftCard,
  RightCard,
  RadiusContainer,
} from "./StyledHeroBanner";
import { ButtonStyled, IconCircle, IconPlay } from "../ButtonStyled";
import { StyledInput } from "../../componets/StyledInput";
import { StyledForm } from "../../componets/StyledForm";
import { useState } from "react";
import SwiperPart from "../Swiper/Swiper";

export default function HeroBanner() {
  const [textColor, setTextColor] = useState()
  const [backColor, setBackColor] = useState()
  const [name, setName] = useState("Bruce Wayne")
  const [imageCard, setImageCard] = useState()
  
  return (
    <BannerContainer>
      <BannerContent>
        <h2>NanoBank Card</h2>
        <h1>
          O cartão de crédito e débito com os personagens do filme The Flash{" "}
          <span>personalizado</span> e com o <span>poder</span> que você quiser.
        </h1>
        <p>
          O <span>NanoBank</span> apresenta o cartão de crédito e débito
          exclusivo do filme <span>The Flash</span>, disponível nos cinemas. Com
          ele é possível você personalizar o seu cartão com o personagem que é
          mais a sua cara, além disso você pode escolher o pacote de benefícios
          que mais combina com você, tudo isso com <span>Zero Tarífas</span>, e
          milhares de <span>benefícios</span> que só quem tem o NanoBank Card do
          filme The Flash pode ter.
        </p>
        <div>
          <ButtonStyled>
            <p>Quero Já</p>
            <IconPlay />
          </ButtonStyled>
          <ButtonStyled>
            <p>Saiba mais</p>
            <IconCircle />
          </ButtonStyled>
        </div>
      </BannerContent>
      <BannerCard>
        <LeftCard>
          <CreditCard textColor={textColor} backColor={backColor} username={name} imageCard={imageCard}/>
          <StyledForm>
              <h5>Cor dos Textos</h5>
            <RadiusContainer>
              <input type="radio" name="color" value="#FFFFFF" onChange={e=>setTextColor(e.target.value)}/><span>Branco</span>
              <input type="radio" name="color" value="#e04e37" onChange={e=>setTextColor(e.target.value)}/><span>Vermelho</span>
              <input type="radio" name="color" value="#000000" onChange={e=>setTextColor(e.target.value)}/><span>Preto</span>
              <input type="radio" name="color" value="#FFC600" onChange={e=>setTextColor(e.target.value)}/><span>Amarelo</span>
            </RadiusContainer>
            <h5>Cor Atrás</h5>
            <RadiusContainer>
              <input type="radio" name="color" value="#2e2e2e" onChange={e=>setBackColor(e.target.value)}/><span>Grafite</span>
              <input type="radio" name="color" value="#950101" onChange={e=>setBackColor(e.target.value)}/><span>Vermelho</span>
              <input type="radio" name="color" value="#0b0b0b" onChange={e=>setBackColor(e.target.value)}/><span>Preto</span>
              <input type="radio" name="color" value="#084d6e" onChange={e=>setBackColor(e.target.value)}/><span>Azul</span>
            </RadiusContainer>
            <StyledInput name="name" placeholder="nome" type="text" required onChange={e=>setName(e.target.value)}/>
            <StyledInput name="email" placeholder="email" type="email" required/>
            <StyledInput name="cpf" placeholder="cpf" type="number" required/>
            <ButtonStyled>
              <p>Solicitar</p>
              <IconPlay />
            </ButtonStyled>
          </StyledForm>
        </LeftCard>
        <RightCard>
          <SwiperPart setImageCard={setImageCard}/>
        </RightCard>
      </BannerCard>
    </BannerContainer>
  );
}

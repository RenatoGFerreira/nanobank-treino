import { 
    FlipCard, FlipCardBack, FlipCardFront, 
    HeadLine, FlipCardInner, Sstrip,Mstrip, 
    Strip, Code, Logo, Chip, Contactless, 
    TextContainer, Name, Validate, Date, Number } from "./StyledCreditCard";



export default function CreditCard({textColor, backColor, username, imageCard}){
    return(
        <FlipCard>
        <FlipCardInner>
            <FlipCardFront imageCard={imageCard}>
                <HeadLine textcolor={textColor}>NANOBANK</HeadLine>
            <Logo viewBox="0 0 48 48" y="0px" x="0px" xmlns="http://www.w3.org/2000/svg" class="logo">
                <path d="M36 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z" fill="#ff9800"></path>
                <path d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z" fill="#d50000"></path>
                <path d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z" fill="#ff3d00"></path>
            </Logo>
            <Chip/>
            <Contactless textcolor={textColor}/>
            <TextContainer textcolor={textColor}>
                
                <Number>1234 1234 1234 1234</Number>
                <Validate>Validade</Validate>
                <Date>12/12</Date>
                <Name>{username}</Name>
            </TextContainer>
            </FlipCardFront>
            <FlipCardBack backcolor={backColor}>
                <Strip/>
                <Mstrip/>
                <Sstrip>
                    <Code>***</Code>
                </Sstrip>
            </FlipCardBack>
        </FlipCardInner>
        </FlipCard>
    )
}



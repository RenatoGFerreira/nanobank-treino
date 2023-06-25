import {
  ScreenContainer,
  LeftScreen,
  RightScreen,
  CardIcon,
  GraphIcon,
  BackIcon,
  BoxScreen,
} from "./StyledBlockDescription";

export default function BlockDescription() {
  return (
    <ScreenContainer>
      <LeftScreen>
        <h1>Escolha o superpoder que você quiser</h1>
      </LeftScreen>
      <RightScreen>
        <BoxScreen>
          <BackIcon />
          <h2>Adiantou a fatura, Ganhou descontos incríveis</h2>
          <h3>
            Pagando sua fatura do cartão adiantada você ganha descontos que
            podem chegar a 5% do valor total.
          </h3>
        </BoxScreen>
        <BoxScreen>
          <GraphIcon />
          <h2>Maiores rendimentos nos CDBs e Fundos Privados</h2>
          <h3>
            Você pode separar seus investimentos em caixinhas que podem render
            os incríveis 200% do CDI.{" "}
          </h3>
        </BoxScreen>
        <BoxScreen>
          <CardIcon />
          <h2>Parcelamento de boletos e compras. </h2>
          <h3>
            Apertou durante o mês? Não se preocupe, você pode parcelar seus
            boletos em até 12x no seu NanoBank Card.
          </h3>
        </BoxScreen>
      </RightScreen>
    </ScreenContainer>
  );
}

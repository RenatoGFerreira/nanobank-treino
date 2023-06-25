import { ScreenContainer } from "./StyledMenuMobile";
import { CloseIcon } from "./StyledMenuMobile";
import { StyledLink } from "../Header/StyleHeader";

export default function MenuMobile({ menuVisible, setMenuVisible }) {
  return (
    <ScreenContainer isVisible={menuVisible}>
      <CloseIcon onClick={() => setMenuVisible(false)}/>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/redirect">Cadastro</StyledLink>
        <StyledLink to="/redirect">Sobre Nós</StyledLink>
      </nav>
    </ScreenContainer>
  );
}

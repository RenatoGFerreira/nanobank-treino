import { Mobile, ScreenContainer, StyledLink } from "./StyleHeader";
import logo from "../../images/nanobank-logo.png";

export default function Header({setMenuVisible}) {
  return (
    <ScreenContainer>
      <section>
        <img src={logo} alt="logomarca da nanobank" />
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/redirect">Cadastro</StyledLink>
          <StyledLink to="/redirect">Sobre Nós</StyledLink>
        </nav>
      </section>
      <section>
        <Mobile onClick={() => setMenuVisible(true)} />
      </section>
    </ScreenContainer>
  );
}

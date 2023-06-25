import { ScreenContainer, PosterCard} from "./StyledSwiper";
import batman from "../../images/cards/flash-poster-batman-02.jpeg";
import supergirl from "../../images/cards/flash-poster-supergirl.jpeg";
import flash from "../../images/cards/flash-poster-flash-02.jpeg";
import movie from "../../images/cards/flash-poster.jpeg";
import team from "../../images/cards/flash-team-02.jpeg";
 



export default function SwiperPart({ setImageCard }) {
  return (
    <ScreenContainer>

          <PosterCard
            src={batman}
            onClick={(e) => setImageCard(e.target.src)}
            alt="Batman no poster filme The Flash"
          />
        
          <PosterCard
            src={supergirl}
            onClick={(e) => setImageCard(e.target.src)}
            alt="Supergirl no poster filme The Flash"
          />

          <PosterCard
            src={flash}
            onClick={(e) => setImageCard(e.target.src)}
            alt="Flash no poster filme The Flash"
          />

          <PosterCard
            src={movie}
            onClick={(e) => setImageCard(e.target.src)}
            alt="poster filme The Flash"
          />

          <PosterCard
            src={team}
            onClick={(e) => setImageCard(e.target.src)}
            alt="Batman, SuperGirl e Flahs no poster filme The Flash"
          />     
    </ScreenContainer>
  );
}

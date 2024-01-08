import {
  Card,
  CardBody,
  HStack,
  Image,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import { getCroppedImageUrl } from "../services/image-url";
import TwoLineHeading from "./TwoLineHeading";
import Emoji from "./Emoji";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <LinkBox as="article">
      <Card>
        <Image
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
        />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <TwoLineHeading fontSize={"2xl"}>
            <LinkOverlay
              href={`https://rawg.io/games/${game.slug}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {game.name}
            </LinkOverlay>
          </TwoLineHeading>
          <Emoji rating={game.rating_top} />
        </CardBody>
      </Card>
    </LinkBox>
  );
};

export default GameCard;

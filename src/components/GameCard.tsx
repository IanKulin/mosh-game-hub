import { Card, CardBody, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import { getCroppedImageUrl } from "../services/image-url";
import TwoLineHeading from "./TwoLineHeading";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <TwoLineHeading fontSize={'2xl'}>{game.name}</TwoLineHeading>
      </CardBody>
    </Card>
  );
};

export default GameCard;

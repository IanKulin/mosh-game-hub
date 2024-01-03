import { Box } from "@chakra-ui/react";

interface GameCardControllerProps {
  children: React.ReactNode;
}

const GameCardContainer = ({ children }: GameCardControllerProps) => {
  return (
    <Box borderRadius={10} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;

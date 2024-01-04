import { Box } from "@chakra-ui/react";

interface GameCardControllerProps {
  children: React.ReactNode;
}

const GameCardContainer = ({ children }: GameCardControllerProps) => {
  return (
    <Box borderRadius={10} overflow={"hidden"} margin='10px'>
      {children}
    </Box>
  );
};

export default GameCardContainer;

import { Box, Heading, HeadingProps } from "@chakra-ui/react";

interface TwoLineHeadingProps extends HeadingProps {
  children: React.ReactNode;
}

const TwoLineHeading: React.FC<TwoLineHeadingProps> = ({ children, ...props }) => {
  return (
    <Box as="div" style={{ 
      display: '-webkit-box', 
      WebkitLineClamp: 2, 
      WebkitBoxOrient: 'vertical', 
      overflow: 'hidden', 
      textOverflow: 'ellipsis', 
      height: '3.6em', 
      lineHeight: '1.8em', 
    }}>
      <Heading {...props}>
        {children}
      </Heading>
    </Box>
  );
};

export default TwoLineHeading;
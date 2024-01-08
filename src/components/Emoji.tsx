import { Flex, Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";

interface EmojiProps {
  rating: number;
}

const Emoji = ({ rating }: EmojiProps) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]:ImageProps }= {
    3: { src: meh, alt: 'meh', boxSize: '12px' },
    4: { src: thumbsUp, alt: 'recommended', boxSize: '12px'  },
    5: { src: bullsEye, alt: 'exceptional', boxSize: '16px'  },
  };

  return (
    <Flex justifyContent="flex-end">
      <Image {...emojiMap[rating]} marginTop={1} />
    </Flex>
  );
};

export default Emoji;

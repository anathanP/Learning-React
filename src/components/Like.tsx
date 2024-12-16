import { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";

interface Props {
  onClick: (item: string) => void;
}

const Like = ({ onClick }: Props) => {
  const [liked, setLiked] = useState(false);
  const handleClick = (item: string) => {
    setLiked(!liked);
    onClick(item);
  };
  if (liked) {
    return (
      <IoIosHeart
        size="40px"
        color="pink"
        onClick={() => handleClick("disliked")}
      />
    );
  }
  return (
    <IoIosHeartEmpty
      size="40px"
      color="pink"
      onClick={() => handleClick("liked")}
    />
  );
};

export default Like;

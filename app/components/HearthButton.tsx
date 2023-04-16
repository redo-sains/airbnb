"use client";

import { AiFillAlert, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { SafeUser } from "../types";
import useFavorite from "../hooks/useFavorite";

type HearthButtonProps = {
  listingId: string;
  currentUser?: SafeUser | null;
};

const HearthButton: React.FC<HearthButtonProps> = ({
  listingId,
  currentUser,
}: HearthButtonProps) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
  });

  return (
    <div
      onClick={toggleFavorite}
      className="
        relative
        hover:opacity-80
        transition
        cursor-pointer
    "
    >
      <AiOutlineHeart
        size={28}
        className="
               fill-white
               absolute
               -top-[2px]
               -right-[2px] 
            "
      />
      <AiFillHeart
        size={24}
        className={hasFavorited ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
};

export default HearthButton;
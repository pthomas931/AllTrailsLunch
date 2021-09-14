import { FC } from "react";
import { writeStorage, useLocalStorage } from "@rehooks/local-storage";
import styles from "./Favorite.module.css";

interface FavoriteProps {
  placeId: string;
}

const Favorite: FC<FavoriteProps> = ({ placeId }) => {
  const [favValue, , removeFav] = useLocalStorage(placeId);

  const isFav = !!favValue;

  return (
    <button
      onClick={() => {
        isFav ? removeFav() : writeStorage(placeId, true);
      }}
      className={`${styles.heartLikeButton} ${isFav ? styles.liked : ""}`}
    />
  );
};

export default Favorite;

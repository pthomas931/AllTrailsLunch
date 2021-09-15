import { FC } from "react";
import useStorage from "../../../../utils/useStorage";
import styles from "./Favorite.module.css";

interface FavoriteProps {
  placeId: string;
}

const Favorite: FC<FavoriteProps> = ({ placeId }) => {
  const { storedValue, setValue, removeValue } = useStorage(placeId);

  const isFav = storedValue !== undefined;

  return (
    <button
      onClick={() => {
        isFav ? removeValue() : setValue("true");
      }}
      className={`${styles.heartLikeButton} ${isFav ? styles.liked : ""}`}
    />
  );
};

export default Favorite;

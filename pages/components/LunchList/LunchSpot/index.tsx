import { FC } from "react";
import styles from "./LunchSpot.module.css";

import Image from "next/image";

interface LunchSpotProps {
  lunchSpot: google.maps.places.PlaceResult;
}

const LunchSpot: FC<LunchSpotProps> = ({ lunchSpot }) => {
  const image =
    lunchSpot?.photos !== undefined && lunchSpot.photos.length > 0
      ? lunchSpot.photos[0]
      : undefined;

  const imageUrl = image !== undefined ? image.getUrl() : "";

  return (
    <div className={styles.card}>
      {imageUrl !== undefined && (
        <Image src={imageUrl} height={80} width={80} alt={"Lunch spot image"} />
      )}
      <div className={styles.spotContent}>
        <div className={styles.spotTitle}>{lunchSpot.name}</div>
        <div>
          {lunchSpot.rating}({lunchSpot.user_ratings_total || 0})
        </div>
        <div>{lunchSpot.price_level} summary</div>
      </div>
    </div>
  );
};

export default LunchSpot;

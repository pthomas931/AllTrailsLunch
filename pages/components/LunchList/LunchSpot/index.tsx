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

  const imageUrl = image !== undefined ? image.getUrl() : undefined;

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        {imageUrl !== undefined && (
          <Image
            src={imageUrl}
            height={80}
            width={80}
            alt={"Lunch spot image"}
          />
        )}
      </div>
      <div className={styles.spotContent}>
        <div className={styles.spotTitle}>{lunchSpot.name}</div>
        <div>{lunchSpot.rating}</div>
        <div>summary</div>
      </div>
    </div>
  );
};

export default LunchSpot;

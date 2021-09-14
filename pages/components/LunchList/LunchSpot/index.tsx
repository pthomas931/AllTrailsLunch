import { FC } from "react";
import styles from "./LunchSpot.module.css";
import ReactStars from "react-rating-stars-component";
import Image from "next/image";
import dynamic from "next/dynamic";

const DynamicFavorite = dynamic(() => import("./Favorite"), { ssr: false });

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
    <div className={styles.card} id={lunchSpot.place_id}>
      {imageUrl !== undefined && (
        <Image src={imageUrl} height={80} width={80} alt={"Lunch spot image"} />
      )}
      <div className={styles.spotContent}>
        <div className={styles.spotTitle}>{lunchSpot.name}</div>
        <div className={styles.spotRating}>
          <ReactStars
            count={5}
            value={lunchSpot.rating}
            isHalf={true}
            edit={false}
            size={24}
            activeColor="#ffd700"
          />
          <div>({lunchSpot.user_ratings_total || 0})</div>
        </div>
        <div className={styles.spotDetails}>
          <span className={styles.spotPrice}>
            {"$".repeat(lunchSpot?.price_level || 1)}
          </span>
          <span className={styles.divider}>-</span>
          <div className={styles.spotSummary}>Summary</div>
        </div>
      </div>
      <div className={styles.spotFavorite}>
        {lunchSpot.place_id && <DynamicFavorite placeId={lunchSpot.place_id} />}
      </div>
    </div>
  );
};

export default LunchSpot;

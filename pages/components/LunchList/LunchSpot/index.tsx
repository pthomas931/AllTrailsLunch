import { FC } from "react";
import styles from "./LunchSpot.module.css";

const LunchSpot: FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>Image</div>
      <div className={styles.spotContent}>
        <div>Title</div>
        <div>rating</div>
        <div>summary</div>
      </div>
    </div>
  );
};

export default LunchSpot;

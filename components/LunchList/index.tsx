import { FC, useEffect } from "react";
import styles from "./LunchList.module.css";

import LunchSpot from "./LunchSpot";

interface LunchListProps {
  lunchPlaces: google.maps.places.PlaceResult[];
  setSelectedPlace: (newPlace: google.maps.places.PlaceResult) => void;
  selectedPlace?: google.maps.places.PlaceResult;
}

const LunchList: FC<LunchListProps> = ({
  lunchPlaces = [],
  setSelectedPlace,
  selectedPlace,
}) => {
  useEffect(() => {
    if (selectedPlace !== undefined) {
      const selectedDomElem = document.querySelector(
        `#${selectedPlace.place_id}`
      );
      if (selectedDomElem)
        selectedDomElem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedPlace]);

  return (
    <>
      {lunchPlaces.map((currPlace) => (
        <div
          key={currPlace.place_id}
          onClick={() => setSelectedPlace(currPlace)}
          className={
            selectedPlace?.place_id === currPlace.place_id
              ? styles.listItemSelected
              : styles.listItem
          }
        >
          <LunchSpot lunchSpot={currPlace} />
        </div>
      ))}
    </>
  );
};

export default LunchList;

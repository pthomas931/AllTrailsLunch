import { FC } from "react";

import LunchSpot from "./LunchSpot";

interface LunchListProps {
  lunchPlaces: google.maps.places.PlaceResult[];
}

const LunchList: FC<LunchListProps> = ({ lunchPlaces = [] }) => {
  return (
    <>
      {lunchPlaces.map((currPlace) => (
        <LunchSpot key={currPlace.place_id} lunchSpot={currPlace} />
      ))}
    </>
  );
};

export default LunchList;

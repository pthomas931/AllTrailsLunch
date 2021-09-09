import { FC } from "react";

import LunchSpot from "./LunchSpot";

interface LunchListProps {
  lunchPlaces: any[];
}

const LunchList: FC<LunchListProps> = ({
  lunchPlaces = [
    { name: "kenmore", summary: "hi there", rating: 4.5 },
    { name: "kenmore", summary: "hi there", rating: 4.5 },
  ],
}) => {
  return (
    <>
      {lunchPlaces.map((currLunchSpot) => (
        <LunchSpot key={currLunchSpot.name} />
      ))}
    </>
  );
};

export default LunchList;

import React from "react";

import { render, screen } from "@testing-library/react";
import LunchSpot from ".";

const mockSpot: google.maps.places.PlaceResult = {
  place_id: "apples",
  name: "bananas",
  photos: [],
  rating: 4,
  user_ratings_total: 22,
  price_level: 3,
};

describe("LunchSpot", () => {
  it("renders a heart", () => {
    render(<LunchSpot lunchSpot={mockSpot} showFavorite={true} />);

    expect(screen.getByText(mockSpot.name)).toBeInTheDocument();
  });
});

import React from "react";

import { render, screen } from "@testing-library/react";
import LunchSpot from ".";
import mockPlaces from "../../../utils/testing/mockPlaces";

describe("LunchSpot", () => {
  it("renders name", () => {
    render(<LunchSpot lunchSpot={mockPlaces[0]} showFavorite={true} />);

    const lunchSpotName = mockPlaces[0].name || "";
    expect(screen.getByText(lunchSpotName)).toBeInTheDocument();
  });
});

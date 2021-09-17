import React from "react";

import { render, screen } from "@testing-library/react";
import LunchList from ".";

import mockPlaces from "../../utils/testing/mockPlaces";

describe("LunchList", () => {
  it("renders multiple items", () => {
    render(<LunchList lunchPlaces={mockPlaces} setSelectedPlace={() => {}} />);

    const items = screen.getAllByTestId("lunchSpotListItem");

    expect(items.length).toBe(mockPlaces.length);
  });
});

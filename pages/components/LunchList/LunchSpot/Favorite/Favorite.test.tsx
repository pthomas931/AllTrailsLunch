import React from "react";

import { render, screen } from "@testing-library/react";
import Favorite from ".";

describe("Favorite", () => {
  it("renders a heart", () => {
    render(<Favorite placeId="apples" />);

    const favButton = screen.getByRole("button");

    expect(favButton).toBeInTheDocument();
  });
});

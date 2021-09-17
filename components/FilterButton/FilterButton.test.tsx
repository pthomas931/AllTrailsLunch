import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";
import FilterButton from ".";

describe("FilterButton", () => {
  it("renders sort dialog", () => {
    render(<FilterButton sortVal="" setSortVal={() => {}} />);

    expect(screen.queryByText("Ratings High to Low")).toBeNull();

    fireEvent.click(screen.getByRole("button"));

    expect(screen.getByText("Ratings High to Low")).toBeInTheDocument();
  });
});

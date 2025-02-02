import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "../src/pages/HomePage";
import { BrowserRouter } from "react-router-dom";

test("renders homepage with blog posts", () => {
  render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );

  expect(screen.getByText("Blog Posts")).toBeInTheDocument();
});
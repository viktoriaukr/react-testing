import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

test("smoke test", () => {
  render(
    <Card
      caption="Photo by Richard Pasquarella on Unsplash"
      src={`./image1.jpg`}
    />
  );
});

test("snapshot test", () => {
  const { asFragment } = render(
    <Card
      caption="Photo by Richard Pasquarella on Unsplash"
      src={`./image1.jpg`}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});


import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

// smoke test
test("renders without crashing", function () {
  render(<Card caption="Test Photo" src="testImage.png" currNum={1} totalNum={1} />);
});

// snapshot test
test("matches snapshot", function () {
  const { asFragment } = render(<Card caption="Test Photo" src="testImage.png" currNum={1} totalNum={1} />);
  expect(asFragment()).toMatchSnapshot();
});

import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../components/App";
import forecast from '../data/forecast.json';

xtest("renders learn react link", () => {
  render(<App />);
  const appTitle = screen.getByText(/Weather App/i);
  expect(appTitle).toBeInTheDocument();
});

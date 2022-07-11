import React from "react";
import forecast from "../data/forecast.json";
import ForecastSummary from "./ForecastSummary";

const ForecastSummaries = (props) => {
  console.log(props);
  const { date } = props;
  return <h1>{`${date}`}</h1>;
};

export default ForecastSummaries;

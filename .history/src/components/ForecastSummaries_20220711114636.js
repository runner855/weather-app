import React from "react";
import forecast from "../data/forecast.json";
import ForecastSummary from "./ForecastSummary";

const ForecastSummaries = (props) => {
  console.log(props);
  const { date } = props;
  return <ForecastSummary date={forecast.forecasts.date} />;
};

export default ForecastSummaries;

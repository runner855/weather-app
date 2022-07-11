import React from "react";
import ForecastSummary from "./ForecastSummary";

const ForecastSummaries = (props) => {
  const { date } = props;
  return <ForecastSummary date={forecasts.date} />;
};

export default ForecastSummaries;

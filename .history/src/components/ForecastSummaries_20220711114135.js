import React from "react";
import ForecastSummary from "./ForecastSummary";

const ForecastSummaries = (props) => {
  const { forecasts } = props;
  return <ForecastSummary date={forecasts.date} />;
};

export default ForecastSummaries;

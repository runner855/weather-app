import React from "react";

const ForecastSummary = (props) => {
  const { date } = props;
  return;
  <div className="forecast-summary">
    <div className="forecast-summary__date">
      <h1>{`${date}`}</h1>
    </div>
  </div>;
};

export default ForecastSummary;

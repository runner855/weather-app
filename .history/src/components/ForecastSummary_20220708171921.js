import React from "react";

const ForecastSummary = (props) => {
  const { forecast } = props;
  return
  <div className="forecast-summary" >
    <div className="forecast-summary__date">
      <h1>{`${forecast.date}`}</h1>
    </div>

  </div>
};

export default ForecastSummary;

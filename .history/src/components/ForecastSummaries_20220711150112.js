import React from "react";
import PropTypes from "prop-types";

const ForecastSummaries = (props) => {
  console.log(props);
  const { date } = props;
  return (
    <div className="forecast-summaries">
      <h1>hello</h1>
    </div>
  )
};

export default ForecastSummaries;

ForecastSummaries.propTypes = {
  date: PropTypes.number.isRequired,
};

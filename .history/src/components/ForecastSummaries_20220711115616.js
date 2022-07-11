import React from "react";
import PropTypes from "prop-types";

const ForecastSummaries = (props) => {
  console.log(props);
  const { date } = props;
  return <h1>{`${date}`}</h1>;
};

export default ForecastSummaries;

ForecastSummaries.propTypes = {
  date: PropTypes.number.isRequired,
};

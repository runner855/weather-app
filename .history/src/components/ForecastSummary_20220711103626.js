import React from "react";
import PropTypes from "prop-types";

const ForecastSummary = (props) => {
  const { date, description, icon, temperature } = props;
  console.log(props);

  return (
    <div className="forecast-summary">
      <div className="forecast-summary__date">`{date}`</div>
    </div>
  );
};

export default ForecastSummary;

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};

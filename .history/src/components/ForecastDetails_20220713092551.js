import React from 'react';
import PropTypes from 'prop-types';


const ForecastDetails = () => {
  return (  );
}

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast = PropTypes.shape({
    date: PropTypes.number,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,

    }).isRequired,

  }).isRequired,
}
import React from 'react';
import PropTypes from 'prop-types';


const ForecastDetails = () => {
  return (
    <div className='forecast-details'>
      <div className='forecast-details__date'>
        {date}
      </div>
    </div>
  );
}

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    humidity: PropTypes.number,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,

  }).isRequired,
}
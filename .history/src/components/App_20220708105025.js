import "../styles/App.css";
import React from "react";
import PropTypes from 'prop-types';
import LocationDetails from "./LocationDetails";

const App = (props) => {
  const { location } = props;
  return (
    <div className="App">
      <LocationDetails city={location.city} coountry={location.country} />
    </div>
  );
};

export default App;

App.

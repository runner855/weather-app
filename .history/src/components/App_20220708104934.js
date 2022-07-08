import "../styles/App.css";
import React from "react";
import LocationDetails from "./LocationDetails";

const App = (props) => {
  const { location } = props;
  return (
    <div className="App">
      <LocationDetails city={location.city} coountry={loction.country} />
    </div>
  );
};

export default App;

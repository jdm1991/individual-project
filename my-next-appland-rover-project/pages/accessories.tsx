import Layout from './layout'
import React, { useState } from "react";
import '../app/globals.css'
import "../pages/accessories.css";
export default function accessories() {
    
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const vehicleDetails = {
    "Land Rover 1": "Details for Land Rover 1" + "Callum is gay",
    "Land Rover 2": "Details for Land Rover 2",
    "Land Rover 3": "Details for Land Rover 3",
  };

  const selectVehicle = (vehicle) => {
    setSelectedVehicle(vehicle);
  };
    

    return (
      <Layout>
        <div className="page-design">
          <div className="left-menu">
            {Object.keys(vehicleDetails).map((vehicle, index) => (
              <div
                key={index}
                className={`vehicle-option${index + 1}`}
                onClick={() => selectVehicle(vehicle)}
              >
                {/* img src should be updated to point to the correct image */}
                <img src="" alt={vehicle} />
                <h3>{vehicle}</h3>
                <p>Price</p>
              </div>
            ))}
          </div>
          <div className="right-content">
            {/* This will render the selected vehicle's details */}
            {selectedVehicle && (
              <div>
                <h1>{selectedVehicle}</h1>
                <p>{vehicleDetails[selectedVehicle]}</p>
                <button>Explore the Range</button>
              </div>
            )}
          </div>
        </div>
      </Layout>
    );
}
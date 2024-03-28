import React, { useState } from "react";
import { PrismaClient } from "@prisma/client";
import Layout from "./layout";
import "../app/globals.css";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { MdOutlineMedicalServices } from "react-icons/md";
import { TbManualGearbox } from "react-icons/tb";
import Image from "next/image";

const prisma = new PrismaClient();

export default function Vehicles({ vehicles }) {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const formatCurrency = (value) => {
    const priceInPounds = value / 100;
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(priceInPounds);
  };

  const selectVehicle = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  return (
    <Layout>
      <div className="grid grid-cols-[25rem_1fr] h-[calc(100vh-6rem)]">
        <div
          className="bg-[#C7C8CC] p-2 border-r border-black overflow-y-auto bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/Basic2.jpeg')" }}
        >
          <div className="bg-white p-2 mb-1 text-2xl font-bold text-center rounded-md">
            For Sale:
          </div>
          {Array.isArray(vehicles) &&
            vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className={`p-2 my-1 w-full bg-white flex items-center rounded-md hover:bg-gray-300 hover:cursor-pointer ${
                  selectedVehicle?.id === vehicle.id
                    ? "font-bold text-black"
                    : ""
                }`}
                onClick={() => selectVehicle(vehicle)}
              >
                <img
                  src={vehicle.imageUrl}
                  alt="thumbnail"
                  className="w-[120px] h-[50px] object-cover mr-4"
                />
                <div>
                  <h3>{vehicle.name}</h3>
                  <p>From {formatCurrency(vehicle.price)}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="p-8 flex flex-col h-[calc(100vh-6rem)]">
          <div className="flex-grow overflow-y-auto">
            {!selectedVehicle && (
              <div className="flex justify-center items-center h-full opacity-30">
                <img
                  src="/LandRoverLogo.png"
                  alt="Logo"
                  className="max-w-full max-h-full"
                />
              </div>
            )}
            {selectedVehicle && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="grid-in-image">
                  <img
                    src={selectedVehicle.imageUrl}
                    alt={selectedVehicle.name}
                    className="w-full max-h-[30rem] object-cover rounded-lg"
                  />
                  <div className="flex justify-between mt-4">
                    {/* Add thumbnail images */}
                  </div>
                </div>
                <div className="grid-in-info flex flex-col justify-between">
                  <h1 className="text-3xl mb-2">{selectedVehicle.name}</h1>
                  <p className="text-base mb-6">
                    {selectedVehicle.description}
                  </p>
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-4 mb-8">
                    <div className="flex flex-col">
                      <span className="font-bold mb-1">Price:</span>
                      <span>{formatCurrency(selectedVehicle.price)}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold mb-1">Mileage:</span>
                      <span>{selectedVehicle.mileage}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold mb-1">Color:</span>
                      <span>{selectedVehicle.colour}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold mb-1">Gearbox:</span>
                      <span>{selectedVehicle.gearbox}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold mb-1">Year:</span>
                      <span>{selectedVehicle.year}</span>
                    </div>
                  </div>
                  <div className="flex justify-around mb-4 gap-12">
                    <div className="flex flex-col items-center">
                      <i className="text-4xl mb-2 gap-3">
                        <BsFuelPumpDiesel />
                      </i>
                      <span className="text-sm text-center">Diesel</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <i className="text-4xl mb-2">
                        <MdOutlineMedicalServices />
                      </i>
                      <span className="text-sm text-center">
                        12 Month Warranty
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <i className="text-4xl mb-2">
                        <TbManualGearbox />
                      </i>
                      <span className="text-sm text-center">
                        Manual Gearbox
                      </span>
                    </div>
                  </div>
                  <button className="bg-[#004225] text-white border-none py-4 px-8 text-base cursor-pointer rounded">
                    Get In Touch
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const vehiclesData = await prisma.cars.findMany();
    console.log("vehiclesData:", vehiclesData);
    return {
      props: {
        vehicles: JSON.parse(JSON.stringify(vehiclesData)),
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        vehicles: [],
      },
    };
  }
}

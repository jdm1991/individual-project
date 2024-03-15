import React, { useState } from "react";
import { PrismaClient } from "@prisma/client";
import Layout from "./layout";
import "../app/globals.css";
import withAuth from "./utils/withAuth";

const prisma = new PrismaClient();

const AdminConsole = () => {
  const [newAccessory, setNewAccessory] = useState({
    name: "",
    description: "",
    price: 0,
    imageUrl: "",
  });
  const [newVehicle, setNewVehicle] = useState({
    name: "",
    price: 0,
    imageUrl: "",
    mileage: 0,
    colour: "",
    gearbox: "",
    year: 0,
    description: "",
    identifier: "",
  });
  const [contactMessages, setContactMessages] = useState([]);
  const [accessoryErrors, setAccessoryErrors] = useState({});
  const [vehicleErrors, setVehicleErrors] = useState({});

  const handleAccessoryChange = (e) => {
    setNewAccessory({ ...newAccessory, [e.target.name]: e.target.value });
    setAccessoryErrors({ ...accessoryErrors, [e.target.name]: "" });
  };

  const handleVehicleChange = (e) => {
    setNewVehicle({ ...newVehicle, [e.target.name]: e.target.value });
    setVehicleErrors({ ...vehicleErrors, [e.target.name]: "" });
  };

  const validateAccessory = () => {
    let errors = {};
    Object.keys(newAccessory).forEach((key) => {
      if (!newAccessory[key]) {
        errors[key] = `Please enter a value for ${key}`;
      }
    });
    setAccessoryErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateVehicle = () => {
    let errors = {};
    Object.keys(newVehicle).forEach((key) => {
      if (!newVehicle[key]) {
        errors[key] = `Please enter a value for ${key}`;
      }
    });
    setVehicleErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const addAccessory = async () => {
    if (validateAccessory()) {
      try {
        const createdAccessory = await prisma.accessories.create({
          data: newAccessory,
        });
        console.log("New accessory created:", createdAccessory);
        // Optionally, you can reset the form fields or perform additional actions
      } catch (error) {
        console.error("Error creating accessory:", error);
      }
    }
  };

  const addVehicle = async () => {
    if (validateVehicle()) {
      try {
        const createdVehicle = await prisma.cars.create({
          data: newVehicle,
        });
        console.log("New vehicle created:", createdVehicle);
        // Optionally, you can reset the form fields or perform additional actions
      } catch (error) {
        console.error("Error creating vehicle:", error);
      }
    }
  };

  const fetchContactMessages = async () => {
    try {
      const messages = await prisma.contactFormMessages.findMany();
      setContactMessages(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Admin Console</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Add Accessory</h2>
            <div className="mb-4">
              <label htmlFor="accessoryName" className="block font-bold mb-1">
                Name
              </label>
              <input
                type="text"
                id="accessoryName"
                name="name"
                value={newAccessory.name}
                onChange={handleAccessoryChange}
                className={`w-full border ${
                  accessoryErrors.name ? "border-red-500" : "border-gray-300"
                } rounded px-3 py-2`}
              />
              {accessoryErrors.name && (
                <p className="text-red-500">{accessoryErrors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="accessoryDescription"
                className="block font-bold mb-1"
              >
                Description
              </label>
              <textarea
                id="accessoryDescription"
                name="description"
                value={newAccessory.description}
                onChange={handleAccessoryChange}
                className={`w-full border ${
                  accessoryErrors.description
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded px-3 py-2`}
              />
              {accessoryErrors.description && (
                <p className="text-red-500">{accessoryErrors.description}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="accessoryPrice" className="block font-bold mb-1">
                Price
              </label>
              <input
                type="number"
                id="accessoryPrice"
                name="price"
                value={newAccessory.price}
                onChange={handleAccessoryChange}
                className={`w-full border ${
                  accessoryErrors.price ? "border-red-500" : "border-gray-300"
                } rounded px-3 py-2`}
              />
              {accessoryErrors.price && (
                <p className="text-red-500">{accessoryErrors.price}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="accessoryImageUrl"
                className="block font-bold mb-1"
              >
                Image URL
              </label>
              <input
                type="text"
                id="accessoryImageUrl"
                name="imageUrl"
                value={newAccessory.imageUrl}
                onChange={handleAccessoryChange}
                className={`w-full border ${
                  accessoryErrors.imageUrl
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded px-3 py-2`}
              />
              {accessoryErrors.imageUrl && (
                <p className="text-red-500">{accessoryErrors.imageUrl}</p>
              )}
            </div>
            <button
              onClick={addAccessory}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Accessory
            </button>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Add Vehicle</h2>
            <div className="mb-4">
              <label htmlFor="vehicleName" className="block font-bold mb-1">
                Name
              </label>
              <input
                type="text"
                id="vehicleName"
                name="name"
                value={newVehicle.name}
                onChange={handleVehicleChange}
                className={`w-full border ${
                  vehicleErrors.name ? "border-red-500" : "border-gray-300"
                } rounded px-3 py-2`}
              />
              {vehicleErrors.name && (
                <p className="text-red-500">{vehicleErrors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="vehiclePrice" className="block font-bold mb-1">
                Price
              </label>
              <input
                type="number"
                id="vehiclePrice"
                name="price"
                value={newVehicle.price}
                onChange={handleVehicleChange}
                className={`w-full border ${
                  vehicleErrors.price ? "border-red-500" : "border-gray-300"
                } rounded px-3 py-2`}
              />
              {vehicleErrors.price && (
                <p className="text-red-500">{vehicleErrors.price}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="vehicleImageUrl" className="block font-bold mb-1">
                Image URL
              </label>
              <input
                type="text"
                id="vehicleImageUrl"
                name="imageUrl"
                value={newVehicle.imageUrl}
                onChange={handleVehicleChange}
                className={`w-full border ${
                  vehicleErrors.imageUrl ? "border-red-500" : "border-gray-300"
                } rounded px-3 py-2`}
              />
              {vehicleErrors.imageUrl && (
                <p className="text-red-500">{vehicleErrors.imageUrl}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="vehicleMileage" className="block font-bold mb-1">
                Mileage
              </label>
              <input
                type="number"
                id="vehicleMileage"
                name="mileage"
                value={newVehicle.mileage}
                onChange={handleVehicleChange}
                className={`w-full border ${
                  vehicleErrors.mileage ? "border-red-500" : "border-gray-300"
                } rounded px-3 py-2`}
              />
              {vehicleErrors.mileage && (
                <p className="text-red-500">{vehicleErrors.mileage}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="vehicleColour" className="block font-bold mb-1">
                Colour
              </label>
              <input
                type="text"
                id="vehicleColour"
                name="colour"
                value={newVehicle.colour}
                onChange={handleVehicleChange}
                className={`w-full border ${
                  vehicleErrors.colour ? "border-red-500" : "border-gray-300"
                } rounded px-3 py-2`}
              />
              {vehicleErrors.colour && (
                <p className="text-red-500">{vehicleErrors.colour}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="vehicleGearbox" className="block font-bold mb-1">
                Gearbox
              </label>
              <input
                type="text"
                id="vehicleGearbox"
                name="gearbox"
                value={newVehicle.gearbox}
                onChange={handleVehicleChange}
                className={`w-full border ${
                  vehicleErrors.gearbox ? "border-red-500" : "border-gray-300"
                } rounded px-3 py-2`}
              />
              {vehicleErrors.gearbox && (
                <p className="text-red-500">{vehicleErrors.gearbox}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="vehicleYear" className="block font-bold mb-1">
                Year
              </label>
              <input
                type="number"
                id="vehicleYear"
                name="year"
                value={newVehicle.year}
                onChange={handleVehicleChange}
                className={`w-full border ${
                  vehicleErrors.year ? "border-red-500" : "border-gray-300"
                } rounded px-3 py-2`}
              />
              {vehicleErrors.year && (
                <p className="text-red-500">{vehicleErrors.year}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="vehicleDescription"
                className="block font-bold mb-1"
              >
                Description
              </label>
              <textarea
                id="vehicleDescription"
                name="description"
                value={newVehicle.description}
                onChange={handleVehicleChange}
                className={`w-full border ${
                  vehicleErrors.description
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded px-3 py-2`}
              />
              {vehicleErrors.description && (
                <p className="text-red-500">{vehicleErrors.description}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="vehicleIdentifier"
                className="block font-bold mb-1"
              >
                Identifier
              </label>
              <input
                type="text"
                id="vehicleIdentifier"
                name="identifier"
                value={newVehicle.identifier}
                onChange={handleVehicleChange}
                className={`w-full border ${
                  vehicleErrors.identifier
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded px-3 py-2`}
              />
              {vehicleErrors.identifier && (
                <p className="text-red-500">{vehicleErrors.identifier}</p>
              )}
            </div>
            <button
              onClick={addVehicle}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Vehicle
            </button>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Contact Form Messages</h2>
          <button
            onClick={fetchContactMessages}
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
          >
            Fetch Messages
          </button>
          {contactMessages.length > 0 ? (
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Message</th>
                </tr>
              </thead>
              <tbody>
                {contactMessages.map((message) => (
                  <tr key={message.id}>
                    <td className="border px-4 py-2">{message.name}</td>
                    <td className="border px-4 py-2">{message.email}</td>
                    <td className="border px-4 py-2">{message.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No contact messages available.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default withAuth(AdminConsole);

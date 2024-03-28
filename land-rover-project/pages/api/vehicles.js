// pages/api/vehicles.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const vehicles = await prisma.cars.findMany();
      res.status(200).json(vehicles);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    }
  } else if (req.method === "DELETE") {
    const { id } = req.query;
    try {
      const deletedVehicle = await prisma.cars.delete({
        where: { id: parseInt(id) },
      });
      if (deletedVehicle) {
        res.status(200).json({ message: "Vehicle deleted successfully" });
      } else {
        res.status(404).json({ error: "Vehicle not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    }
  } else if (req.method === "POST") {
    const {
      name,
      price,
      imageUrl,
      mileage,
      colour,
      gearbox,
      year,
      description,
      identifier,
    } = req.body;
    try {
      const createdVehicle = await prisma.cars.create({
        data: {
          name,
          price,
          imageUrl,
          mileage,
          colour,
          gearbox,
          year,
          description,
          identifier,
        },
      });
      res.status(201).json(createdVehicle);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

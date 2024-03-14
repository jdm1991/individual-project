// pages/api/accessories.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const accessories = await prisma.accessories.findMany();
      res.status(200).json(accessories);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching accessories" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res
      .status(405)
      .json({ message: `HTTP method ${req.method} is not allowed` });
  }
}

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const User = {
  name: "admin",
  email: "admin@example.com",
  password: "admin",
  role: "admin",
};

const carData = [
  {
    name: "Defender 90 Limited Edition",
    price: 8500000,
    imageUrl: "https://i.imgur.com/7gsF9aJ.jpg",
    mileage: 50000,
    colour: "Black",
    gearbox: "Manual",
    year: 2005,
    description:
      "Embark on your next adventure with this rugged and reliable 2005 Land Rover Defender 90. A true icon in the world of off-road vehicles, this Defender combines classic styling with robust performance. With its sturdy 4x4 capability, this vehicle is prepared to take you from the bustling city streets to the most challenging rural terrains.",
    identifier: "90",
  },
  {
    name: "Defender 90 Hard Top",
    price: 5500000,
    imageUrl: "https://i.imgur.com/VCQa6bp.jpg",
    mileage: 75000,
    colour: "Black",
    gearbox: "Automatic",
    year: 2008,
    description:
      "Embrace the perfect blend of rugged capability and iconic design with our 2005 Land Rover Defender 90 Hard Top. Finished in a sleek, deep black, this Defender is more than just a vehicle; it's a statement of adventure and resilience. Underneath its classic silhouette lies a robust engine ready to take on any terrain, whether it's the urban jungle or the most remote landscapes.",
    identifier: "90",
  },
  {
    name: "Defender 90 Truck",
    price: 4500000,
    imageUrl: "https://i.imgur.com/ZRGVCTf.jpg",
    mileage: 90000,
    colour: "British Racing Green",
    gearbox: "Manual",
    year: 2004,
    description:
      "Dive into adventure with our classic Land Rover Defender 90 Truck, a masterpiece of off-road capability combined with timeless style. This open-top marvel, cloaked in a striking shade of black, offers an unfiltered connection to the great outdoors, perfect for those who seek the thrill of the open air while navigating through rugged landscapes or cruising city streets.",
    identifier: "90",
  },
  {
    name: "Defender 110 Hardtop",
    price: 6500000,
    imageUrl: "https://i.imgur.com/lFFH47P.jpg",
    mileage: 30000,
    colour: "Silver",
    gearbox: "Manual",
    year: 2009,
    description:
      "The Land Rover Defender 110 Hardtop is a rugged and versatile vehicle that can handle any terrain. With its powerful engine, spacious interior, and durable exterior design, this car is perfect for those who love to explore the great outdoors.",
    identifier: "110",
  },
  {
    name: "Defender 110 Safari",
    price: 7500000,
    imageUrl: "https://i.imgur.com/cW84HEx.jpg",
    mileage: 28000,
    colour: "Silver",
    gearbox: "Manual",
    year: 2007,
    description:
      "The Land Rover Defender 110 with a soft top is a classic and versatile four-wheel drive vehicle. This model of the Defender, renowned for its rugged off-road capabilities and unique, timeless design, offers a distinct soft top option that adds a layer of flexibility and open-air driving experience. The soft top, typically made from durable, weather-resistant material, can be easily removed or retracted, allowing for an open-air feel while navigating through various terrains or enjoying a sunny day.",
    identifier: "110",
  },
  {
    name: "Defender 110 Limited Edition",
    price: 9500000,
    imageUrl: "https://i.imgur.com/12cxue8.jpg",
    mileage: 68000,
    colour: "Black",
    gearbox: "Manual",
    year: 2014,
    description:
      "The Land Rover Defender 110 Hard Top Limited Edition is a premium and highly sought-after variant of the iconic Defender series, known for its exceptional durability, ruggedness, and luxury features. This special edition combines the traditional off-road prowess of the Defender with exclusive design elements and enhanced specifications that set it apart from standard models. The hard top configuration offers added security and protection from the elements, making it ideal for challenging terrains and adverse weather conditions.",
    identifier: "110",
  },
];

const accessories = [
  {
    name: "Floor Mats",
    description: "Premium rubber layer for the floor of your foot temple",
    price: 2999,
    imageUrl: "https://i.imgur.com/1CGyZr3.jpg",
  },
  {
    name: "Fluffy Dice",
    description: "Become the syle master you were born to be.",
    price: 2999,
    imageUrl: "https://i.imgur.com/kXYDiKi.jpg",
  },
  {
    name: "Gear Knob",
    description: "Premium gear knob for your manual vehicle.",
    price: 8999,
    imageUrl: "https://i.imgur.com/AHnRMAt.jpg",
  },
  {
    name: "Ladder",
    description: "Ladder for climbing up and down your stylish ride.",
    price: 15999,
    imageUrl: "https://i.imgur.com/2FlLuv2.jpg",
  },
];

async function clearDatabase() {
  try {
    await prisma.cars.deleteMany();
    await prisma.accessories.deleteMany();
    await prisma.user.deleteMany();
    console.log("Database cleared successfully.");
  } catch (error) {
    console.error(`Error clearing database: ${error.message}`);
  }
}

async function main() {
  console.log("Start seeding...");

  // Clear the database
  await clearDatabase();

  // Seed the User table
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(User.password, saltRounds);
  try {
    const newUser = await prisma.user.create({
      data: {
        email: User.email,
        password: hashedPassword,
      },
    });
    console.log(`Created user with id: ${newUser.id}`);
  } catch (error) {
    console.error(`Error creating user: ${error.message}`);
  }

  // Seed the Cars table
  for (const car of carData) {
    try {
      const newCar = await prisma.cars.create({
        data: car,
      });
      console.log(`Created car with id: ${newCar.id}`);
    } catch (error) {
      console.error(`Error creating car: ${error.message}`);
    }
  }

  // Seed the Accessories table
  for (const accessory of accessories) {
    try {
      const newAccessory = await prisma.accessories.create({
        data: accessory,
      });
      console.log(`Created accessory with id: ${newAccessory.id}`);
    } catch (error) {
      console.error(`Error creating accessory: ${error.message}`);
    }
  }

  console.log("Seeding finished.");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });

import Layout from "./layout";
import React, { useState } from "react";
import { PrismaClient } from "@prisma/client";
import "../app/globals.css";
import Image from "next/image";
import { useRouter } from "next/router";

const prisma = new PrismaClient();

export default function Accessories({ accessories }) {
  const [selectedAccessory, setSelectedAccessory] = useState(null);
  const [basket, setBasket] = useState([]);
  const router = useRouter();

  const formatCurrency = (value) => {
    const priceInPounds = value / 100;
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(priceInPounds);
  };

  const selectAccessory = (accessory) => {
    setSelectedAccessory(accessory);
  };

  const addToBasket = (accessory) => {
    const existingItem = basket.find((item) => item.id === accessory.id);
    if (existingItem) {
      setBasket(
        basket.map((item) =>
          item.id === accessory.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setBasket([...basket, { ...accessory, quantity: 1 }]);
    }
  };

  const removeFromBasket = (accessoryId) => {
    const existingItem = basket.find((item) => item.id === accessoryId);
    if (existingItem.quantity === 1) {
      setBasket(basket.filter((item) => item.id !== accessoryId));
    } else {
      setBasket(
        basket.map((item) =>
          item.id === accessoryId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const getTotalPrice = () => {
    return basket.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <Layout>
      <div className="grid grid-cols-[25rem_1fr] h-[calc(100vh-6rem)]">
        <div
          className="bg-[#C7C8CC] p-2 border-r border-black overflow-y-auto bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/LandRoverPic.jpeg')" }}
        >
          <div className="bg-white p-2 mb-1 text-2xl font-bold text-center rounded-md">
            Accessories:
          </div>
          {Array.isArray(accessories) &&
            accessories.map((accessory) => (
              <div
                key={accessory.id}
                className={`p-2 my-1 w-full bg-white flex items-center rounded-md hover:bg-gray-300 hover:cursor-pointer ${
                  selectedAccessory?.id === accessory.id
                    ? "font-bold text-black"
                    : ""
                }`}
                onClick={() => selectAccessory(accessory)}
              >
                <img
                  src={accessory.imageUrl}
                  alt="thumbnail"
                  className="w-[120px] h-[50px] object-cover mr-4"
                />
                <div>
                  <h3>{accessory.name}</h3>
                  <p>From {formatCurrency(accessory.price)}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="p-8 flex flex-col h-[calc(100vh-6rem)]">
          <div className="flex-grow overflow-y-auto">
            {!selectedAccessory && (
              <div className="flex justify-center items-center h-full opacity-30">
                <img
                  src="/LandRoverLogo.png"
                  alt="Logo"
                  className="max-w-full max-h-full"
                />
              </div>
            )}
            {selectedAccessory && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="grid-in-image">
                  <img
                    src={selectedAccessory.imageUrl}
                    alt={selectedAccessory.name}
                    className="w-full max-h-[30rem] object-cover rounded-lg"
                  />
                </div>
                <div className="grid-in-info flex flex-col justify-between">
                  <h1 className="text-3xl mb-2">{selectedAccessory.name}</h1>
                  <p className="text-base mb-6">
                    {selectedAccessory.description}
                  </p>
                  <div className="flex justify-between mb-8">
                    <div className="flex flex-col">
                      <span className="font-bold mb-1">Price:</span>
                      <span>{formatCurrency(selectedAccessory.price)}</span>
                    </div>
                  </div>
                  <button
                    className="bg-[#004225] text-white border-none py-4 px-8 text-base cursor-pointer rounded hover:bg-[#006633]"
                    onClick={() => addToBasket(selectedAccessory)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="mt-8">
            <h2 className="text-2xl mb-4">Basket</h2>
            {basket.length === 0 ? (
              <p>Your basket is empty.</p>
            ) : (
              <div>
                {basket.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between mb-2"
                  >
                    <div className="flex-1 truncate mr-4">{item.name}</div>
                    <div className="flex items-center">
                      <button
                        className="bg-gray-200 px-2 py-1 rounded"
                        onClick={() => removeFromBasket(item.id)}
                      >
                        -
                      </button>
                      <span className="mx-2 w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        className="bg-gray-200 px-2 py-1 rounded"
                        onClick={() => addToBasket(item)}
                      >
                        +
                      </button>
                    </div>
                    <div className="w-20 text-right">
                      {formatCurrency(item.price * item.quantity)}
                    </div>
                  </div>
                ))}
                <div className="flex justify-between mt-4">
                  <span className="font-bold">Total:</span>
                  <span>{formatCurrency(getTotalPrice())}</span>
                </div>
                <button
                  className="bg-[#004225] text-white border-none py-4 px-8 text-base cursor-pointer rounded mt-4 hover:bg-[#006633]"
                  onClick={() =>
                    router.push({
                      pathname: "/checkoutPage",
                      query: { basket: JSON.stringify(basket) },
                    })
                  }
                >
                  Checkout
                </button>
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
    const accessories = await prisma.accessories.findMany();

    return {
      props: {
        accessories,
      },
    };
  } catch (error) {
    console.error("Error fetching accessories:", error);
    return {
      props: {
        accessories: [],
      },
    };
  }
}

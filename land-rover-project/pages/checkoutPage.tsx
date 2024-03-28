import Layout from "./layout";
import React, { useState } from "react";
import "../app/globals.css";
import VisaButton from "./components/VisaButton";
import ApplePayButton from "./components/ApplePayButton";
import PayPalButton from "./components/PayPalButton";
import PayWithBitcoin from "./components/PayWithBitcoin";
import EthereumButton from "./components/EthereumButton";
import { useRouter } from "next/router";

export default function Checkout() {
  const router = useRouter();
  const { basket: basketQuery } = router.query;
  const basket = basketQuery ? JSON.parse(basketQuery) : [];

  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const [billingDetails, setBillingDetails] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const handleDeliveryChange = (e) => {
    setDeliveryDetails({
      ...deliveryDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleBillingChange = (e) => {
    setBillingDetails({
      ...billingDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Delivery Details:", deliveryDetails);
    console.log("Billing Details:", billingDetails);
  };

  const formatCurrency = (value) => {
    const priceInPounds = value / 100;
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(priceInPounds);
  };

  const getTotalPrice = () => {
    return basket.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-[#004225]">Checkout</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Delivery Details</h2>
              <div className="mb-4">
                <label htmlFor="deliveryName" className="block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="deliveryName"
                  name="name"
                  value={deliveryDetails.name}
                  onChange={handleDeliveryChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="deliveryAddress" className="block mb-1">
                  Address
                </label>
                <input
                  type="text"
                  id="deliveryAddress"
                  name="address"
                  value={deliveryDetails.address}
                  onChange={handleDeliveryChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="deliveryCity" className="block mb-1">
                  City
                </label>
                <input
                  type="text"
                  id="deliveryCity"
                  name="city"
                  value={deliveryDetails.city}
                  onChange={handleDeliveryChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="deliveryPostalCode" className="block mb-1">
                  Postal Code
                </label>
                <input
                  type="text"
                  id="deliveryPostalCode"
                  name="postalCode"
                  value={deliveryDetails.postalCode}
                  onChange={handleDeliveryChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="deliveryCountry" className="block mb-1">
                  Country
                </label>
                <input
                  type="text"
                  id="deliveryCountry"
                  name="country"
                  value={deliveryDetails.country}
                  onChange={handleDeliveryChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
              <div className="mb-4">
                <label htmlFor="billingName" className="block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="billingName"
                  name="name"
                  value={billingDetails.name}
                  onChange={handleBillingChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="billingAddress" className="block mb-1">
                  Address
                </label>
                <input
                  type="text"
                  id="billingAddress"
                  name="address"
                  value={billingDetails.address}
                  onChange={handleBillingChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="billingCity" className="block mb-1">
                  City
                </label>
                <input
                  type="text"
                  id="billingCity"
                  name="city"
                  value={billingDetails.city}
                  onChange={handleBillingChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="billingPostalCode" className="block mb-1">
                  Postal Code
                </label>
                <input
                  type="text"
                  id="billingPostalCode"
                  name="postalCode"
                  value={billingDetails.postalCode}
                  onChange={handleBillingChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="billingCountry" className="block mb-1">
                  Country
                </label>
                <input
                  type="text"
                  id="billingCountry"
                  name="country"
                  value={billingDetails.country}
                  onChange={handleBillingChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            {basket.map((item) => (
              <div key={item.id} className="flex justify-between mb-2">
                <div>{item.name}</div>
                <div>
                  {item.quantity} x {formatCurrency(item.price)}
                </div>
              </div>
            ))}
            <div className="flex justify-between mt-4">
              <span className="font-bold">Total:</span>
              <span>{formatCurrency(getTotalPrice())}</span>
            </div>
          </div>
          <div className="mt-8 flex items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Payment Options</h2>
              <div className="flex space-x-4">
                <ApplePayButton />
                <VisaButton />
                <PayPalButton />
                <PayWithBitcoin />
                <EthereumButton />
                <div className="flex-grow"></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}

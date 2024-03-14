import React, { useState } from "react";
import Layout from "./layout";

export default function Portal() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here, e.g., send a request to the server
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <Layout>
      <div
        className="flex justify-center items-center"
        style={{ height: "calc(100vh - 6rem)" }}
      >
        <div className="bg-white shadow-xl shadow-[0_0_20px_rgba(0,0,0,0.2)] rounded-lg p-10 w-96">
          <div className="flex justify-center mb-6">
            <img
              src="/LandRoverLogo.png"
              alt="Land Rover Logo"
              className="h-16"
            />
          </div>
          <h2 className="text-xl mb-4">Admin/Staff Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-[#004225] text-white border-none py-4 px-8 text-base cursor-pointer rounded-md w-full mt-4 hover:bg-[#006633]"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

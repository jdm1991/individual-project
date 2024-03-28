import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "./layout";
import "../app/globals.css";

export default function Portal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

 const handleSubmit = async (e) => {
   e.preventDefault();

   try {
     const response = await fetch("/api/auth", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({ email, password }),
     });

     if (response.ok) {
       const { token } = await response.json();
       localStorage.setItem("token", token);
       router.push("/adminConsole");
     } else {
       const { message } = await response.json();
       setError(message);
     }
   } catch (error) {
     console.error(error);
     setError("Something went wrong");
   }
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
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

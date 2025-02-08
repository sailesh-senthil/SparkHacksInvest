"use client";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedInvestments = JSON.parse(localStorage.getItem("swipedBusinesses") || "[]");
      setInvestments(Array.isArray(storedInvestments) ? storedInvestments : []);
    }
  }, []);

  // Function to remove an investment
  const removeInvestment = (id) => {
    const updatedInvestments = investments.filter((inv) => inv.id !== id);
    setInvestments(updatedInvestments);
    localStorage.setItem("swipedBusinesses", JSON.stringify(updatedInvestments));
  };

  return (
    <div className="p-6 bg-gradient-to-b from-gray-900 to-blue-900 min-h-screen text-gray-200">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-100 drop-shadow-lg">My Current Investments</h1>

      {investments.length === 0 ? (
        <p className="text-gray-500 text-center">No investments yet. Explore businesses to start investing.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investments.map((inv, index) => (
            <div
              key={inv?.id || index}
              className="border border-gray-700 rounded-lg p-6 shadow-xl bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-2xl relative"
            >
              <h2 className="text-2xl font-semibold text-white mb-2">{inv?.name || "N/A"}</h2>
              <p className="text-cyan-400 text-lg font-medium">{inv?.industry || "N/A"}</p>
              <p className="mt-2 text-gray-300">
                Quarterly Revenue: <span className="text-blue-400">{inv?.quarterlyRevenue || "N/A"}</span>
              </p>
              <p className="text-gray-300">
                Employees: <span className="text-blue-400">{inv?.employees || "N/A"}</span>
              </p>
              <p className="text-green-400 font-bold text-lg mt-3">Risk: {inv?.riskAssessment || "N/A"}</p>

              {/* Remove Button */}
              <button
                onClick={() => removeInvestment(inv?.id)}
                className="mt-4 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-200"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

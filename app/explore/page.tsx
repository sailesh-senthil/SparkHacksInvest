"use client";
import { useState, useEffect } from "react";
import { investments } from "@/lib/data";
import { XCircle } from "lucide-react";

export default function ExplorePage() {
  const [index, setIndex] = useState(0);
  const [savedInvestments, setSavedInvestments] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("swipedBusinesses") || "[]");
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("swipedBusinesses", JSON.stringify(savedInvestments));
    }
  }, [savedInvestments]);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % investments.length);
  };

  const handleReject = () => {
    handleNext();
  };

  const handleInvest = () => {
    const selectedBusiness = investments[index];
    if (!savedInvestments.some((inv) => inv.id === selectedBusiness.id)) {
      const updatedInvestments = [...savedInvestments, selectedBusiness];
      setSavedInvestments(updatedInvestments);
    }
    handleNext();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-900 text-gray-200">
      <h1 className="text-4xl font-bold mb-6 text-center text-cyan-300 drop-shadow-lg">Explore Businesses</h1>
      <div className="relative w-full max-w-xl border border-gray-700 rounded-lg shadow-xl bg-gray-800 p-6 text-center flex flex-col items-center">
        <img
          src={investments[index].imageUrl}
          alt={investments[index].name}
          className="w-full h-52 object-cover rounded-md mb-4 shadow-lg"
        />
        <h2 className="text-2xl font-semibold text-white mb-2">{investments[index].name}</h2>
        <p className="text-cyan-400 text-lg font-medium">{investments[index].industry}</p>
        <p className="mt-2 text-gray-300">Founded: <span className="text-teal-200">{investments[index].founded}</span></p>
        <p className="text-gray-300">Quarterly Revenue: <span className="text-blue-400">{investments[index].quarterlyRevenue}</span></p>
        <p className="text-gray-300">Employees: <span className="text-blue-400">{investments[index].employees}</span></p>
        <p className="text-green-400 font-bold text-lg">Risk: {investments[index].riskAssessment}</p>
        <p className="text-yellow-300 font-bold text-lg mt-3">Asking Price: {investments[index].askingPrice}</p>
      </div>
      <div className="flex gap-4 mt-6">
        <button onClick={handleReject} className="bg-red-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-red-400">
          <XCircle size={20} /> Reject
        </button>
        <button onClick={handleInvest} className="bg-green-500 text-white p-3 rounded-full flex items-center justify-center hover:bg-green-400 shadow-lg">
          <img src="/images/money-icon.png" alt="Invest" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

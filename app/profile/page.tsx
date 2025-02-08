"use client";
import { investorProfile } from "@/lib/data";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-20">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-blue-900 text-white flex justify-between items-center p-5 shadow-lg z-10">
        <div className="text-2xl font-bold">InvestMatch</div>
        <div className="flex gap-5">
          <a href="/dashboard" className="hover:bg-white hover:text-blue-900 px-4 py-2 rounded-md">Dashboard</a>
          <a href="/explore" className="hover:bg-white hover:text-blue-900 px-4 py-2 rounded-md">Explore</a>
          <a href="/profile" className="hover:bg-white hover:text-blue-900 px-4 py-2 rounded-md">Profile</a>
        </div>
      </nav>
      
      {/* Profile Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-2xl mt-10 text-center">
        <img src={investorProfile.profileImage} alt="Investor" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
        <h2 className="text-2xl font-bold text-blue-900 mb-2">{investorProfile.name}</h2>
        <div className="text-left mt-4">
          <p className="text-gray-700"><span className="font-semibold text-blue-900">Email:</span> {investorProfile.email}</p>
          <p className="text-gray-700"><span className="font-semibold text-blue-900">LinkedIn:</span> <a href={`https://${investorProfile.linkedin}`} className="text-blue-500">{investorProfile.linkedin}</a></p>
          <p className="text-gray-700"><span className="font-semibold text-blue-900">Investment Range:</span> {investorProfile.maxInvestmentValue}</p>
          <p className="text-gray-700"><span className="font-semibold text-blue-900">Investor Type:</span> {investorProfile.investorType}</p>
        </div>
      </div>
    </div>
  );
}

"use client";
import { investorProfile } from "@/lib/data";

export default function ProfilePage() {
<<<<<<< Updated upstream
  return (
    <div className="h-screen flex justify-center items-center bg-blue-950 p-6">
      {/* Profile container */}
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-2xl z-10 flex flex-col items-center text-center">
        {/* Profile Picture */}
        <div className="relative mb-6">
          <img
            src="https://i.pinimg.com/736x/5c/34/e0/5c34e0df01f848f0efddaf85cf01a0c3.jpg"
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-white"
          />
        </div>

        {/* Name */}
        <h2 className="text-4xl font-bold text-blue-800 mb-4">{investorProfile.name}</h2>

        {/* Profile Details */}
        <div className="text-gray-700 text-lg space-y-4">
          <p><span className="font-semibold text-blue-800">Email:</span> {investorProfile.email}</p>
          <p><span className="font-semibold text-blue-800">Phone:</span> {investorProfile.phone}</p>
          <p>
            <span className="font-semibold text-blue-800">LinkedIn:</span>
            <a href={`https://${investorProfile.linkedin}`} className="text-blue-500 ml-1">
              {investorProfile.linkedin}
            </a>
          </p>
          <p><span className="font-semibold text-blue-800">Max Investment Value:</span> {investorProfile.maxInvestmentValue}</p>
          <p><span className="font-semibold text-blue-800">Investor Type:</span> {investorProfile.investorType}</p>
        </div>

        {/* Interested Markets Section */}
        <div className="mt-8 w-full">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Interested Markets</h3>
          <div className="text-gray-700 text-lg space-y-2">
            <p><span className="font-semibold text-blue-800">Clothing:</span> Investing in apparel brands with a strong focus on sustainability.</p>
            <p><span className="font-semibold text-blue-800">Healthcare:</span> Interested in companies advancing healthcare solutions and services.</p>
            <p><span className="font-semibold text-blue-800">Skincare:</span> Supporting innovative skincare products and natural solutions.</p>
            {/* Add more markets as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

=======
return (
<div className="h-screen flex justify-center items-center bg-blue-950 p-6">
{/* Profile container */}
<div className="bg-white p-3 rounded-3xl shadow-xl w-full max-w-2xl z-10 flex flex-col items-center text-center">
{/* Profile Picture */}
<div className="relative mb-6">
<img
src="https://i.pinimg.com/736x/5c/34/e0/5c34e0df01f848f0efddaf85cf01a0c3.jpg"
alt="Profile"
className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-white"
/>
</div>

{/* Name */}
<h2 className="text-4xl font-bold text-blue-800 mb-4">{investorProfile.name}</h2>

{/* Profile Details */}
<div className="text-gray-700 text-lg space-y-4">
<p><span className="font-semibold text-blue-800">Email:</span> {investorProfile.email}</p>
<p><span className="font-semibold text-blue-800">Phone:</span> {investorProfile.phone}</p>
<p>
<span className="font-semibold text-blue-800">LinkedIn:</span>
<a href={`https://${investorProfile.linkedin}`} className="text-blue-500 ml-1">
{investorProfile.linkedin}
</a>
</p>
<p><span className="font-semibold text-blue-800">Max Investment Value:</span> {investorProfile.maxInvestmentValue}</p>
<p><span className="font-semibold text-blue-800">Investor Type:</span> {investorProfile.investorType}</p>
</div>

{/* Interested Markets Section */}
<div className="mt-8 w-full">
<h3 className="text-2xl font-semibold text-blue-800 mb-4">Interested Markets</h3>
<div className="text-gray-700 text-lg space-y-2">
<p><span className="font-semibold text-blue-800">Clothing:</span> Investing in apparel brands with a strong focus on sustainability.</p>
<p><span className="font-semibold text-blue-800">Healthcare:</span> Interested in companies advancing healthcare solutions and services.</p>
<p><span className="font-semibold text-blue-800">Skincare:</span> Supporting innovative skincare products and natural solutions.</p>
{/* Add more markets as needed */}
</div>
</div>
</div>
</div>
);
}
>>>>>>> Stashed changes

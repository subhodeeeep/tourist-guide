'use client'
import { useState, useEffect } from "react";
import Logo from '../components/Logo'

export default function Home() {

  const [showLogo, setShowLogo] = useState(true);
  const [selectedState, setSelectedState] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedState') || "";
    }
    return "";
  });
  const [statesData, setStatesData] = useState(null);
  const [touristSpots, setTouristSpots] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 1000); // 1000 milliseconds = 1 second

    return () => clearTimeout(timer); // Clear the timer on unmount
  }, []);

  useEffect(() => {
    fetch(`/api/states`)
      .then((res) => res.json())
      .then((data) => {
        setStatesData(data);
      });
  }, []);

  useEffect(() => {
    if (selectedState && statesData) {
      setTouristSpots(statesData[selectedState] || []);
    }
  }, [selectedState, statesData]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedState', selectedState);
    }
  }, [selectedState]);

  if (showLogo) {
    return <Logo />; // Display the logo
  }

  if (statesData === null) {
    return <div className="p-4 text-white">Loading...</div>; // White text for loading
  }

  const handleCardClick = (name, location) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + " " + location)}`;
    window.open(url, "_blank", "noopener, noreferrer");
  };

  const indianStates = [
    { value: "", label: "Select a State", disabled: true }, // Added disabled property
    { value: "Andhra Pradesh", label: "Andhra Pradesh" },
    { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
    { value: "Assam", label: "Assam" },
    { value: "Bihar", label: "Bihar" },
    { value: "Chhattisgarh", label: "Chhattisgarh" },
    { value: "Goa", label: "Goa" },
    { value: "Gujarat", label: "Gujarat" },
    { value: "Haryana", label: "Haryana" },
    { value: "Himachal Pradesh", label: "Himachal Pradesh" },
    { value: "Jharkhand", label: "Jharkhand" },
    { value: "Karnataka", label: "🎈Karnataka" },
    { value: "Kerala", label: "Kerala" },
    { value: "Madhya Pradesh", label: "Madhya Pradesh" },
    { value: "Maharashtra", label: "🎈Maharashtra" },
    { value: "Manipur", label: "Manipur" },
    { value: "Meghalaya", label: "Meghalaya" },
    { value: "Mizoram", label: "Mizoram" },
    { value: "Nagaland", label: "Nagaland" },
    { value: "Odisha", label: "Odisha" },
    { value: "Punjab", label: "Punjab" },
    { value: "Rajasthan", label: "🎈Rajasthan" },
    { value: "Sikkim", label: "Sikkim" },
    { value: "Tamil Nadu", label: "Tamil Nadu" },
    { value: "Telangana", label: "Telangana" },
    { value: "Tripura", label: "Tripura" },
    { value: "Uttar Pradesh", label: "Uttar Pradesh" },
    { value: "Uttarakhand", label: "Uttarakhand" },
    { value: "West Bengal", label: "West Bengal" },
    { value: "Andaman and Nicobar Islands", label: "Andaman and Nicobar Islands" },
    { value: "Chandigarh", label: "Chandigarh" },
    { value: "Dadra and Nagar Haveli and Daman and Diu", label: "Dadra and Nagar Haveli and Daman and Diu" },
    { value: "Delhi", label: "Delhi" },
    { value: "Jammu and Kashmir", label: "Jammu and Kashmir" },
    { value: "Ladakh", label: "Ladakh" },
    { value: "Lakshadweep", label: "Lakshadweep" },
    { value: "Puducherry", label: "Puducherry" },
  ];

  return (
    <div className="relative min-h-screen bg-black">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          style={{
            width: '1000px',
            height: '1000px',
            borderRadius: '50%',
            background: 'rgba(68, 0, 128, 0.4)', // Purple with transparency
            filter: 'blur(100px)',
          }}
        />
      </div>
      <div className="relative max-w-200 mx-auto p-16 z-10 text-white min-h-250 bg-black"> {/* White text for content */}
        <h1 className="text-5xl font-bold mt-16 mb-24 sm:mb-6">Tourist Guide</h1>

        <select
          onChange={(e) => setSelectedState(e.target.value)}
          value={selectedState}
          className="border py-2 mb-16 sm:mb-6 w-full text-white" // Options are black
        >
          {indianStates.map((state) => (
            <option key={state.value} value={state.value} className={`{state.disabled ? "text-grey" : "text-white"} bg-black`} disabled={state.disabled}>
              {state.label}
            </option>
          ))}
        </select>

        {selectedState && (
          <div>
            <h2 className="text-md sm:text-2xl mb-6">
              Popular Tourist Spots in {selectedState}:
            </h2>
            <div className="flex flex-wrap -m-1 sm:-m-2 transition-transform">
              {touristSpots.length > 0 ? (
                touristSpots.map((spot, index) => (
                  <div
                    key={index}
                    className="m-1 p-2 sm:m-2 sm:p-4 border rounded-lg w-full sm:w-80 shadow-md cursor-pointer hover:translate-y-2 hover:scale-101 hover:opacity-90 duration-250"
                    onClick={() => handleCardClick(spot.name, spot.location)}
                  >
                    <h3 className="text-xl font-semibold mt-6 mb-3">{spot.name}</h3>
                    <img
                      src={spot.image}
                      alt={spot.name}
                      className="mb-3 sm:mb-2 rounded-md w-[350] h-[350px] object-cover"
                    />
                    <p className="mb-3">{spot.description}</p>
                    <small className="text-gray-400 ">
                      Location: {spot.location}
                    </small>
                  </div>
                ))
              ) : (
                <p className="p-4">Tourist spots for {selectedState} not yet loaded.</p>
              )}
            </div>
          </div>)}
        </div>
      </div>
  );
}
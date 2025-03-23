// app/state/[state]/page.js
'use client';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import StateDropdown from '@/components/StateDropdown';

export default function StatePage() {
  const { state } = useParams();
  const [touristSpots, setTouristSpots] = useState([]);
  const [statesData, setStatesData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/states`)
      .then((res) => res.json())
      .then((data) => {
        setStatesData(data);
      });
  }, []);

  useEffect(() => {
    if (state && statesData) {
      setTouristSpots(statesData[state] || []);
    }
  }, [state, statesData]);

  if (statesData === null) {
    return <div className="p-4 text-white">Loading...</div>;
  }

  const handleCardClick = (name) => {
    const spotId = name.replace(/\s+/g, '-').toLowerCase(); // Create a url friendly ID.
    router.push(`/spot/${spotId}`);
  };

  return (
    <div className="relative min-h-screen bg-black">
      <div className="relative max-w-200 mx-auto z-10 text-white min-h-250 bg-black">
      <StateDropdown />
        <h2 className="text-md sm:text-2xl mb-6">
          Popular Tourist Spots in {state}:
        </h2>
        <div className="flex flex-wrap -m-1 sm:-m-2 transition-transform">
          {touristSpots.length > 0 ? (
            touristSpots.map((spot, index) => (
              <div
                key={index}
                className="m-1 p-2 sm:m-2 sm:p-4 border rounded-lg w-full sm:w-80 shadow-md cursor-pointer hover:translate-y-2 hover:scale-101 hover:opacity-90 duration-250"
                onClick={() => handleCardClick(spot.name)}
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
            <p className="p-4">Tourist spots for {state} not yet loaded.</p>
          )}
        </div>
      </div>
    </div>
  );
}
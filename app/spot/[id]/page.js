// app/spot/[id]/page.js
'use client';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

const containerStyle = {
  width: '400px',
  height: '300px',
};

export default function SpotDetails() {
  const { id } = useParams();
  const [spot, setSpot] = useState(null);
  const [statesData, setStatesData] = useState(null);

  useEffect(() => {
    fetch(`/api/states`)
      .then((res) => res.json())
      .then((data) => {
        setStatesData(data);
      });
  },);

  useEffect(() => {
    if (statesData) {
      for (const state in statesData) {
        const foundSpot = statesData[state].find(
          (s) => s.name.replace(/\s+/g, '-').toLowerCase() === id
        );
        if (foundSpot) {
          setSpot(foundSpot);
          break;
        }
      }
    }
  }, [id, statesData]);

  if (!spot) {
    return <div className="p-4 text-white">Loading spot details...</div>;
  }
  function handleBookClick(){
    alert("booked")
  }

  // Assuming spot.location is in "latitude, longitude" format
  const [lat, lng] = spot.location.split(',').map(parseFloat);

  return (
    <div className="relative min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-4">{spot.name}</h1>
      <img src={spot.image} alt={spot.name} className="rounded-lg mb-4 h-100" />
      <p className="mb-4">{spot.description}</p>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Packages:</h2>
        <div className="flex space-x-4">
          <div className="border p-4 rounded cursor-pointer">
            <h3 className="font-semibold">Free</h3>
            <p>Basic access to the location.</p>
          </div>
          <div className="border p-4 rounded cursor-pointer">
            <h3 className="font-semibold">Cheap</h3>
            <p>Guided tour and entry fees.</p>
          </div>
          <div className="border p-4 rounded  cursor-pointer">
            <h3 className="font-semibold">Expensive</h3>
            <p>Private tour, meals, and accommodations.</p>
          </div>
        </div>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded"
      onClick={handleBookClick}>
        Book Now
      </button>
    </div>
  );
}
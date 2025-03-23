// app/page.js
'use client';
import { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import StateDropdown from '@/components/StateDropdown';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [showLogo, setShowLogo] = useState(true);
  const [randomSpots, setRandomSpots] = useState([]);
  const [statesData, setStatesData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    fetch(`/api/states`)
      .then((res) => res.json())
      .then((data) => {
        setStatesData(data);
        const allSpots = Object.values(data).flat(); // Flatten all spots into a single array
        const randomSpots = getRandomItems(allSpots, 3); // Select 3 random spots
        setRandomSpots(randomSpots);
      });
  }, []);

  const getRandomItems = (arr, n) => {
    let result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len) return arr;
    while (n--) {
      let x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  };

  const handleCardClick = (name) => {
    const spotId = name.replace(/\s+/g, '-').toLowerCase();
    router.push(`/spot/${spotId}`);
  };

  if (showLogo) {
    return <Logo />;
  }

  return (
    <div className="relative min-h-screen bg-black">
      <StateDropdown />
        <h2 className="text-md sm:text-2xl mb-6">Popular Places</h2>

        <div className="flex flex-wrap -m-1 sm:-m-2 transition-transform">
          {randomSpots.map((spot, index) => (
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
          ))}
        </div>
      </div>
  );
}
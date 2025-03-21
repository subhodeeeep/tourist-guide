// components/Logo.js
import Image from 'next/image';
import logo from '../public/images/appLogo.jpg'; // Replace with your logo path

export default function Logo({ onFadeOutComplete }) {
  const handleAnimationEnd = () => {
    if (onFadeOutComplete) {
      onFadeOutComplete();
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-black flex items-center justify-center z-50 fade-out"
      onAnimationEnd={handleAnimationEnd}
    >
      <Image src={logo} alt="App Logo" layout="fill" objectFit="cover" style={{ filter: 'invert(100%)' }}/>
    </div>
  );
}
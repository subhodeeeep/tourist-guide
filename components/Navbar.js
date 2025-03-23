// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black bg-blend-color-burn text-white flex gap-2">
      <Link href="/" className="flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7a2 2 0 113.414 3.414L6 10m9 8a2 2 0 11-3.414 3.414L9 16m9-8a2 2 0 11-3.414 3.414L9 16"
          />
        </svg>
        <span className='text-xs'>Home</span>
      </Link>
      <Link href="/history" className="flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 17v-2m3 2v-4m3 4v-2m3-8v-2M9 9v-2m3 2v-4m3 4v-2"
          />
        </svg>
        <span  className='text-xs'>History</span>
      </Link>
      <Link href="/help" className="flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
        <span  className='text-xs'>Help</span>
      </Link>
    </nav>
  );
}
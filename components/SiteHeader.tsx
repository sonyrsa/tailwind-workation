import { useState } from 'react';

const SiteHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="nav bg-gray-900">
      <div className="flex px-3 py-2 items-center text-gray-500 justify-between">
        <div className="flex items-center c ">
          <svg
            className="h-8 w-auto text-gray-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
          </svg>
          <p className="text-white pl-2">
            Work<span className="text-gray-500">action</span>
          </p>
        </div>
        <div className="flex">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="px-2 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>
      <nav className={`font-semibold text-white ${isOpen || 'hidden'}`}>
        <div className="flex flex-col px-2 py-5 border-b border-gray-800">
          <a href="#" className="block px-2 py-1 rounded-md hover:bg-gray-600">
            List your property
          </a>
          <a
            href="#"
            className="mt-2 px-2 py-1 block rounded-md hover:bg-gray-600"
          >
            Trips
          </a>
          <a
            href="#"
            className="mt-2 px-2 py-1 block rounded-md hover:bg-gray-600"
          >
            Messages
          </a>
        </div>
        <div className="py-5">
          <div className="px-3 flex items-center">
            <img
              src="/img/jonathan.jpg"
              alt=""
              className="rounded-full w-10 h-10 object-cover border-2 border-gray-600"
            />
            <span className="font-semibold text-gray-200 ml-4">
              Isla Schoger
            </span>
          </div>
          <div className="px-4 mt-5 flex flex-col text-gray-400">
            <a href="#" className="block hover:text-white">
              Account Settings
            </a>
            <a href="#" className="block hover:text-white mt-3">
              Support
            </a>
            <a href="#" className="block hover:text-white mt-3">
              Sign out
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;

import React from 'react';
import { Link } from 'react-router-dom';

const NavigointiPalkki = () => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <div>
        <h1 className="text-white text-2xl font-bold">Electric Prices</h1>
      </div>
      <div className="flex space-x-4">
        <Link to="/thisday" className="text-white hover:underline">
          This Day
        </Link>
        <Link to="/tomorrow" className="text-white hover:underline">
          Tomorrow
        </Link>
        <Link to="/search" className="text-white hover:underline">
          Search
        </Link>
      </div>
    </nav>
  );
};

export default NavigointiPalkki;
import React from 'react';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <div className="flex items-center justify-center">
        <div className="border-t-4 border-b-4 border-solid border-blue-600 w-16 h-16 border-t-transparent border-b-transparent rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-lg text-gold-500 font-semibold">Loading...</p>
    </div>
  );
}


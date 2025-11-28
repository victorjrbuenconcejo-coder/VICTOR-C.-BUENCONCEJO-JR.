
import React from 'react';

export const Header: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-6 sm:p-8 text-white text-center">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
        Learning Style Diagnostic Test
      </h1>
      <p className="mt-2 text-base md:text-lg text-cyan-100 max-w-2xl mx-auto">
        Discover how you learn best! Answer the questions below to get instant insight into your personal learning style.
      </p>
    </div>
  );
};

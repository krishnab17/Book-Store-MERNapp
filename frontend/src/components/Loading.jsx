import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-purple-600"></div>
      <span className="ml-4 text-purple-600 font-semibold text-lg">Loading...</span>
    </div>
  );
};

export default Loading;

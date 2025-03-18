import React from "react";

const StatCard = ({
  icon,
  title,
  value,
  trend,
  trendValue,
  trendDirection,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 mb-5 border-l-4 border-yellow-400 transition-transform hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-center justify-center w-12 h-12 bg-yellow-400 text-black rounded-lg mb-4">
        {icon}
      </div>
      <div className="text-gray-500 text-sm mb-1">{title}</div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div
        className={`text-xs font-medium ${
          trendDirection === "up" ? "text-green-600" : "text-red-600"
        }`}
      >
        <span className="inline-block mr-1">
          {trendDirection === "up" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          )}
        </span>
        {trendValue}
      </div>
    </div>
  );
};

export default StatCard;

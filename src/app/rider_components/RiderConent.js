
"use client";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function RiderContent() {
  const [rideCount, setRideCount] = useState(0);
  const maxRides = 20;

  // Sample current orders data
  const currentOrders = [
    {
      restaurant: "Pizza Hub",
      orderId: "ORD12345",
      address: "123 Street, City",
      phone: "+11234567890",
    },
    {
      restaurant: "Burger King",
      orderId: "ORD67890",
      address: "456 Avenue, City",
      phone: "+19876543210",
    },
    // Add more orders as needed
  ];

  // Simulate ride count animation
  useEffect(() => {
    const timer = setInterval(() => {
      if (rideCount < maxRides) {
        setRideCount((prev) => prev + 1);
      }
    }, 70);

    return () => clearInterval(timer);
  }, [rideCount]);

  // Chart data
  const chartData = {
    labels: Array.from({ length: rideCount }, (_, i) => i + 1),
    datasets: [
      {
        label: "Rides Completed",
        data: Array.from({ length: rideCount }, (_, i) => (i % 10) + 1),
        borderColor: "rgba(75, 192, 192, 0.6)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Orders Card */}
      <div className="p-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold">Orders</h2>
              <p className="text-2xl font-bold text-blue-500">25</p>
            </div>
            <span className="text-4xl text-blue-500">🛒</span>
          </div>
        </div>
      </div>

      {/* Rides Completed Card */}
      <div className="p-4">
        <div className="bg-white rounded-lg shadow-md p-6 relative">
          <div className="h-32">
            <Line
              data={chartData}
              options={{
                responsive: true,
                plugins: {
                  legend: { display: false },
                },
                scales: {
                  x: { display: false },
                  y: { display: false },
                },
              }}
            />
          </div>
          <div className="absolute top-6 left-6">
            <h2 className="text-lg font-bold">Rides Completed🔔</h2>
            <p className="text-2xl font-bold text-green-500">{rideCount}</p>
          </div>
          <span className="absolute top-6 right-6 text-4xl text-green-500">
            🚴
          </span>
        </div>
      </div>

      {/* Current Orders Section */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Current Orders</h2>
        <div className="space-y-4">
          {currentOrders.map((order, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-bold">{order.restaurant}</h3>
              <p className="text-sm">Order ID: {order.orderId}</p>
              <p className="text-sm">Address: {order.address}</p>
              <button className="text-green-500 mt-2">
                <span className="text-2xl">📞</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

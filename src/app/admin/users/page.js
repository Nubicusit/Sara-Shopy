"use client";
import { useState } from "react";
export default function UsersAdmin() {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isAddAgentModalOpen, setIsAddAgentModalOpen] = useState(false);
  
  
    const data = [
      {
        userId: "U12345",
        name: "John Doe",
        email: "johndoe@example.com",
        phoneNumber: "+1 123-456-7890",
        address: "123 Main St, New York, NY, 10001",
        totalOrders: 15,
        orderStatus: "Delivered",
        purchaseDetails: [
          { orderId: "O1001", item: "Laptop", price: "$1200" },
          { orderId: "O1002", item: "Mouse", price: "$25" },
        ],
      },
      {
        userId: "U12346",
        name: "Jane Smith",
        email: "janesmith@example.com",
        phoneNumber: "+1 234-567-8901",
        address: "456 Elm St, Los Angeles, CA, 90001",
        totalOrders: 8,
        orderStatus: "Pending",
        purchaseDetails: [
          { orderId: "O1003", item: "Phone", price: "$800" },
          { orderId: "O1004", item: "Headphones", price: "$50" },
        ],
      },
      {
        userId: "U12347",
        name: "Robert Johnson",
        email: "robertjohnson@example.com",
        phoneNumber: "+1 345-678-9012",
        address: "789 Pine St, Chicago, IL, 60601",
        totalOrders: 20,
        orderStatus: "Delivered",
        purchaseDetails: [
          { orderId: "O1003", item: "Phone", price: "$800" },
          { orderId: "O1004", item: "Headphones", price: "$50" },
        ],
      },
      {
        userId: "U12348",
        name: "Emily Davis",
        email: "emilydavis@example.com",
        phoneNumber: "+1 456-789-0123",
        address: "101 Maple Ave, Houston, TX, 77001",
        totalOrders: 12,
        orderStatus: "Canceled",
        purchaseDetails: [
          { orderId: "O1003", item: "Phone", price: "$800" },
          { orderId: "O1004", item: "Headphones", price: "$50" },
        ],
      },
      {
        userId: "U12349",
        name: "Michael Wilson",
        email: "michaelwilson@example.com",
        phoneNumber: "+1 567-890-1234",
        address: "202 Oak St, Phoenix, AZ, 85001",
        totalOrders: 5,
        orderStatus: "Processing",
        purchaseDetails: [
          { orderId: "O1003", item: "Phone", price: "$800" },
          { orderId: "O1004", item: "Headphones", price: "$50" },
        ],
      },
    ];
    const openModal = (user) => {
      setSelectedUser(user);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedUser(null);
    };
  
    const openAddAgentModal = () => {
      setIsAddAgentModalOpen(true);
    };
  
    const closeAddAgentModal = () => {
      setIsAddAgentModalOpen(false);
    };
  
    return (
      <div className="lg:ml-64 p-5">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={openAddAgentModal}
            className="mr-3 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            ADD
          </button>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  User Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Orders
                </th>
                <th scope="col" className="px-6 py-3">
                  Order Status
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  key={item.userId}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer"
                    onClick={() => openModal(item)}
                  >
                    {item.userId}
                  </th>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">{item.phoneNumber}</td>
                  <td className="px-6 py-4">{item.address}</td>
                  <td className="px-6 py-4">{item.totalOrders}</td>
                  <td className="px-6 py-4">{item.orderStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {isModalOpen && selectedUser && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded-lg shadow-lg w-1/3">
              <h2 className="text-lg font-bold mb-4">Purchase Details</h2>
              <ul>
                {selectedUser.purchaseDetails.map((detail) => (
                  <li key={detail.orderId} className="mb-2">
                    <strong>Order ID:</strong> {detail.orderId},{" "}
                    <strong>Item:</strong> {detail.item}, <strong>Price:</strong>{" "}
                    {detail.price}
                  </li>
                ))}
              </ul>
              <button
                onClick={closeModal}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        )}
  
        {isAddAgentModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded-lg shadow-lg w-1/3">
              <h2 className="text-lg font-bold mb-4">Add New Agent</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={closeAddAgentModal}
                    className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-yellow-500 text-white rounded-lg"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
  
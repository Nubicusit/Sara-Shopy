"use client";
export default function Orders() {
  const data = [
    {
      userId: "U12345",
      name: "John Doe",
      email: "johndoe@example.com",
      phoneNumber: "+1 123-456-7890",
      address: "123 Main St, New York, NY, 10001",
      totalOrders: 15,
      orderStatus: "Delivered",
    },
    {
      userId: "U12346",
      name: "Jane Smith",
      email: "janesmith@example.com",
      phoneNumber: "+1 234-567-8901",
      address: "456 Elm St, Los Angeles, CA, 90001",
      totalOrders: 8,
      orderStatus: "Pending",
    },
    {
      userId: "U12347",
      name: "Robert Johnson",
      email: "robertjohnson@example.com",
      phoneNumber: "+1 345-678-9012",
      address: "789 Pine St, Chicago, IL, 60601",
      totalOrders: 20,
      orderStatus: "Delivered",
    },
    {
      userId: "U12348",
      name: "Emily Davis",
      email: "emilydavis@example.com",
      phoneNumber: "+1 456-789-0123",
      address: "101 Maple Ave, Houston, TX, 77001",
      totalOrders: 12,
      orderStatus: "Canceled",
    },
    {
      userId: "U12349",
      name: "Michael Wilson",
      email: "michaelwilson@example.com",
      phoneNumber: "+1 567-890-1234",
      address: "202 Oak St, Phoenix, AZ, 85001",
      totalOrders: 5,
      orderStatus: "Processing",
    },
  ];

  return (
    <div className="lg:ml-64 p-5">
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
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
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
    </div>
  );
}

import Link from "next/link";

const RiderDrawer = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-opacity-50"
        onClick={onClose}
      ></div>

      {/* Drawer Content */}
      <div className="w-64 h-full bg-white shadow-lg">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-yellow-500">SARAS GROCERY</h2>
        </div>

        {/* Navigation Links */}
        <ul className="p-2">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <span className="mr-3">🛒</span>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <span className="mr-3">🛍️</span>
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link
              href="/orders"
              className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <span className="mr-3">📦</span>
              <span>Agents</span>
            </Link>
          </li>
          <li>
            <Link
              href="/customers"
              className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <span className="mr-3">👥</span>
              <span>Shop Owner</span>
            </Link>
          </li>
          <li>
            <Link
              href="/promotions"
              className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <span className="mr-3">🏷️</span>
              <span>Orders</span>
            </Link>
          </li>
          <li>
            <Link
              href="/promotions"
              className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <span className="mr-3">📜</span>
              <span>Order History</span>
            </Link>
          </li>
        </ul>

        {/* Reports Section */}
        <div className="p-2 mt-4 border-t border-gray-200">
          <h3 className="text-xs uppercase text-gray-500 px-3 py-2">Reports</h3>
          <ul>
            <li>
              <Link
                href="/analytics"
                className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <span className="mr-3">📊</span>
                <span>Financial Reports</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Settings Section */}
        <div className="p-2 mt-4 border-t border-gray-200">
          <h3 className="text-xs uppercase text-gray-500 px-3 py-2">
            Settings
          </h3>
          <ul>
            <li>
              <Link
                href="/store-settings"
                className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <span className="mr-3">🏪</span>
                <span>Store Settings</span>
              </Link>
            </li>
            <li>
              <Link
                href="/logout"
                className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <span className="mr-3">🚪</span>
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RiderDrawer;

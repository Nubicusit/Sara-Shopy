"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userType, setUserType] = useState("User");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors
    setSuccess(""); // Clear any previous success messages

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        {
          name,
          email,
          password,
          userType,
        }
      );

      // Handle successful signup
      console.log("Signup successful:", response.data);
      setSuccess("Account created successfully! Please log in.");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setUserType("User");
    } catch (err) {
      console.error("Signup failed:", err);
      setError(
        err.response?.data?.msg || "Failed to create account. Please try again."
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-white">
      <div className="w-full max-w-sm p-6">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <Image
            src="img/navbar/sara logo-02.svg"
            alt="Logo Sara shop"
            width={250}
            height={100}
            className="mx-auto mb-4"
          />
        </div>

        {/* Welcome Message */}
        <h2 className="text-2xl font-bold text-center mb-2">Create Account</h2>
        <p className="text-center text-gray-500 mb-6">
          Sign up to get started!
        </p>

        {/* Error Message */}
        {error && <p className="text-center text-red-500 mb-4">{error}</p>}

        {/* Success Message */}
        {success && (
          <p className="text-center text-green-500 mb-4">{success}</p>
        )}

        {/* Signup Form */}
        <form onSubmit={handleSubmit}>
          {/* Full Name Input */}
          <div className="mb-6">
            <label className="block relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaUserAlt />
              </span>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full py-2 pl-10 pr-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </label>
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <MdEmail />
              </span>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-2 pl-10 pr-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </label>
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <IoMdLock />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full py-2 pl-10 pr-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <span
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </label>
          </div>

          {/* Confirm Password Input */}
          <div className="mb-4">
            <label className="block relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <IoMdLock />
              </span>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full py-2 pl-10 pr-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <span
                onClick={toggleConfirmPasswordVisibility}
                style={{ cursor: "pointer" }}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </label>
          </div>

          {/* Account Type Selection */}
          <div className="flex justify-center mb-4">
            <p className="text-sm md:text-lg lg:text-sm font-bold">
              Select Account Type
            </p>
          </div>

          <div className="flex justify-center mb-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="userType"
                value="user"
                checked={userType === "User"}
                onChange={() => setUserType("User")}
                className="h-5 w-5 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-lg font-semibold">User</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer ml-2">
              <input
                type="radio"
                name="userType"
                value="agent"
                checked={userType === "Agent"}
                onChange={() => setUserType("Agent")}
                className="h-5 w-5 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-lg font-semibold">Agent</span>
            </label>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full py-2 mb-4 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition-all duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;

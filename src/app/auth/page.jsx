"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const endpoint = isLogin ? "/api/auth/login" : "/api/auth/signup";

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    console.log("AUTH RESULT:", result);

    if (!result.success) {
      setError(result.message);
      return;
    }

    // Clear form after successful signup
    if (!isLogin) {
      setFormData({
        name: "",
        email: "",
        password: "",
      });

      setIsLogin(true);
      return;
    }

    // Clear form after successful login
    setFormData({
      name: "",
      email: "",
      password: "",
    });

    router.push("/admin");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold">
          {isLogin ? "Login" : "Create Account"}
        </h1>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="mb-4 w-full rounded-md border p-3"
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="mb-4 w-full rounded-md border p-3"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="mb-4 w-full rounded-md border p-3"
          />

          {error && (
            <p className="mb-4 text-center text-sm font-medium text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 p-3 font-bold text-white hover:bg-blue-700"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        <p className="mt-5 text-center text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}

          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setError("");
              setFormData({
                name: "",
                email: "",
                password: "",
              });
            }}
            className="ml-2 font-semibold text-blue-600 hover:underline"
          >
            {isLogin ? "Signup" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

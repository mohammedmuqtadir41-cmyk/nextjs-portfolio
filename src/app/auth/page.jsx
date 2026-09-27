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
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-5 py-10 text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="portfolio-grid absolute inset-0 opacity-30" />

        <div className="portfolio-glow left-[-250px] top-[100px]" />

        <div className="portfolio-glow bottom-[10%] right-[-250px]" />
      </div>

      {/* Auth Card */}
      <div
        className="
          w-full
          max-w-md
          rounded-2xl
          border
          border-white/10
          bg-white/[0.04]
          p-7
          shadow-[0_20px_80px_rgba(0,0,0,0.45)]
          backdrop-blur-xl
          sm:p-9
        "
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#0DB760]" />

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
              Admin Access
            </span>

            <span className="h-[2px] w-8 bg-[#0DB760]" />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            {isLogin
              ? "Sign in to access your portfolio dashboard."
              : "Create an account to manage your portfolio."}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          {!isLogin && (
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-zinc-300"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-4
                  py-3
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-zinc-600
                  transition-all
                  duration-200
                  focus:border-[#0DB760]/60
                  focus:bg-white/[0.06]
                  focus:ring-2
                  focus:ring-[#0DB760]/10
                "
              />
            </div>
          )}

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-zinc-300"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-white/[0.04]
                px-4
                py-3
                text-sm
                text-white
                outline-none
                placeholder:text-zinc-600
                transition-all
                duration-200
                focus:border-[#0DB760]/60
                focus:bg-white/[0.06]
                focus:ring-2
                focus:ring-[#0DB760]/10
              "
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-zinc-300"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-white/[0.04]
                px-4
                py-3
                text-sm
                text-white
                outline-none
                placeholder:text-zinc-600
                transition-all
                duration-200
                focus:border-[#0DB760]/60
                focus:bg-white/[0.06]
                focus:ring-2
                focus:ring-[#0DB760]/10
              "
            />
          </div>

          {/* Error */}
          {error && (
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3">
              <p className="text-center text-sm font-medium text-red-400">
                {error}
              </p>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="
              mt-2
              w-full
              rounded-xl
              bg-[#0DB760]
              px-4
              py-3
              text-sm
              font-bold
              text-black
              transition-all
              duration-300
              hover:bg-[#19D879]
              hover:shadow-[0_0_30px_rgba(13,183,96,0.25)]
              active:scale-[0.98]
            "
          >
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        {/* Switch */}
        <div className="mt-7 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-zinc-500">
            {isLogin ? "Don't have an account?" : "Already have an account?"}

            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setError("");

                setFormData({
                  name: "",
                  email: "",
                  password: "",
                });
              }}
              className="
                ml-2
                font-semibold
                text-[#19D879]
                transition-colors
                hover:text-[#0DB760]
                hover:underline
              "
            >
              {isLogin ? "Signup" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </main>
  );
}

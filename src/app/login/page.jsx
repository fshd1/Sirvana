"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setSuccess("");
      setLoading(true);

      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error || !result?.ok) {
        setError("ایمیل یا رمز عبور اشتباه است");
        return;
      }

      setSuccess("ورود شما موفقیت آمیز بود");
    } catch (error) {
      setError("خطایی رخ داده دوباره تلاش کنید");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-4 flex flex-col gap-4"
      >
        <input
          className="bg-surface p-3 text-foreground"
          type="email"
          placeholder="ایمیل خود را وارد کنید"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="bg-surface p-3 text-foreground"
          type="password"
          placeholder="رمز خود را وارد کنید"
          required
          autoComplete="current-password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
        />

        <button
          disabled={loading}
          type="submit"
          className="bg-primary p-2 rounded-lg"
        >
          {loading ? "درحال ورود ..." : "ورود"}
        </button>
      </form>

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
    </div>
  );
}

export default Login;

// 2 inputs for email & pass
// 2 useState
// handlesubmit w/ e.preventDefault
// signIn in tryCatch
// notification
// useState for loading

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaApple } from "react-icons/fa";

export default function LoginPage({ onSignUpClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4" style={{
      background: "radial-gradient(circle at 70% 10%, #ff6600 0%, #d10a8a 60%, #2e08cf 100%)"
    }}>
      <div className="w-full max-w-md bg-black/40 rounded-2xl p-8 shadow-xl flex flex-col items-center">
        <h1 className="text-white text-3xl font-bold mb-2">Log In</h1>
        <p className="text-gray-200 mb-8 text-center">Welcome back! Log in to your account.</p>
        <form className="w-full flex flex-col gap-4">
          <div className="relative">
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full py-3 pl-10 pr-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" stroke="none"/><path d="M22 6l-10 7L2 6" /></svg>
            </span>
          </div>
          <div className="relative">
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full py-3 pl-10 pr-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><circle cx="12" cy="8" r="1" /></svg>
            </span>
          </div>
          <div className="flex justify-end mb-2">
            <button type="button" className="text-gray-300 text-xs hover:underline">Forgot Password?</button>
          </div>
          <button type="submit" className="w-full py-3 mt-2 rounded-lg font-semibold text-lg bg-gradient-to-r from-orange-400 via-pink-600 to-indigo-700 text-white shadow-lg hover:opacity-90 transition">Log In</button>
        </form>
        <div className="flex items-center w-full my-6">
          <div className="flex-grow h-px bg-white/20" />
          <span className="mx-3 text-gray-300 text-sm">Or log in with</span>
          <div className="flex-grow h-px bg-white/20" />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <button className="flex items-center gap-3 w-full py-2 px-4 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition">
            <FcGoogle className="text-xl" /> Log in with Google
          </button>
          <button className="flex items-center gap-3 w-full py-2 px-4 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition">
            <FaFacebookF className="text-xl text-blue-500" /> Log in with Facebook
          </button>
          <button className="flex items-center gap-3 w-full py-2 px-4 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition">
            <FaApple className="text-xl text-gray-200" /> Log in with Apple
          </button>
        </div>
        <div className="mt-6 text-gray-300 text-sm text-center">
          Don't have an account?{' '}
          <button type="button" className="text-yellow-300 hover:underline font-semibold" onClick={onSignUpClick}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

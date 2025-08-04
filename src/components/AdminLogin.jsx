// File: /src/components/AdminLogin.jsx import React, { useState } from "react"; import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; import { app } from "../firebase"; import { useNavigate } from "react-router-dom";

export default function AdminLogin() { const [email, setEmail] = useState(""); const [password, setPassword] = useState(""); const [error, setError] = useState(null); const navigate = useNavigate();

const handleLogin = async (e) => { e.preventDefault(); const auth = getAuth(app); try { await signInWithEmailAndPassword(auth, email, password); navigate("/admin"); } catch (err) { setError("Email atau password salah!"); } };

return ( <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-800 via-purple-800 to-gray-900 text-white px-4"> <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-md"> <h2 className="text-2xl font-bold mb-6 text-center">🔐 Login Admin</h2> {error && <p className="text-red-400 text-sm mb-4 text-center">{error}</p>} <form onSubmit={handleLogin} className="space-y-4"> <div> <label className="block mb-1">Email</label> <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500" required /> </div> <div> <label className="block mb-1">Password</label> <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500" required /> </div> <button
type="submit"
className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-lg"
> 🚀 Masuk </button> </form> </div> </div> ); }


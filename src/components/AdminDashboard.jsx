// File: /src/components/AdminDashboard.jsx import React, { useEffect, useState } from "react"; import { getFirestore, collection, getDocs, updateDoc, doc, } from "firebase/firestore"; import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"; import { app } from "../firebase"; import { useNavigate } from "react-router-dom";

export default function AdminDashboard() { const [orders, setOrders] = useState([]); const [loading, setLoading] = useState(true); const [admin, setAdmin] = useState(null); const navigate = useNavigate();

useEffect(() => { const auth = getAuth(app); const unsubscribe = onAuthStateChanged(auth, (user) => { if (user) { setAdmin(user); fetchOrders(); } else { navigate("/admin-login"); } }); return () => unsubscribe(); }, []);

const fetchOrders = async () => { const db = getFirestore(app); const querySnapshot = await getDocs(collection(db, "orders")); const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })); setOrders(data); setLoading(false); };

const verifyPayment = async (id) => { const db = getFirestore(app); const orderRef = doc(db, "orders", id); await updateDoc(orderRef, { status: "terverifikasi" }); fetchOrders(); };

const handleLogout = async () => { const auth = getAuth(app); await signOut(auth); navigate("/admin-login"); };

if (!admin) return null; if (loading) return <p className="text-center text-white">⏳ Loading data...</p>;

return ( <div className="p-6 max-w-5xl mx-auto text-white"> <div className="flex justify-between items-center mb-6"> <h1 className="text-3xl font-bold">📋 Dashboard Admin</h1> <button
onClick={handleLogout}
className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full"
> 🚪 Logout </button> </div>

<div className="space-y-4">
    {orders.map((order) => (
      <div key={order.id} className="bg-gray-800 p-4 rounded-xl shadow-md">
        <p>
          <strong>Nama:</strong> {order.nama}
        </p>
        <p>
          <strong>Kelas:</strong> {order.kelas}
        </p>
        <p>
          <strong>Topik:</strong> {order.topic}
        </p>
        <p>
          <strong>Jenis Tugas:</strong> {order.taskType}
        </p>
        <p>
          <strong>Status:</strong>{" "}
          <span
            className={`font-bold ${
              order.status === "terverifikasi"
                ? "text-green-400"
                : "text-yellow-400"
            }`}
          >
            {order.status}
          </span>
        </p>
        <a
          href={order.buktiURL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline block my-2"
        >
          📎 Lihat Bukti Pembayaran
        </a>
        {order.status !== "terverifikasi" && (
          <button
            onClick={() => verifyPayment(order.id)}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full mt-2"
          >
            ✅ Verifikasi Pembayaran
          </button>
        )}
      </div>
    ))}
  </div>
</div>

); }


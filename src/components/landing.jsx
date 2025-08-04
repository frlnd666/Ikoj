// File: /Landing.jsx import React from "react"; import { Button } from "@/components/ui/button"; import { useNavigate } from "react-router-dom";

export default function Landing() { const navigate = useNavigate();

return ( <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 text-white px-6 py-12"> <div className="max-w-4xl mx-auto text-center space-y-8"> <h1 className="text-4xl md:text-6xl font-extrabold leading-tight"> Tugas Sekolah? <span className="text-pink-500">Santuy Aja!</span> </h1> <p className="text-lg md:text-xl text-gray-300"> Kami bantuin bikin esai, rangkuman, sampai jawaban soal — cuma modal klik! Ga ribet, ga pusing, tinggal duduk manis 😎 </p> <Button className="text-lg px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-full" onClick={() => navigate("/form")} > 🚀 Mulai Isi Tugas Sekarang </Button>

<section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold mb-2">📚 Dari SD Sampai SMK</h3>
        <p>Gak peduli kamu kelas 3 SD atau anak teknik SMK — AI kita paham semua!</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold mb-2">⚡ Ngebut, Cepat Jadi</h3>
        <p>1 menit langsung dapet hasil. Ga pake nungguin kayak nungguin chat doi.</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold mb-2">💯 Anti Ngasal</h3>
        <p>Dibuat pake AI canggih. Gaya bahasa disesuaikan sama jenjang kamu. Keren, kan?</p>
      </div>
    </section>

    <div className="mt-16 text-sm text-gray-500">© 2025 BelajarCerdas.AI - Dibuat oleh pejuang deadline 🤙</div>
  </div>
</main>

); }


// File: /src/components/TaskForm.jsx import React, { useState } from "react";

export default function TaskForm({ onResult }) { const [topic, setTopic] = useState(""); const [gradeLevel, setGradeLevel] = useState("smp"); const [taskType, setTaskType] = useState("esai"); const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => { e.preventDefault(); setLoading(true); try { const response = await fetch("/api/generate", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ topic, gradeLevel, taskType }) }); const data = await response.json(); onResult(data.result); } catch (err) { console.error("Gagal generate tugas:", err); onResult("Terjadi kesalahan saat menghubungi AI."); } finally { setLoading(false); } };

return ( <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto"> <input className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400" placeholder="Contoh: Jelaskan proses fotosintesis" value={topic} onChange={(e) => setTopic(e.target.value)} required />

<select
    className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white"
    value={gradeLevel}
    onChange={(e) => setGradeLevel(e.target.value)}
  >
    <option value="sd">SD</option>
    <option value="smp">SMP</option>
    <option value="sma">SMA</option>
    <option value="smk">SMK</option>
  </select>

  <select
    className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white"
    value={taskType}
    onChange={(e) => setTaskType(e.target.value)}
  >
    <option value="esai">Esai</option>
    <option value="rangkuman">Rangkuman</option>
    <option value="jawaban">Jawaban Soal</option>
  </select>

  <button
    type="submit"
    className="bg-pink-600 hover:bg-pink-700 px-6 py-2 rounded-full text-white text-lg w-full"
    disabled={loading}
  >
    {loading ? "⏳ Sedang diproses..." : "🚀 Generate Tugas Sekarang"}
  </button>
</form>

); }


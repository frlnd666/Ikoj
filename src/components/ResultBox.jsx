// File: /src/components/ResultBox.jsx import React from "react";

export default function ResultBox({ result }) { return ( <section className="mt-6 max-w-3xl mx-auto bg-gray-800 p-6 rounded-xl shadow-lg"> <h2 className="text-2xl font-semibold text-pink-400 mb-4">🎉 Hasil Tugas Kamu</h2> <div className="whitespace-pre-wrap text-gray-100 leading-relaxed"> {result} </div> </section> ); }


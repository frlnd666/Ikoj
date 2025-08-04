import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Tugas App</h1>
      <p className="text-lg mb-6">Solusi mudah untuk tugas sekolahmu!</p>
      <Link to="/task-form" className="bg-blue-500 text-white px-6 py-3 rounded-lg">
        Mulai Isi Tugas
      </Link>
    </div>
  );
}

export default Landing;

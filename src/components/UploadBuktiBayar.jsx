// File: /src/components/UploadBuktiBayar.jsx import React, { useState } from "react"; import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"; import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore"; import { app } from "../firebase";

export default function UploadBuktiBayar({ orderData }) { const [file, setFile] = useState(null); const [uploading, setUploading] = useState(false);

const handleUpload = async () => { if (!file) return alert("Pilih file dulu bro!"); setUploading(true); const storage = getStorage(app); const storageRef = ref(storage, `bukti/${Date.now()}-${file.name}`);

try {
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);

  const db = getFirestore(app);
  await addDoc(collection(db, "orders"), {
    ...orderData,
    buktiURL: url,
    createdAt: serverTimestamp(),
    status: "menunggu verifikasi"
  });

  alert("Upload & penyimpanan data berhasil!");
} catch (err) {
  console.error("Gagal upload atau simpan:", err);
  alert("Gagal upload bukti, coba lagi.");
} finally {
  setUploading(false);
}

};

return ( <div className="mt-6 bg-gray-800 p-4 rounded-xl shadow-md"> <label className="block text-pink-400 mb-2 font-semibold">📎 Upload Bukti Pembayaran</label> <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} className="mb-4 text-white" /> <button
onClick={handleUpload}
disabled={uploading}
className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-full disabled:opacity-50"
> {uploading ? "Uploading..." : "Upload Sekarang"} </button> </div> ); }


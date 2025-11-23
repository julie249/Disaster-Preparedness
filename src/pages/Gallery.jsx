import React, { useState } from "react";
import { galleryImages } from "../data/sampleData";
import Modal from "../components/Modal";

export default function Gallery(){
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold">Gallery</h2>
      <p className="text-slate-600 mt-2">Photos from drills & events.</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
        {galleryImages.map((src, i)=>(
          <button key={i} onClick={()=>{setActiveIdx(i); setOpen(true);}} className="block">
            <img src={src} alt={`img-${i}`} className="w-full h-36 object-cover rounded"/>
          </button>
        ))}
      </div>

      <Modal open={open} onClose={()=>setOpen(false)} title="Photo">
        <img src={galleryImages[activeIdx]} alt="active" className="w-full rounded" />
      </Modal>
    </div>
  );
}

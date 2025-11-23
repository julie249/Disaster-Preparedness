import React from "react";

export default function Footer(){
  return (
    <footer className="bg-black border-t mt-10">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="text-sm text-red-500">© {new Date().getFullYear()} Disaster Preparedness Education</div>
        <div className="text-sm text-red-500">Built for schools & colleges • disasterready@lpu.in</div>
      </div>
    </footer>
  );
}

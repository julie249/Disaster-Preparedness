import React from "react";
import { Link } from "react-router-dom";

export default function Text(){
  return (
    <section className="bg-gradient from-sky-50 to-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-red-500"><span className="italic">Prepare Respond Recover</span></h1>
          <p className="mt-4 text-slate-600  font-semibold">A complete disaster preparedness & response education system tailored for schools and colleges — modules, drills, resources, and action-plans.</p>
          <div className="mt-6 flex gap-3">
            <Link to="/modules" className="px-4 py-2 bg-rose-500 text-white rounded-md">Explore Modules</Link>
            <Link to="/emergency" className="px-4 py-2 border rounded-md">Emergency Plan</Link>
          </div>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1519232730744-7b331cd1c462?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGlzYXN0ZXIlMjBtYW5hZ2VtZW50JTIwdGVhbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" alt="hero" className="w-full rounded-4xl shadow" />
        </div>
      </div>
    </section>
  );
}

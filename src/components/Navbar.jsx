import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {TriangleAlert} from "lucide-react"

export default function Navbar(){
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-red-500 shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md  from-sky-600 flex items-center justify-center text-white font-bold"><span className="w-full"><TriangleAlert /></span></div>
          <div>
            <div className="font-semibold">DiSaStEr ReAdY</div>
            <div className="text-xs text-slate-500">Schools & Colleges</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={({isActive}) => navClass(isActive)}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => navClass(isActive)}>About</NavLink>
          <NavLink to="/disasters" className={({isActive}) => navClass(isActive)}>Disasters</NavLink>
          <NavLink to="/emergency" className={({isActive}) => navClass(isActive)}>Emergency</NavLink>
          <NavLink to="/modules" className={({isActive}) => navClass(isActive)}>Modules</NavLink>
          <NavLink to="/resources" className={({isActive}) => navClass(isActive)}>Resources</NavLink>
          <NavLink to="/gallery" className={({isActive}) => navClass(isActive)}>Gallery</NavLink>
          <NavLink to="/faq" className={({isActive}) => navClass(isActive)}>FAQ</NavLink>
          <NavLink to="/contact" className={({isActive}) => navClass(isActive)}>Contact</NavLink>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="px-3 py-2 rounded-md bg-slate-100">
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col gap-1 p-3 container mx-auto">
            <NavLink to="/" onClick={()=>setOpen(false)} className={({isActive})=>navClass(isActive)}>Home</NavLink>
            <NavLink to="/about" onClick={()=>setOpen(false)} className={({isActive})=>navClass(isActive)}>About</NavLink>
            <NavLink to="/disasters" onClick={()=>setOpen(false)} className={({isActive})=>navClass(isActive)}>Disasters</NavLink>
            <NavLink to="/emergency" onClick={()=>setOpen(false)} className={({isActive})=>navClass(isActive)}>Emergency</NavLink>
            <NavLink to="/modules" onClick={()=>setOpen(false)} className={({isActive})=>navClass(isActive)}>Modules</NavLink>
            <NavLink to="/resources" onClick={()=>setOpen(false)} className={({isActive})=>navClass(isActive)}>Resources</NavLink>
            <NavLink to="/gallery" onClick={()=>setOpen(false)} className={({isActive})=>navClass(isActive)}>Gallery</NavLink>
            <NavLink to="/faq" onClick={()=>setOpen(false)} className={({isActive})=>navClass(isActive)}>FAQ</NavLink>
            <NavLink to="/contact" onClick={()=>setOpen(false)} className={({isActive})=>navClass(isActive)}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}

function navClass(isActive){
  return `px-3 py-2 rounded text-sm ${isActive ? "bg-sky-50 text-sky-600 font-semibold" : "text-slate-700 hover:bg-slate-50"}`;
}

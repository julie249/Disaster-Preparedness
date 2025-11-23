import React, { useState } from "react";

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''});
  const [status, setStatus] = useState(null);

  function handleSubmit(e){
    e.preventDefault();
    if(!form.name || !form.email || !form.message){
      setStatus({type:'error', text:'Please fill all fields.'});
      return;
    }
    // fake send
    setStatus({type:'success', text:'Message sent (demo).'});
    setForm({name:'', email:'', message:''});
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <p className="text-slate-600 mt-2">For support or partnership, write to us.</p>

      <form onSubmit={handleSubmit} className="mt-6 max-w-lg">
        <label className="block">
          <span className="text-sm">Name</span>
          <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="w-full mt-1 p-2 border rounded" />
        </label>

        <label className="block mt-3">
          <span className="text-sm">Email</span>
          <input type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className="w-full mt-1 p-2 border rounded" />
        </label>

        <label className="block mt-3">
          <span className="text-sm">Message</span>
          <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} className="w-full mt-1 p-2 border rounded" rows={5} />
        </label>

        <div className="mt-4 flex items-center gap-3">
          <button className="px-4 py-2 bg-sky-600 text-white rounded">Send</button>
          {status && <div className={status.type === 'success' ? 'text-green-600' : 'text-red-600'}>{status.text}</div>}
        </div>
      </form>
    </div>
  );
}

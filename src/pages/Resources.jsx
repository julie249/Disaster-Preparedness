import React, { useState } from "react";
import { resources } from "../data/sampleData";

export default function Resources(){
  const [query, setQuery] = useState("");
  const filtered = resources.filter(r => r.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold">Resources & Downloads</h2>
      <p className="text-slate-600 mt-2">Download checklists, posters and templates.</p>

      <div className="mt-4">
        <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search resources..." className="border rounded px-3 py-2 w-full md:w-1/2" />
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {filtered.map(r => (
          <div key={r.id} className="bg-white p-4 rounded shadow flex justify-between items-center">
            <div>
              <div className="font-medium">{r.title}</div>
              <div className="text-sm text-slate-500">Format: PDF</div>
            </div>
            <div>
              <a href={r.url} className="px-3 py-1 bg-sky-600 text-white rounded">Download</a>
            </div>
          </div>
        ))}
        {filtered.length === 0 && <div className="text-slate-600">No resources found</div>}
      </div>
    </div>
  );
}

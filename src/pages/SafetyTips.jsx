import React from "react";

const tips = [
  "Keep exits clear and marked.",
  "Store hazardous materials securely in locked cabinets.",
  "Keep up-to-date contact lists for students & staff.",
  "Practice drop-cover-hold for earthquakes.",
  "Designate and mark assembly points clearly."
];

export default function SafetyTips(){
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold">Safety Tips</h2>
      <p className="text-slate-600 mt-2">Practical safety measures for everyday school safety.</p>

      <ul className="mt-4 grid md:grid-cols-2 gap-3">
        {tips.map((t,i)=>(
          <li key={i} className="bg-white p-4 rounded shadow text-slate-700 flex items-start gap-3">
            <div className="text-sky-600 font-semibold">{i+1}.</div>
            <div>{t}</div>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <h3 className="font-semibold">Classroom Checklist</h3>
        <ul className="list-disc ml-6 mt-2 text-slate-600">
          <li>Clear aisle and exit paths</li>
          <li>Secure heavy furniture to walls</li>
          <li>Label first aid kits & extinguisher locations</li>
        </ul>
      </div>
    </div>
  );
}

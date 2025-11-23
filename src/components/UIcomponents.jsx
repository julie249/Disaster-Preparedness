import React, { useState } from "react";

export default function Accordion({items}){
  const [openId, setOpenId] = useState(null);
  return (
    <div className="space-y-2">
      {items.map(item => (
        <div key={item.id} className="bg-white rounded-md border">
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="w-full text-left px-4 py-3 flex justify-between items-center"
          >
            <div>
              <div className="font-medium">{item.title}</div>
              <div className="text-sm text-slate-500">{item.summary}</div>
            </div>
            <div className="text-slate-400">{openId === item.id ? "" : "+"}</div>
          </button>
          {openId === item.id && (
            <div className="px-4 pb-4 text-slate-700">{item.details}</div>
          )}
        </div>
      ))}
    </div>
  );
}

import React, { useState } from "react";
import { modules } from "../data/sampleData";
import Modal from "../components/Modal";


export default function Modules() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(modules.map((m) => m.category))];

  const filteredModules = modules.filter((m) => {
    const matchesSearch = m.title.toLowerCase();
    const matchesCategory = filter === "All" || m.category === filter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-10">

      {/* Header */}
      <div className="bg-red-500 text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold flex items-center gap-3">
           Training Modules & Drills
        </h2>
        <p className="mt-2 text-purple-100">
          Browse safety modules, view resources, schedule drills and track progress.
        </p>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-4">
        <input
          type="text"
          placeholder="Search modules..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 border border-slate-300 rounded-lg px-4 py-2"
        />

        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-1 rounded-full border transition
              ${filter === c ? "bg-red-500 text-white" : "text-red-500 border-red-600 bg-white"}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Modules List */}
      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {filteredModules.map((m) => (
          <div
            key={m.id}
            className="bg-white rounded-xl shadow hover:shadow-lg hover:scale-[1.03] transition p-5"
          >
            <img
              src={"m.thumbnail"}
              alt={m.title}
              className="h-40 w-full object-cover rounded-lg shadow"
            />

            <h3 className="font-bold text-lg mt-4 flex items-center gap-2">
               {m.title}
            </h3>

            {/* Difficulty Badge */}
            <span
              className={`inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full
              ${
                m.level === "Beginner"
                  ? "bg-green-100 text-green-700"
                  : m.level === "Intermediate"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
              }
            `}
            >
              {m.level} Level
            </span>

            <p className="text-sm text-slate-600 mt-3">{m.description}</p>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1 text-slate-600">
                <span>Progress</span>
                <span>{m.progress}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className="bg-yellow-400 h-2 rounded-full"
                  style={{ width: `${m.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-5 flex gap-3">
              <button
                onClick={() => {
                  setActive(m);
                  setOpen(true);
                }}
                className="px-3 py-2 bg-red-600 text-white rounded hover:scale-105 transition"
              >
                Open
              </button>
              <button className="px-3 py-2 border rounded flex items-center gap-2 hover:scale-105 transition">
                 Schedule Drill
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Content */}
      <Modal open={open} onClose={() => setOpen(false)} title={active?.title}>
        {active && (
          <div className="space-y-5">
            <p className="text-slate-700">{active.description}</p>

            {/* Resource Links */}
            <div>
              <h4 className="font-semibold">Resources</h4>
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-1 mt-2">
                {active.resources?.map((r, i) => (
                  <li key={i}>
                    <a
                      href={r.link}
                      className="text-indigo-600 underline"
                      target="_blank"
                    >
                      {r.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lessons */}
            <div>
              <h4 className="font-semibold">Lessons</h4>
              <ul className="mt-2 space-y-1 text-sm">
                {active.lessons?.map((l, i) => (
                  <li
                    key={i}
                    className="p-2 bg-slate-50 rounded border hover:bg-slate-100 transition"
                  >
                    📘 {l}
                  </li>
                ))}
              </ul>
            </div>

            {/* Drill Button */}
            <div className="mt-4 flex gap-3">
              <button
                onClick={() => alert("Drill logged!")}
                className="px-4 py-2 bg-emerald-600 text-white rounded hover:scale-105 transition"
              >
                Log Drill
              </button>

              <button
                onClick={() => alert("Starting module player...")}
                className="px-4 py-2 bg-sky-600 text-white rounded flex items-center gap-2 hover:scale-105 transition"
              >
                Start Module
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

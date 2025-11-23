import React, { useState } from "react";
import Accordion from "../components/UIcomponents";
import { disasterTypes } from "../data/sampleData";

export default function Disasters() {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  // Extract unique tags
  const allTags = ["All", ...new Set(disasterTypes.map((d) => d.type))];

  const filtered = disasterTypes.filter((d) => {
    const matchesSearch = d.title.toLowerCase();
    const matchesTag = selectedTag === "All" ;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="container mx-auto px-6 py-10">

      {/* Page Header Banner */}
      <div className=" bg-red-500 text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold">Disaster Types & Guidance</h2>
        <p className="mt-2 text-blue-100">
          Learn about different disasters, risks involved, and step-by-step actions to stay safe.
        </p>
      </div>

      {/* Search + Tag Filter */}
      <div className="mt-8 flex flex-col md:flex-row gap-4 items-center justify-between">
        <input
          type="text"
          placeholder="Search disaster type..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 border border-slate-300 rounded-lg px-4 py-2"
        />

        <div className="flex items-center gap-2 flex-wrap">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-1 rounded-full text-sm border transition 
                ${selectedTag === tag ? "bg-red-500 text-white" : "bg-white border-red-600 text-sky-600"}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion Section */}
      <div className="mt-10">
        <Accordion items={filtered} />
      </div>

      {/* Cards Section */}
      <section className="mt-12 grid md:grid-cols-3 gap-8">
        {filtered.map((d) => (
          <div
            key={d.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition hover:scale-[1.03] overflow-hidden"
          >
            <img src={d.img} alt={d.title} className="h-44 w-full object-cover" />

            <div className="p-5">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">{d.title}</h3>

                {/* Severity Badge */}
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full 
                    ${
                      d.severity === "High"
                        ? "bg-red-100 text-red-600"
                        : d.severity === "Medium"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-500"
                    }`}
                >
                  {d.severity} Risk
                </span>
              </div>

              <p className="text-sm text-slate-600 mt-2">{d.summary}</p>

              <details className="mt-4 text-sm">
                <summary className="cursor-pointer text-red-500">Read full guidance</summary>
                <div className="mt-2 text-slate-700">{d.details}</div>
              </details>
            </div>
          </div>
        ))}
      </section>

      {/* Before / During / After Section */}
      <section className="mt-16">
        <h3 className="text-2xl font-bold text-slate-800">General Safety Guidelines</h3>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <h4 className="font-semibold text-blue-700">Before a Disaster</h4>
            <ul className="mt-3 text-sm text-slate-700 list-disc ml-5 space-y-1">
              <li>Identify safe zones at home & school.</li>
              <li>Prepare an emergency kit.</li>
              <li>Practice evacuation routines.</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg shadow">
            <h4 className="font-semibold text-yellow-700">During a Disaster</h4>
            <ul className="mt-3 text-sm text-slate-700 list-disc ml-5 space-y-1">
              <li>Stay calm and follow instructions.</li>
              <li>Use safe evacuation routes.</li>
              <li>Avoid dangerous areas.</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg shadow">
            <h4 className="font-semibold text-green-700">After a Disaster</h4>
            <ul className="mt-3 text-sm text-slate-700 list-disc ml-5 space-y-1">
              <li>Check for injuries.</li>
              <li>Report hazards.</li>
              <li>Follow official updates.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Emergency Kit Checklist */}
      <section className="mt-16 mb-20">
        <h3 className="text-2xl font-bold text-slate-800">Emergency Kit Essentials</h3>

        <div className="grid md:grid-cols-4 gap-6 mt-6">
          {[
            "Drinking Water",
            "First Aid Kit",
            "Flashlight & Batteries",
            "Emergency Whistle",
            "Power Bank",
            "Non-perishable Food",
            "Important Documents",
            "Basic Medicines"
          ].map((item, i) => (
            <div
              key={i}
              className="p-5 bg-white shadow rounded-lg hover:shadow-lg hover:scale-[1.04] transition"
            >
              # <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

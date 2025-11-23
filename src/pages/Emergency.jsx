import React, { useRef } from "react";


export default function Emergency() {
  const printRef = useRef();

  function handlePrint() {
    if (printRef.current) {
      const original = document.body.innerHTML;
      const content = printRef.current.innerHTML;
      document.body.innerHTML = content;
      window.print();
      window.location.reload();
    }
  }

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header */}
      <div className="bg-gradient from-red-600 to-orange-500 text-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold flex items-center gap-3">
           Emergency Action Plan (School)
        </h1>
        <p className="text-red-300 mt-2 font-bold italic">
          A complete protocol for teachers, staff, and students during disaster or emergency situations.
        </p>

        <button
          onClick={handlePrint}
          className="mt-4 px-5 py-2 font-arial bg-white text-red-600 rounded font-semibold shadow hover:scale-105 transition"
        >
          Print Full Plan
        </button>
      </div>

      {/* Printable Area */}
      <div ref={printRef} className="mt-10 bg-white p-8 rounded-xl shadow-xl">

        {/* EMERGENCY LEVELS */}
        <section>
          <h2 className="text-xl font-bold text-red-500">Emergency Alert Levels</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-5">
            <div className="p-4 bg-green-50 border-l-4 border-green-600 rounded">
              <h3 className="text-green-700 font-semibold">Level 1 — Minor Emergency</h3>
              <p className="text-sm mt-2">Handled internally by staff. No evacuation required.</p>
            </div>
            <div className="p-4 bg-yellow-50 border-l-4 border-yellow-600 rounded">
              <h3 className="text-yellow-700 font-semibold">Level 2 — Moderate Emergency</h3>
              <p className="text-sm mt-2">Partial evacuation or shelter-in-place required.</p>
            </div>
            <div className="p-4 bg-red-50 border-l-4 border-red-600 rounded">
              <h3 className="text-red-700 font-semibold">Level 3 — Full Emergency</h3>
              <p className="text-sm mt-2">Entire school evacuation. Emergency services involved.</p>
            </div>
          </div>
        </section>

        {/* EMERGENCY ASSEMBLY PLAN */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-red-500">Emergency Assembly Plan</h2>
          <ol className="list-decimal ml-6 mt-3 space-y-2 text-slate-700">
            <li>Activate alarm and alert school authorities immediately.</li>
            <li>Teachers escort students calmly to the designated assembly area.</li>
            <li>Take attendance and ensure no students are missing.</li>
            <li>Provide basic first-aid to injured individuals.</li>
            <li>Call emergency services and provide all required information.</li>
            <li>Do not leave assembly point until the official clearance is given.</li>
          </ol>
        </section>

        {/* EVACUATION ROUTES */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-red-500 flex items-center gap-2">
             Evacuation Routes
          </h2>
          <p className="text-slate-700 mt-3">
            Follow the marked green arrows in the building leading to:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-slate-700">
            <li>Main Playground (Primary Assembly Point)</li>
            <li>Open Auditorium Area (Secondary Assembly Point)</li>
            <li>School Parking Ground (Emergency Overflow Zone)</li>
          </ul>

          <div className="mt-5">
            <img
              src="https://i.pinimg.com/736x/ed/b8/36/edb836c6025e379262305420b7890894.jpg"
              alt="Evacuation Map"
              className="rounded-lg shadow w-full max-h-96 object-cover"
            />
          </div>
        </section>

        {/* FIRST AID STEPS */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-red-500 flex items-center gap-2">
             First Aid Guidance
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-5">
            <div className="p-5 bg-blue-50 rounded shadow">
              <h4 className="font-semibold text-blue-700">Bleeding Control</h4>
              <p className="text-sm mt-2">Apply pressure using clean cloth, elevate injured area.</p>
            </div>
            <div className="p-5 bg-yellow-50 rounded shadow">
              <h4 className="font-semibold text-yellow-700">Burns</h4>
              <p className="text-sm mt-2">Cool affected area with water, avoid applying creams.</p>
            </div>
            <div className="p-5 bg-red-50 rounded shadow">
              <h4 className="font-semibold text-red-700">Fractures</h4>
              <p className="text-sm mt-2">Immobilize the injured area and wait for medical help.</p>
            </div>
          </div>
        </section>

        {/* ROLES & RESPONSIBILITIES */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-red-500 flex items-center gap-2">
             Assigned Roles
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-purple-50 border-l-4 border-purple-600 rounded">
              <h4 className="font-semibold text-purple-700">Fire Marshals</h4>
              <p className="text-sm mt-2">Responsible for checking each classroom and ensuring evacuation.</p>
            </div>

            <div className="p-4 bg-teal-50 border-l-4 border-teal-600 rounded">
              <h4 className="font-semibold text-teal-700">First Aid Team</h4>
              <p className="text-sm mt-2">Handles injuries and basic medical response.</p>
            </div>

            <div className="p-4 bg-orange-50 border-l-4 border-orange-600 rounded">
              <h4 className="font-semibold text-orange-700">Communication Team</h4>
              <p className="text-sm mt-2">In charge of contacting parents and authorities.</p>
            </div>

            <div className="p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
              <h4 className="font-semibold text-blue-700">Security Team</h4>
              <p className="text-sm mt-2">Manages crowd and ensures restricted areas are not accessed.</p>
            </div>
          </div>
        </section>

        {/* EMERGENCY NUMBERS */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-red-500 flex items-center gap-2">
            Emergency Contacts
          </h2>

          <ul className="mt-3 text-slate-700 space-y-1">
            <li><strong>School Emergency Line:</strong> +91-90000-00000</li>
            <li><strong>Fire & Rescue:</strong> 101</li>
            <li><strong>Police:</strong> 100</li>
            <li><strong>Ambulance:</strong> 108</li>
            <li><strong>Disaster Helpline:</strong> 1070</li>
          </ul>

          {/* Quick Call Buttons */}
          <div className="mt-5 flex flex-wrap gap-3">
            {["101", "100", "108", "1070"].map((num) => (
              <a
                key={num}
                href={`tel:${num}`}
                className="px-4 py-2 bg-sky-600 text-white rounded shadow hover:bg-sky-700 transition"
              >
                Call {num}
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

import React from "react";
import Text from "../components/Text";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import {TriangleAlert} from "lucide-react";
import  { Megaphone } from "lucide-react";


export default function Home() {
  return (
    <div>
      <Text />
      <div className="bg-[url('https://images.unsplash.com/photo-1760179272055-532096416783?auto=format&fit=crop&q=60&w=1200')] bg-cover bg-center min-h-64 w-full px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 backdrop-blur-lg">

        {/* Quick Actions  */}
        <Card title="Quick Actions" subtitle="Immediate things you can do">
          <ul className="list-disc ml-5 text-sm space-y-1">
            <li><Link to="/emergency" className="text-sky-600 hover:underline">View Emergency Plan</Link></li>
            <li><Link to="/modules" className="text-sky-600 hover:underline">Start a Module</Link></li>
            <li><Link to="/resources" className="text-sky-600 hover:underline">Download Materials</Link></li>
          </ul>
        </Card>

        {/*Last Drills */}
        <Card title="Recent Drills" subtitle="Last 3 drills & outcomes">
          <div className="text-sm text-slate-600">
            No drills recorded yet. Use Modules to schedule a drill and log outcomes.
          </div>
        </Card>

        {/* Contact */}
        <Card title="Contact" subtitle="Get support">
          <div className="text-sm">
            Email:{" "}
            <a className="text-sky-600 hover:underline" href="mailto:disasterready@lpu.in">
              disasterready@lpu.in
            </a>
          </div>
          <div className="mt-2">
            <Link to="/contact" className="text-sm text-sky-600 hover:underline">
              Open contact form
            </Link>
          </div>
        </Card>
      </div>

      {/* Stats Section */}
      {/* <section className="container mx-auto mt-10 px-6">
        <h2 className="text-2xl font-semibold text-slate-800">Dashboard Overview</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {[
            { num: "150+", label: "Schools Trained" },
            { num: "50K+", label: "Students Covered" },
            { num: "500+", label: "Teachers Trained" },
            { num: "120+", label: "Mock Drills Done" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl shadow bg-white hover:scale-105 transition cursor-pointer"
            >
              <div className="text-3xl font-extrabold text-sky-600">{item.num}</div>
              <p className="text-sm mt-1 text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Alerts Section */}
      <section className="container mx-auto mt-12 px-6">
        <h2 className=" flex text-xl font-semibold text-red-700 mb-3">
          <TriangleAlert /> Important Alerts</h2>
        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600 shadow">
          <p className="flex items-center gap-1 text-sm text-red-700">
  <TriangleAlert />
  No active disaster alerts. Stay prepared and review emergency guidelines.
</p>

        </div>
      </section>

      {/* Featured Modules */}
      <section className="container mx-auto mt-12 px-6">
        <h2 className="text-2xl font-semibold text-slate-800">Featured Learning Modules</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {[
            {
              title: "Earthquake Safety",
              desc: "Learn safe evacuation, drop-cover-hold drills, and emergency communication.",
            },
            {
              title: "Fire & Evacuation",
              desc: "Understand fire types, extinguisher use, and structured evacuation.",
            },
            {
              title: "Flood Preparedness",
              desc: "Response steps, emergency kit, early warning signs & rescue basics.",
            },
          ].map((m, i) => (
            <div
              key={i}
              className="p-5 bg-white shadow rounded-xl hover:shadow-lg hover:scale-[1.03] cursor-pointer transition"
            >
              <h3 className="font-semibold text-lg">{m.title}</h3>
              <p className="text-sm mt-2 text-slate-600">{m.desc}</p>

              <Link
                to="/modules"
                className="text-sky-600 text-sm mt-3 inline-block hover:underline"
              >
                Explore Module →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Safety Tips */}
      <section className="container mx-auto mt-12 px-6">
        <h2 className="text-2xl font-semibold text-slate-800">Quick Safety Tips</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-green-50 p-6 rounded-lg shadow">
            <h4 className="font-bold text-green-700"> Build an Emergency Kit</h4>
            <ul className="mt-3 text-sm text-slate-700 list-disc ml-5 space-y-1">
              <li>Water for 3 days</li>
              <li>Basic medicines</li>
              <li>Flashlight & radio</li>
              <li>Important documents</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <h4 className="font-bold text-blue-700"> Family Safety Plan</h4>
            <ul className="mt-3 text-sm text-slate-700 list-disc ml-5 space-y-1">
              <li>Share emergency contacts</li>
              <li>Decide meeting points</li>
              <li>Practice evacuation drills</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="container mx-auto mt-12 mb-16 px-6">
        <h2 className="text-2xl flex font-semibold text-slate-800"><Megaphone /> Announcements</h2>

        <div className="bg-white shadow p-5 rounded-lg mt-4">
          <p className="flex text-sm text-slate-700">
             Training session for staff will start next week. Keep checking the Modules section
            for scheduling.
          </p>
        </div>
      </section>
    </div>
  );
}

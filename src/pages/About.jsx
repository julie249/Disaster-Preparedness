import React from "react";

export default function About() {
  return (
    <div className="container mx-auto px-6 py-10">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-red-500">
            About This Program
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Our Disaster Preparedness & Response Education Program empowers
            schools and colleges with modern, curriculum-aligned tools to build
            a safer learning environment. We provide structured lesson modules,
            interactive activities, emergency plans, drill guides and digital
            learning resources created by trained disaster-management experts.
          </p>

          <ul className="mt-4 space-y-2 text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 text-xl"></span>
              I. Evidence-based learning modules
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 text-xl"></span>
              II. Teacher & student digital resource library
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 text-xl"></span>
              III. Admin dashboard for drills & safety audits
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 text-xl"></span>
              IV. Real-life simulation activities & worksheets
            </li>
          </ul>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1552828488-282e3da17019?auto=format&fit=crop&w=800&q=60"
            alt="about"
            className="rounded-xl shadow-lg hover:shadow-xl transition"
          />
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="mt-12">
        <h3 className="text-2xl font-semibold text-slate-800">Our Mission & Vision</h3>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <h4 className="text-lg font-bold text-blue-700">Mission</h4>
            <p className="mt-2 text-slate-700">
              To build disaster-ready educational institutions by providing
              accessible, updated, and actionable preparedness content to
              students, teachers, and administrators.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg shadow">
            <h4 className="text-lg font-bold text-green-700">Vision</h4>
            <p className="mt-2 text-slate-700">
              A future where every school and college is capable of responding
              confidently to emergencies, ensuring safety and resilience for all
              learners.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mt-12">
        <h3 className="text-2xl font-semibold text-slate-800">Program Impact</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 text-center">
          <div className="p-6 bg-white shadow rounded-lg hover:shadow-md transition">
            <div className="text-3xl font-bold text-blue-600">150+</div>
            <p className="text-sm mt-2 text-slate-600">Schools Trained</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg hover:shadow-md transition">
            <div className="text-3xl font-bold text-green-600">50K+</div>
            <p className="text-sm mt-2 text-slate-600">Students Reached</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg hover:shadow-md transition">
            <div className="text-3xl font-bold text-orange-600">500+</div>
            <p className="text-sm mt-2 text-slate-600">Teachers Trained</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg hover:shadow-md transition">
            <div className="text-3xl font-bold text-red-600">120+</div>
            <p className="text-sm mt-2 text-slate-600">Mock Drills Conducted</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mt-14">
        <h3 className="text-2xl font-semibold text-slate-800">Our Journey</h3>

        <div className="mt-6 border-l border-slate-300 pl-6 space-y-6">
          <div>
            <p className="font-bold text-blue-600">2019</p>
            <p className="text-slate-700">Program launched with 5 pilot schools.</p>
          </div>
          <div>
            <p className="font-bold text-blue-600">2021</p>
            <p className="text-slate-700">Expanded statewide with digital modules.</p>
          </div>
          <div>
            <p className="font-bold text-blue-600">2023</p>
            <p className="text-slate-700">
              Added emergency preparedness mobile resources.
            </p>
          </div>
          <div>
            <p className="font-bold text-blue-600">2024</p>
            <p className="text-slate-700">
              Introduced AI-assisted drill planning & alerts.
            </p>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="mt-14">
        <h3 className="text-2xl font-semibold text-slate-800">Core Team</h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          {[
            {
              name: "Himanshu Chaudhary",
              role: "Project Lead",
              desc: "Expert in disaster risk reduction and school safety.",
            },
            {
              name: "Sunny Kumar",
              role: "Education Coordinator",
              desc: "Curriculum & teacher training specialist.",
            },
            {
              name: "Julie Kumari",
              role: "Communications",
              desc: "Responsible for outreach, content creation & partnerships."
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition hover:scale-[1.02]"
            >
              <div className="font-semibold text-lg">{member.name}</div>
              <div className="text-sm text-slate-500 mt-1">{member.role}</div>
              <p className="mt-3 text-sm text-slate-600">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

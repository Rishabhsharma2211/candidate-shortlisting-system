import React, { useState } from "react";
import API from "../api";

const CandidateForm = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    skills: "",
    experience: "",
    bio: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/candidates", {
      ...form,
      skills: form.skills.split(","),
    });

    alert("Candidate Added Successfully");

    setForm({
      name: "",
      email: "",
      skills: "",
      experience: "",
      bio: "",
    });
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 shadow-2xl mb-10">

      <h2 className="text-3xl font-bold mb-6 text-cyan-400">
        Add Candidate
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-5"
      >

        <input
          className="p-4 rounded-xl bg-slate-800 border border-slate-600 outline-none"
          placeholder="Candidate Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          className="p-4 rounded-xl bg-slate-800 border border-slate-600 outline-none"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          className="p-4 rounded-xl bg-slate-800 border border-slate-600 outline-none md:col-span-2"
          placeholder="Skills (React, Node.js, MongoDB)"
          value={form.skills}
          onChange={(e) =>
            setForm({ ...form, skills: e.target.value })
          }
        />

        <input
          type="number"
          className="p-4 rounded-xl bg-slate-800 border border-slate-600 outline-none"
          placeholder="Experience"
          value={form.experience}
          onChange={(e) =>
            setForm({ ...form, experience: e.target.value })
          }
        />

        <textarea
          rows="4"
          className="p-4 rounded-xl bg-slate-800 border border-slate-600 outline-none md:col-span-2"
          placeholder="Candidate Bio"
          value={form.bio}
          onChange={(e) =>
            setForm({ ...form, bio: e.target.value })
          }
        />

        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 transition-all p-4 rounded-xl font-bold md:col-span-2"
        >
          Add Candidate
        </button>

      </form>
    </div>
  );
};

export default CandidateForm;
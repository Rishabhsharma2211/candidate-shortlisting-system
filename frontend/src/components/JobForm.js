import React, { useState } from "react";
import API from "../api";

const JobForm = ({ setResults }) => {

  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");

  const handleMatch = async () => {

    const response = await API.post("/match", {
      requiredSkills: skills.split(","),
      minExperience: experience,
    });

    setResults(response.data);
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 shadow-2xl mb-10">

      <h2 className="text-3xl font-bold mb-6 text-pink-400">
        Job Requirements
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <input
          className="p-4 rounded-xl bg-slate-800 border border-slate-600 outline-none"
          placeholder="Required Skills"
          onChange={(e) => setSkills(e.target.value)}
        />

        <input
          type="number"
          className="p-4 rounded-xl bg-slate-800 border border-slate-600 outline-none"
          placeholder="Minimum Experience"
          onChange={(e) => setExperience(e.target.value)}
        />

      </div>

      <button
        onClick={handleMatch}
        className="mt-6 bg-pink-500 hover:bg-pink-600 transition-all p-4 rounded-xl font-bold w-full"
      >
        Match Candidates
      </button>

    </div>
  );
};

export default JobForm;
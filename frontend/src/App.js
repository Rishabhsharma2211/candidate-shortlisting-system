import React, { useState } from "react";

import CandidateForm from "./components/CandidateForm";
import JobForm from "./components/JobForm";
import Shortlist from "./components/Shortlist";

function App() {

  const [results, setResults] = useState([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white p-6 md:p-10">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">

          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            AI Candidate Shortlisting System
          </h1>

          <p className="mt-4 text-slate-300 text-lg">
            MERN Stack + OpenRouter AI Integration
          </p>

        </div>

        <CandidateForm />

        <JobForm setResults={setResults} />

        <Shortlist results={results} />

      </div>

    </div>
  );
}

export default App;
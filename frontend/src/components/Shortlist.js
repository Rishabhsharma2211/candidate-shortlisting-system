import React from "react";

const Shortlist = ({ results }) => {

  return (
    <div>

      <h2 className="text-4xl font-bold text-center mb-8 text-green-400">
        Shortlisted Candidates
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {results.map((candidate) => (

          <div
            key={candidate._id}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl border border-white/20 shadow-2xl hover:scale-105 transition-all"
          >

            <div className="flex justify-between items-center mb-4">

              <h3 className="text-2xl font-bold text-cyan-300">
                {candidate.name}
              </h3>

              <span className="bg-green-500 px-3 py-1 rounded-full text-sm font-bold">
                {candidate.matchScore.toFixed(0)}%
              </span>

            </div>

            <p className="text-slate-300 mb-2">
              {candidate.email}
            </p>

            <p className="mb-4">
              <span className="text-pink-300 font-bold">
                Experience:
              </span>{" "}
              {candidate.experience} years
            </p>

            <div className="mb-4">

              <h4 className="font-bold text-yellow-300 mb-2">
                Skills
              </h4>

              <div className="flex flex-wrap gap-2">

                {candidate.skills.map((skill, index) => (

                  <span
                    key={index}
                    className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

            <div>

              <h4 className="font-bold text-green-300 mb-2">
                Matched Skills
              </h4>

              <div className="flex flex-wrap gap-2">

                {candidate.matchedSkills.map((skill, index) => (

                  <span
                    key={index}
                    className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Shortlist;
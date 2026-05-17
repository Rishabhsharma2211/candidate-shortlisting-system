const Candidate = require("../models/Candidate");
const axios = require("axios");


// ADD CANDIDATE
exports.addCandidate = async (req, res) => {
  try {
    const candidate = await Candidate.create(req.body);

    res.status(201).json(candidate);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// GET ALL CANDIDATES
exports.getCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();

    res.json(candidates);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// MATCH CANDIDATES
exports.matchCandidates = async (req, res) => {
  try {

    const { requiredSkills, minExperience } = req.body;

    const candidates = await Candidate.find();

    const matchedCandidates = candidates
      .map((candidate) => {

        const matchedSkills = candidate.skills.filter((skill) =>
          requiredSkills.includes(skill)
        );

        const score =
          (matchedSkills.length / requiredSkills.length) * 100;

        return {
          ...candidate._doc,
          matchedSkills,
          matchScore: score,
        };
      })

      .filter(
        (candidate) =>
          candidate.experience >= minExperience
      )

      .sort((a, b) => b.matchScore - a.matchScore);

    res.json(matchedCandidates);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// AI SHORTLISTING
exports.aiShortlist = async (req, res) => {
  try {

    const { requiredSkills, minExperience } = req.body;

    const candidates = await Candidate.find();

    const candidateText = candidates
      .map(
        (candidate, index) =>
          `${index + 1}. ${candidate.name} - ${candidate.skills.join(
            ", "
          )} - ${candidate.experience} years`
      )
      .join("\n");


    const response = await axios.post(

      "https://openrouter.ai/api/v1/chat/completions",

      {
        model: "openai/gpt-5.2",

        messages: [
          {
            role: "user",

            content: `
Job requires:
Skills: ${requiredSkills.join(", ")}

Minimum Experience:
${minExperience} years

Candidates:
${candidateText}

Rank the candidates and explain why they are suitable.
            `,
          },
        ],
      },

      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};
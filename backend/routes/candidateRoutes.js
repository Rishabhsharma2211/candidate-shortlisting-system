const express = require("express");

const {
  addCandidate,
  getCandidates,
  matchCandidates,
  aiShortlist,
} = require("../controllers/candidateController");

const router = express.Router();


// ADD CANDIDATE
router.post("/candidates", addCandidate);


// GET ALL CANDIDATES
router.get("/candidates", getCandidates);


// MATCH CANDIDATES
router.post("/match", matchCandidates);


// AI SHORTLIST
router.post("/ai/shortlist", aiShortlist);


module.exports = router;
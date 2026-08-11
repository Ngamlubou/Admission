const express = require("express");
const router = express.Router();
const { supabase } = require("../services/supabase");
const { previousClass } = require("../services/classes");
//========= Api endpoint ============
//-------- start admission new --------
router.post("/start-new", async (req, res) => {
  try { const {  code, aadhaarNo, penNo, classSelect }  = req.body;
 if (!code || !classSelect) {    return res.status(400).json("Both code and class are required");  }
 const searchValue = penNo || aadhaarNo;
const searchColumn = penNo ? "pen_no" : "aadhaar_no";

 const { data, error } = await supabase
  .from("students_data")
  .select("*")
  .eq(searchColumn, searchValue)
  .maybeSingle();

  if (error) { return res.status(500).json(error.message); }
if (!data) { return res.status(404).json("Student not found"); }
      return res.json(data);

  } catch {  return res.status(500).json("Server error"); }
});
//-------- start admission existing --------
router.post("/start-existing", async (req, res) => {
  try { const {  code, studentName, motherName, classSelect }  = req.body;
 if (!studentName || !motherName) {    return res.status(400).json("Both name and mother's name are required");  }

const classes = [  classSelect,  previousClass[classSelect] ].filter(Boolean);

 const { data, error } = await supabase
  .from("students_data")
  .select("*")
  .in("class", classes);

  if (error) { return res.status(500).json(error.message); }

const normalize = (text) => text.trim().replace(/\s+/g, " ").toLowerCase();
const student = normalize(studentName);
const mother = normalize(motherName);

const result = data.filter(row =>
  normalize(row.student_name) === student &&
  normalize(row.mother_name) === mother );
if (result.length === 0) {  return res.status(404).json("Student not found"); }
      return res.json(result);

  } catch {  return res.status(500).json("Server error"); }
});
module.exports = router;

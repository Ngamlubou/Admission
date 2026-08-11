const express = require("express");
const router = express.Router();
const { supabase } = require("../services/supabase");
const Razorpay = require("razorpay");
//========= Utility =========
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_ID,
  key_secret: process.env.RAZORPAY_S
});

function generateCode(prefix) {
  const letters = "ABCDEFGHJKLMNPQRTUVWXY";
  const randomLetter = letters[Math.floor(Math.random() * letters.length)];
  const num = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0");
  return prefix + randomLetter + num;
}
//========= Api endpoint ============
//-------- Code creation --------
router.post("/create-order", async (req, res) => {
  try {
    const { classValue } = req.body;
    const code = generateCode(classValue);
    const options = {
      amount: 10000,
      currency: "INR",
      receipt: "receipt_" + Date.now(),
      notes: { code }
    };
   const order = await razorpay.orders.create(options);
    res.json({
      order_id: order.id,
      amount: order.amount,
      code: code
    });
  } catch (err) { res.status(500).json("Server error"); }
});
//-------- Code verification --------
router.post("/verify-status", async (req, res) => {
  try {
    const { code } = req.body;
  const { data, error } = await supabase
      .from("students_data")
      .select("code")
      .in("code", code);
    if (error) {
     return res.sendStatus(500);
    }
    const result = {};
   code.forEach(c => { result[c] = false;   });
   data.forEach(row => {    result[row.code] = true;     });
    res.json(result);
  } catch (err) { res.status(500).json("Server error"); }
});
//-------- same --------
router.post("/admissionform-code", async (req, res) => {
const studentColumns = `
  student_name,
  father_name,
  mother_name,
  dob,
  gender,
  address_cur,
  pincode,
  address_per,
  contact_no,
  contact_relate,
alternate_no,
  code,
  perc,
  cgpa,
  grade,
  minority_status,
  disability_types,
  blood_group,
  social_category,
process_state
`;
const status = {
  "Code generated": 1,
  "Application submitted": 2,
  "Application under review": 3,
  "Application approved": 4,
  "Application rejected": 5,
  "Admission fee paid": 6,
  "January fee paid": 7,
  "February fee paid": 8,
  "March fee paid": 9,
  "April fee paid": 10,
  "May fee paid": 11,
  "June fee paid": 12,
  "July fee paid": 13,
  "August fee paid": 14,
  "September fee paid": 15,
  "October fee paid": 16,
  "November fee paid": 17,
  "December fee paid": 18,
  "Inactive": 19
};
  try {
    const { code } = req.body;
    const { data, error } = await supabase
      .from("students_data")
      .select(studentColumns)
      .eq("code", code)
      .single();
    if (error || !data) {   return res.json({   status: 0   });   }

 res.json({    status: status[data.process_state],     data    });

  } catch (err) {
    res.status(500).json("Server error");  }
});
//-------- Fetch Billing Details --------
router.post("/billing-details", async (req, res) => {
try {
const { key } = req.body;

    if (!key) {    return res.status(400).json( "Registration number is required");
    }

 const { data, error } = await supabase
      .from("students_data")
      .select(`
  student_name,
  registration_no,
  class,
  benefit,
  tuition_schedule,
  tuition_fees_status,
  hostel_schedule,
  hostel_fees_status
`)
      .eq("registration_no", key)
      .maybeSingle();
if (error) { return res.status(500).json(error.message); }
if (!data) { return res.status(404).json("Student not found"); }
      return res.json(data);
 } catch (err) {
    res.status(500).json("Server error"); }
});
//-------- Fetch Student Joining Guide --------
router.post("/joining-guide", async (req, res) => {
try { const { key } = req.body;

   if (!key) {    return res.status(400).json("Registration number is required");
    }

    const { data, error } = await supabase
      .from("students_data")
      .select(`
  student_name,
  registration_no,
  class,
  tuition_schedule,
  uniform,
  books`)
      .eq("registration_no", key)
      .maybeSingle();
if (error) { return res.status(500).json(error.message); }
if (!data) { return res.status(404).json("Student not found"); }
return res.json(data);
 } catch (err) {
    res.status(500).json("Server error"); }
});
module.exports = router;

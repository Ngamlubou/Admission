const express = require("express");
const crypto = require("crypto");
const argon2 = require("argon2");
const router = express.Router();
const { sendEmail } = require("../services/sendEmail");
const { supabase } = require("../services/supabase");
//========= Api endpoint ============
//-------- generate password link --------
router.post("/generate-password-link", async (req, res) => {
  try { const { email }  = req.body;
    if (!email) {    return res.status(400).json("Email required");  }
        const token = crypto.randomBytes(32).toString("hex");

        const { data, error } = await supabase
          .from("admins")
          .update({
            reset_token: token,
            reset_token_expires: new Date(Date.now() + 48 * 60 * 60 * 1000)   })
         .eq("email", email)
        .select();
    if (error) throw error;
    if (data.length === 0) {  return res.status(404).json("Email not found"); }
    const resetUrl = `https://ngamlubou.github.io/Admission/admin/password.html?token=${token}`;

    await sendEmail({
      to: email,
      subject: "Password Reset Link",
      html: `   <h3>Password Reset Request</h3>
        <p>Click below link to reset your password:</p>
        <a href="${resetUrl}">${resetUrl}</a>
        <p>This link will expire in 48 hours.</p>    `,
    });

   return res.json("Link successfully sent to email");
  } catch {  return res.status(500).json("Server error"); }
});
//-------- create new password --------
router.post("/create-password", async (req, res) => {
try { const { token, password } = req.body;

if (!token || !password) {    return res.status(400).json("token and password is required");  }

const { data, error } = await supabase
  .from("admins")
  .select("*")
  .eq("reset_token", token)
  .single();

  if (error || !data) {  return res.status(400).json("Invalid link"); }

if (new Date(data.reset_token_expires) < new Date()) { return res.status(401).json("Link expired"); }

const hash = await argon2.hash(password, {
  type: argon2.argon2id,
  memoryCost: 12288,
  timeCost: 2,
  parallelism: 1 });
const { error: updateError } = await supabase
  .from("admins")
  .update({
    password_hash: hash,
    reset_token: null,
    reset_token_expires: null
  })
  .eq("admin_id", data.admin_id);

if (updateError) throw updateError;
return res.json("Password creation successful");
} catch (err) {
    res.status(500).json("Server error"); }
});
//-------- login --------
router.post("/login", async (req, res) => {
try { const { email, password } = req.body;

if (!email || !password) {    return res.status(400).json("Email and password is required");  }

    const { data } = await supabase
      .from("admins")
      .select("*")
      .eq("email", email)
      .single();
if (!data) { return res.status(400).json("Invalid email"); }

const valid = await argon2.verify(  data.password_hash, password);
if (!valid) { return res.status(401).json("Invalid password"); }

const sessionId = crypto .randomBytes(32) .toString("hex");
const { error: sessionError } = await supabase
  .from("admin_sessions")
  .insert({
    session_id: sessionId,
    admin_id: data.admin_id
  });
if (sessionError)  throw sessionError;

    res.cookie("adminSession", sessionId, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 365 * 24 * 60 * 60 * 1000
    });

    return res.json("Login successful");
 } catch (err) {
    res.status(500).json("Server error"); }
});
module.exports = router;

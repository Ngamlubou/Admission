const express = require("express");
const cors = require("cors");

const app = express();

app.use("/webhook", express.raw({ type: "application/json" }));

app.use(cors({ origin: "*" }));

app.use(express.json());

app.use("/smart-pea", require("./routes/student"));
app.use("/smart-pea-a", require("./routes/admin"));
app.use("/smart-pea-a/admission", require("./routes/admission"));
app.use("/smart-pea/sync", require("./routes/sync"));

module.exports = app;

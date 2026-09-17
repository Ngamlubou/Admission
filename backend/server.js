require("dotenv").config();

const PORT = process.env.PORT || 9000;
const app = require("./src/App");
app.listen(PORT, "0.0.0.0", () => {
    console.log(`SmartPea API running on port ${PORT}`);
});

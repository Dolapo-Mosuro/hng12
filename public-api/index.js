require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

app.get("/", (req, res) => {
	res.json({
		email: process.env.EMAIL,
		current_datetime: new Date().toISOString(),
		github_url: process.env.GITHUB_URL,
	});
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

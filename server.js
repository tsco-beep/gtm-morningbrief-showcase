// Tiny web server whose only job is to serve the showcase page.
// Railway runs this; it reads the PORT that Railway provides and shows index.html.
const express = require("express");
const path = require("path");

const app = express();

// Serve everything in the /public folder (that's where index.html lives).
app.use(express.static(path.join(__dirname, "public")));

// For any address, fall back to the homepage.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Railway tells us which port to use via an environment variable.
const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log("Showcase is live on port " + port);
});

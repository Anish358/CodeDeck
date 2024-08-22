import express from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.get("/", (req, res) => {
  res.send("SERVER UNDER MAINTENANCE");
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
  connectMongoDB();
});

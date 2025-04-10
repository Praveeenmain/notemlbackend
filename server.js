const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(bodyParser.json());

// 🔮 Predict note category
const { spawn } = require("child_process");

app.post("/predict", (req, res) => {
    const noteText = req.body.text;
    console.log("📝 Note received:", noteText);
  
    const pythonProcess = spawn("python3", ["python-ml/predict.py", noteText]);
  
    let result = "";
  
    pythonProcess.stdout.on("data", (data) => {
      console.log("🐍 Python output:", data.toString());
      result += data.toString();
    });
  
    pythonProcess.stderr.on("data", (err) => {
      console.error("❌ Python error:", err.toString());
    });
  
    pythonProcess.on("close", (code) => {
      console.log("📦 Python process closed with code:", code);
  
      if (code !== 0) {
        return res.status(500).json({ error: "Python script failed" });
      }
  
      res.json({ label: result.trim() });
    });
  });
  

// ✅ Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

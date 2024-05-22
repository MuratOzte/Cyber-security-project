const { spawn } = require("child_process");
const path = require("path");

exports.nmapTest = async (req, res) => {
  const url = req.body.url;

  if (!url) {
    return res.status(400).json({ error: "Lütfen bir URL gönderin." });
  }

  const pythonScriptName = "nmapTest.py";
  const pythonScriptPath = path.join(
    __dirname,
    "..",
    "/tests",
    pythonScriptName
  );

  const pythonProcess = spawn("python", [pythonScriptPath, url]);

  let output = "";
  let error = "";

  pythonProcess.stdout.on("data", (data) => {
    output += data.toString();
  });

  pythonProcess.stderr.on("data", (data) => {
    error += data.toString();
  });

  pythonProcess.on("close", (code) => {
    if (code === 0) {
      try {
        const jsonData = JSON.parse(output);
        res.json(jsonData);
      } catch (err) {
        console.log(err);
        res
          .status(500)
          .json({ error: "Python betiğinin çıktısı JSON formatında değil." });
      }
    } else {
      res.status(500).json({
        error: `Python betiği başarısız bir çıkış kodu döndürdü: ${code}`,
        stderr: error,
      });
    }
  });
};

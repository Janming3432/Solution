const fs = require("fs");
const readline = require("readline");
const path = require("path");

async function extractLogs(logFile, date) {
  if (!fs.existsSync(logFile)) {
    console.error("Error: Log file does not exist.");
    process.exit(1);
  }

  const outputDir = "output";
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  const outputFile = path.join(outputDir, `output.txt`);
  const outputStream = fs.createWriteStream(outputFile);

  const fileStream = fs.createReadStream(logFile);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    if (line.startsWith(date)) {
      outputStream.write(line + "\n");
    }
  }

  outputStream.end();
  console.log(`Logs for ${date} have been saved to ${outputFile}`);
}

if (process.argv.length !== 4) {
  console.error("Usage: node extract_logs.js <log_file> <YYYY-MM-DD>");
  process.exit(1);
}

const logFile = process.argv[2];
const date = process.argv[3];
extractLogs(logFile, date);

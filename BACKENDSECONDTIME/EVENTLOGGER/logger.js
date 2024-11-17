const fs = require("node:fs");
const os = require("node:os");

const EventEmitter = require("events");
// console.log(typeof fs, typeof EventEmitter);

class Logger extends EventEmitter {
  log(message) {
    this.emit("message", {message});
  }
}

const logger = new Logger();

const logFile = "./eventlog.txt";

const logToFile = (event) => {
  const logMessage = `${new Date().toISOString()} - ${event.message}\n`;
  fs.appendFileSync(logFile, logMessage);
};

logger.on("message", logToFile);

setInterval(() => {
  const memoryUses = (os.freemem() / os.totalmem()) * 100;
  logger.log(memoryUses.toFixed(2));
}, 2000);

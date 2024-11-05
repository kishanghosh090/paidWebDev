const fs = require("fs");
const os = require("os");

const EventEmitter = require("events"); // class

class Logger extends EventEmitter {
  log(message) {
    this.emit("message", { message });
  }
}
const logger = new Logger();

const logFile = "./eventlog.txt";

const logToFile = (event) => {
  const logMessage = `${new Date().toISOString()} - ${event.message} \n`;
  fs.appendFileSync(logFile, logMessage);
};
logger.on("message", logToFile);

setInterval(() => {
  const meoryUses = (os.freemem() / os.totalmem()) * 100; 
  logger.log(meoryUses);
}, 1000);

logger.log("hello brooooo");
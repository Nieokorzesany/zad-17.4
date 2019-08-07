var os = require("os");
var getTime = require("./time");
var colors = require("colors");

function getOSinfo() {
  var type = os.type();
  if (type === "Darwin") {
    type = "OSX";
  } else if (type === "Windows_NT") {
    type = "Windows";
  }
  var release = os.release();
  var cpu = os.cpus()[0].model;
  var uptime = os.uptime();
  var userInfo = os.userInfo();
  console.log("System:".gray, type);
  console.log("Release:".red, release);
  console.log("CPU model:".blue, cpu);
  console.log("Uptime: ~".green, (uptime / 60).toFixed(0), "min");
  //console.log("Uptime true: ~", uptime);
  getTime.time(uptime);
  console.log("User name:".magneta, userInfo.username);
  console.log("Home dir:".yellow, userInfo.homedir);
}

exports.print = getOSinfo;

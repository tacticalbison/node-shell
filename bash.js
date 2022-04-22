const { cwd } = require("process");

const pwd = require("./pwd");

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") pwd.pwd();
  else process.stdout.write("You typed: " + cmd + "\nprompt > ");
});

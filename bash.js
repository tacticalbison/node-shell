const pwd = require("./pwd");

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  switch (cmd) {
    case "pwd":
      pwd.pwd();
      break;
    default:
      process.stdout.write("You typed: " + cmd + "\nprompt > ");
  }
});

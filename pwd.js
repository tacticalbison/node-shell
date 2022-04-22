const { cwd } = require("process");

module.exports = {
  pwd: () => {
    console.log(`${cwd()}`);
    process.stdout.write("prompt > ");
  },
};

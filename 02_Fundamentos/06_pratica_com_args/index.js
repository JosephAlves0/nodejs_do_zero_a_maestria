// externo
const minimist = require("minimist");

//interno
const somar = require("./somar").somar

const args = minimist(process.argv.slice(2))

const a = parseInt(args["a"]);
const b = parseInt(args["b"]);

somar(a,b);
const readline = require("readline"); // readline is a core module inside nodejs

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("How do you like Node?", answer => {
    console.log(`Your answer: ${answer}`);
});

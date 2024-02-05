const cp = require("child_process")

function executeCommand(command) {
    const output = cp.execSync(command)
    console.log(""+output)
}

executeCommand('dir');

executeCommand('echo "Hello, Node.js!"');
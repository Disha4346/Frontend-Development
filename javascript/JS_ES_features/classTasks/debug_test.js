function printMessage() {
    const msg = "Hello from debugger!";

    debugger;   // <-- terminal will stop here

    console.log(msg);
}

printMessage();
// To run this code with debugging, use the command:
// node --inspect-brk javascript/jsOperator/debug_test.js
const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdou


stdin.on('data', (key) => {
 if (key ==="\u0003") {
   process.exit();
 } else if (key === "b") {
   process.stdout.write('\x07');
 } else {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, key * 1000)
 }
});

//console.log('after callback');
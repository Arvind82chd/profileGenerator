const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({input, output});

rl.question('What is your favorite food? ', (answer) => {
    console.log(`Oh, so your favorite food is: ${answer}`);

    rl.close();
  });


//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   rl.question('What do you think of Node.js? ', (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer}`);
  
//     rl.close();
//   });
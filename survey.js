const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('What do you think of Node.js? ', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
  
        rl.question(`What's your name? `, (answer) => {
            console.log(`Thankyou for your answer: ${answer}`);
    
                rl.question(`What's an activity you like doing? `, (answer) => {
                    console.log(`${answer}!!! sounds fun`);
            
                        rl.question(`What do you listen to while doing that? `, (answer) => {
                            console.log(`${answer} is an nice choice.`);
                    
                                rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (answer) => {
                                    console.log(`Great ${answer} is an acceptable choice.`);
                            
                                        rl.question(`What's your favourite thing to eat for that meal? `, (answer) => {
                                            console.log(`${answer} is quite and tempting choice.`);
                                    
                                                rl.question(`Which sport is your absolute favourite?`, (answer) => {
                                                    console.log(`${answer} is and Amazing sport!!!`);
                                            
                                                        rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (answer) => {
                                                            console.log(`That is quite a unique one.`);
                                                    
                                                        rl.close();
                                                        });
                                                
                                                });

                                        });

                                });

                        });

                });

        });

  });













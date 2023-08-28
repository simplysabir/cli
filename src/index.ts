#!/usr/bin/env node
import { Command } from 'commander';
import clc from 'cli-color';
//* Declare the program
const program = new Command();

//* Add actions onto that CLI

program
    .name('simplysabir')
    .description('portfolio of sabir khan.')
    .version('1.2.0')
    
    .action(() => {

        console.log(`\n${clc.red.bgWhite.underline("intro about me : ")}
        \n20-year-old CS undergrad from mumbai. I'm a full stack developer, web 3 developer, and a programmer. I'm also a member of Superteam.
        \ncurrently studying in my final year of CS B. Tech, I'm based out of mumbai, where I am honing my skills and deepening my understanding of the latest trends and technologies in the field of computer science.\n
        `);
        
        console.log(`\n${clc.red.bgWhite.underline("my experience : ")}
        \n${clc.black.bgWhite.underline("de_plan proto : June 2023 - Present")}
        \nWorked as a Full Stack Developer to\n
- Developed the API's
- Worked on Frontend App \n
Building the future of location-based applications through proto. Proto is a spatial data registry with decentralized proof-of-location and location-based services on the Solana blockchain
        `);

        console.log(`
        \n${clc.black.bgWhite.underline("splitwave : Feb 2023 - May 2023 ")}
        \nFounding Engineer and Blockchain Developer.
        \n I Have helped in : \n
- Getting Started from the Scartch.
- Helped in Building the Extension & xNFT for the dApp.
- Worked as a Founding Engineer. \n        `);

        console.log(`\n${clc.red.bgWhite.underline("here's all links related to me : ")}
        \nportfolio : https://simplysabir.vercel.app/
        \nportfolio : https://github.com/simplysabir
        \nsocial links : https://campsite.bio/simplysabir\n
        `);
    });

program.parse(process.argv);
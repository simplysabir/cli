#!/usr/bin/env node
import { Command } from 'commander';
import clc from 'cli-color';
//* Declare the program
const program = new Command();

//* Add actions onto that CLI

program
    .name('simplysabir')
    .description('portfolio of sabir khan.')
    .version('1.3.0')

    .action(() => {

        console.log(`\n${clc.red.bgWhite.underline("intro about me : ")}
        \nHi, I’m Sabir Khan. an 21 y/o highly curious internet craftsman optimizing for fun. enjoying development & blockchain. building beautiful experiences.
        `);

        console.log(`\n${clc.red.bgWhite.underline("my experience : ")}
        \n${clc.black.bgWhite.underline("de_plan proto : June 2023 - Present")}
        \nWorked as a Full Stack Developer to\n
- Developed the API's
- Worked on Frontend App \n
Building the future of location-based applications through proto. Proto is a spatial data registry with decentralized proof-of-location and location-based services on the Solana blockchain
        `);

        console.log(`
            \n${clc.black.bgWhite.underline("iknowspots : Aug 2023 - Oct 2023 ")}
            \nWorked as a Smart Contract & Backend Developer to\n
    - Developed Rust / Anchor Based Smart Contract From Scratch to provide the core functionality
    - Integrated the Contract in the Frontend\n   
    
    \nNFT tickets take flight, with RSVP escrow ensuring everything's just right. Easing up event management with RSVP Escrow. If you're organising an event and don't want people to ghost you, we got you\n`);

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
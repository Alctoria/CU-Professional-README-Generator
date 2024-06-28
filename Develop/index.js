// TODO: Include packages needed for this application

import {writeFile} from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input

const questions = [
    {
        "type": "input",
        "message": "What is the name of your project?",
        "name": "title"
    },
    {
        "type": "input",
        "message": "Please describe the project.",
        "name": "description"
    },
    {
        "type": "input",
        "message": "Please describe the installation instructions for the project.",
        "name": "installation"
    },
    {
        "type": "input",
        "message": "Please describe how to use the project.",
        "name": "usage"
    },
    {
        "type": "list",
        "message": "What license do you want to use for this project?",
        "name": "license",
        "choices": ["No license", "MIT", "ISC", "Apache 2.0", "GNU GPLv2", "GNU GPLv3", "GNU AGPLv3", "GNU LGPLv3", "Mozilla Public 2.0", "Boost Software 1.0", "The Unlicense"]
    },
    {
        "type": "input",
        "message": "Describe any credit you wish to attribute for the work done in this project.",
        "name": "credits"
    },
    {
        "type": "input",
        "message": "Please describe the contribution guidelines for the project.",
        "name": "contributing"
    },
    {
        "type": "input",
        "message": "Please describe the test instructions for the project.",
        "name": "tests"
    },
    {
        "type": "input",
        "message": "Please enter your github username.",
        "name": "github"
    },
    {
        "type": "input",
        "message": "Please enter your email address.",
        "name": "email"
    }
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    const license = generateMarkdown(data);

    //creation of the README.md format,

    // \n is used in the last credits in order to line skip
    // last writefile function is copied from the cu modules that we did in class

    const content = `
        # ${data.title}
        
        ## Description
        ${data.description} <br>
        ${license[0]}

        ## Table of Contents
        - [Installation](#installation)
        - [Usage](#usage)
        - [Credits](#credits)
        - [License](#license)

        ## Developer Notes:
        - This project creates the basic README.md page utilizing the inputs obtained in node.

        ## Installation
        ${data.installation}

        ## Usage
        ${data.usage}

        ## Credits
        ${data.credit}

        ## License
        ${license[1]}

        ## Contributing
        ${data.contributing}

        ## Tests
        ${data.tests}

        ## Questions
        For my other projects or to see my work that is mostly obtainable for public, please visit: https://github.com/${data.github}.\n
        For any other questions, please email me at ${data.email}.
        `
    writeFile(fileName, removeTabs(content), (err) => {
        err ? console.error("Error:", err) : console.log(`Success! Your README is in ${fileName}.`)
    });
}

//removal of tabs of the generated README.md (got help here from tutor)

function removeTabs(content) {

    let result = "";
    const lines = content.split('\n');

    for (const line in lines) {

        result += lines[line].slice(8);
        result += "\n"

    }
    return result;
}

// TODO: Create a function to initialize app

// copied exactly from the cu-module inquirer example

function init() {
    inquirer
        .prompt(questions)
        .then((responses) => writeToFile(`${responses.title}_README.md`, responses));
}


// Function call to initialize app

init();

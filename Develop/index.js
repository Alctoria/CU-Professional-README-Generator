// TODO: Include packages needed for this application


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
        "name": "credit"
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

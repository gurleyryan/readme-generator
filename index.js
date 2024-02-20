const inquirer = require("inquirer");
const fs = require("fs");

// README generation function
function writeToFile() {

}

// User prompts function
function init() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is your GitHub handle?",
                name: "github",
            },
            {
                type: "input",
                message: "What is your email?",
                name: "email",
            },
            {
                type: "input",
                message: "What is the title of your project?",
                name: "title",
            },
            {
                type: "input",
                message: "Add the description of your project:",
                name: "description",
            },
            {
                type: "input",
                message: "Add the installation instructions for your project:",
                name: "installation",
            },
            {
                type: "input",
                message: "Add the usage information for your project:",
                name: "usage",
            },
            {
                type: "input",
                message: "Add the contribution guidelines for your project:",
                name: "contribution",
            },
            {
                type: "input",
                message: "Add the test instructions for your project:",
                name: "test",
            },
            {
                type: "list",
                message: "Select the type of license you would like for your project:",
                choices: [
                    "MIT License",
                    "Apache License 2.0",
                    "GNU General Public License v3.0",
                    "Mozilla Public License 2.0",
                    "The Unlicense",
                ],
                name: "license",
            },
        ])
        .then((data) => {
            writeToFile("Professional-README.md", data);
        });
}

// Initialize
init();
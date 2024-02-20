const inquirer = require("inquirer");
const fs = require("fs");

// README generation function
function writeToFile(fileName, data) {
    var fileText = "";
    fileText += `${data.name}'s README\n\n`;
    fileText += ` # ${data.title}\n\n`;
    fileText += `## Table of Contents\n\n`;
    fileText += ` * [Description](#description)\n\n * [Installation](#installation)\n\n * [Usage-Information](#usage-information)\n\n * [Contribution-Guidelines](#contribution-guidelines)\n\n * [Test-Instructions](#test-instructions)\n\n * [License](#license)\n\n * [Questions](#questions)\n\n`;
    fileText += `## Description\n\n${data.description}\n\n`;
    fileText += `## Installation\n\n${data.installation}\n\n`;
    fileText += `## Usage\n\n${data.usage}\n\n`;
    fileText += `## Contributing\n\n${data.contribution}\n\n`;
    fileText += `## Tests\n\n${data.test}\n\n`;
    fileText += `## License\n\n${data.license}\n\n`;
    fileText += `## Questions\n\nHave additional questions? Contact me through my GitHub or email.\n\n`;
    fileText += `[Link to Github](https://github.com/${data.github})\n\n`;
    fileText += `<a href="mailto:${data.email}">${data.email}</a>\n\n`;
    fs.writeFile(fileName, fileText, (err) =>
        err ? console.error(err) : console.log("Success!")
    );
};

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
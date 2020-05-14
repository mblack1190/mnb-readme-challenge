const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown")

function getInfo() {
    inquirer.prompt([
        {
            type: "input",
            name: "githubName",
            message: "What is your github username?"
        },
        {
            type: "input",
            name: "projectName",
            message: "What is the name of your project?"
        },
        {
            type: "checkbox",
            message: "What technology does this use?",
            name: "stack",
            choices: [
                "HTML",
                "CSS",
                "JavaScript",
                "Node"
            ]
        },
        {
            type: "input",
            message: "Who worked on this project?",
            name: "authors"
        }
    ]).then(function (inquirerResponses) {
      writeToFile("README.md", generateMarkdown({... inquirerResponses}))
    })
}

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};
// function call to initialize program
getInfo();
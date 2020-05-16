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
            message: "What is your project title?"
        },
        {
            type: "input",
            name: "gitHubLink",
            message: "What is your gitHub link?"
        },
        {
            type: "input",
            message: "Describe your project.",
            name: "projectDescription"
        },
        {
            type: "list",
            message: "What would you like in your table of contents?",
            name: "tableOfContents",
            choices: ["Title",
                "Description",
                "Installation",
                "Usage",
                "License",
                "Contributors",
                "Tests",
                "Questions"
            ]
        },
        {
            type: "input",
            name: "installationInput",
            message: "What are any installation instructions?"
        },
        {
            type: "input",
            name: "usageInput",
            message: "What is pertinent usage information?"
        },
        {
            type: "list",
            name: "licenseChoices",
            choices: ["MIT License",
                "GNU License",
                "Apache License"
            ]
        },
        {
            type: "input",
            name: "contributorsInput",
            message: "Who were project contributors?"
        },

        {
            type: "input",
            name: "testingInput",
            message: "What testing needs to be done?"
        },
        {
            type: "input",
            name: "questionsInput",
            message: "For further questions:"
        },
        {
            type: "input",
            name: "emailAddress",
            message: "What email address would you like to be reached at?"
        }

    ]).then(function (inquirerResponses) {
        writeToFile("README.md", generateMarkdown({ ...inquirerResponses }))
    })
}

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};
// function call to initialize program
getInfo();
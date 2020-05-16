function generateMarkdown(data) {
    return `# "Title: "${data.projectName}
            # "Description: "${data.projectDescription}
            # "Table of Contents: "${data.tableOfContents}
            # "Installation guidelines: "${data.installationInput}
            # "This application is used for: "${data.usageInput}
            # "This application is licensed under: "${data.licenseChoices}
            # "Contributors: "${data.contributorsInput}
            # "Tests: "${data.testingInput}
            # "For questions you can reach us by: "${data.questionsInput}
            ### "E-mail: "${data.emailAddress}
            ### "GitHub Username: "${data.githubName}
            ### "GitHub Link: "${data.gitHubLink}
            
  `;
}

module.exports = generateMarkdown;
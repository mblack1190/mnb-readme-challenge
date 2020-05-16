function generateMarkdown(data) {
    return `#${data.projectName}
            #${data.projectDescription}
            #${data.tableOfContents}
            #${data.installationInput}
            #${data.usageInput}
            #${data.licenseChoices}
            #${data.contributorsInput}
            #${data.testingInput}
            #${data.questionsInput}
            ###${data.githubName}
            ###${data.gitHubLink}
            ###${data.emailAddress}
  `;
}

module.exports = generateMarkdown;
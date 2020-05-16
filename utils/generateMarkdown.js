function generateMarkdown(data) {
    return `# Title: ${data.projectName}
            
            # Description: 

                ${data.projectDescription}
            
            # Table of Contents: 
                * Title
                * Description
                * Table of Contents
                * Installation Guidelines
                * Usage
                * License
                * Contributors
                * Tests
                * Questions
            
            # Installation guidelines: 

                ${data.installationInput}
            # Usage: 

                This application is used for: ${data.usageInput}
            
            # License:

                This application is licensed under: ${data.licenseChoices}
            
            # Contributors: 

                ${data.contributorsInput}
            
            # Tests:

                ${data.testingInput}
            
            # Questions: 

                For questions you can reach us by:
                 **E-mail:** ${data.emailAddress}
                 **GitHub Username:** ${data.githubName}
                 **GitHub Link:** ${data.gitHubLink}
            
  `;
}

module.exports = generateMarkdown;
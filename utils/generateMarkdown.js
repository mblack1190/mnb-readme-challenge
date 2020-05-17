function generateMarkdown(data) {
    return `# Title: ${data.projectName}

## Description: 
    
${data.projectDescription}
            
## Table of Contents: 
* [Title](#title)
* [Description](#description)
* [Table of Contents](#table of contents)
* [Installation Guidelines](#installation guidelines)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)
            
## Installation guidelines: 

${data.installationInput}

## Usage: 

${data.usageInput}
            
## License:

This application is licensed under: ${data.licenseChoices}
            
## Contributors: 

${data.contributorsInput}
            
## Tests:

${data.testingInput}
            
## Questions: 

For questions you can reach us by:

**E-mail:** ${data.emailAddress}

**GitHub Username:** ${data.githubName}

**GitHub Link:** ${data.gitHubLink}
            
  `;
}

module.exports = generateMarkdown;
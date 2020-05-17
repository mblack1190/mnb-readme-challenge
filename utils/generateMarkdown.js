function generateBadge(licenseChoices) {
    if (licenseChoices == "GITHUB License") {
        return `![GitHub](https://img.shields.io/github/license/mblack1190/mnb-readme-generator)`
    } else if (licenseChoices == "NPM License") {
        return `![NPM](https://img.shields.io/npm/l/inquirer)`
}
}
function generateMarkdown(data) {
    return `# Title: ${data.projectName}

## Description: 
    
${data.projectDescription}

${generateBadge(data.licenseChoices)}

## Table of Contents: 
* [Title](#title)
* [Description](#description)
* [Table of Contents](#table-of-contents)
* [Installation Guidelines](#installation-guidelines)
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
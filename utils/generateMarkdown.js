function generateMarkdown(data) {
    return `# Title: ${data.projectName}

## Description: 
    
${data.projectDescription}
            
 ## Table of Contents: 
    * [Title](#Tile)
    * [Description](#Description)
    * [Table of Contents](#Description)
    * [Installation Guidelines](#Installation Guidelines)
    * [Usage](#Usage)
    * [License](#License)
    * [Contributors](#Contributors)
    * [Tests](#Tests)
    * [Questions](#Questions)
            
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
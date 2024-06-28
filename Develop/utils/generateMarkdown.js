// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string

function renderLicenseLink(license) {
  switch (license) {
    case "No license":
      return ""
    case  "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    case  "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
    case "Apache 2.0": 
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    case "GNU GPLv2":
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
    case "GNU GPLv3": 
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    case "GNU AGPLv3":
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
    case "GNU LGPLv3":
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
    case "Mozilla Public 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    case "Boost Software 1.0":
      return "[![License: Boost](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
    case "The Unlicense":
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseInfoLink(license) {
  switch (license) {
    case "No license":
      return ""
    case  "MIT":
      return "https://opensource.org/licenses/MIT"
    case  "ISC":
      return "https://opensource.org/licenses/ISC"
    case "Apache 2.0": 
      return "https://opensource.org/licenses/Apache-2.0"
    case "GNU GPLv2":
      return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
    case "GNU GPLv3": 
      return "https://www.gnu.org/licenses/gpl-3.0"
    case "GNU AGPLv3":
      return "https://www.gnu.org/licenses/agpl-3.0"
    case "GNU LGPLv3":
      return "https://www.gnu.org/licenses/lgpl-3.0"
    case "Mozilla Public 2.0":
      return "https://opensource.org/licenses/MPL-2.0"
    case "Boost Software 1.0":
      return "https://www.boost.org/LICENSE_1_0.txt"
    case "The Unlicense":
      return "http://unlicense.org/"
  }
  return "";
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// fun fact: IF STATEMENTS NEED THREE = SIGNS LOL
// struggled with the if function statement for a full hour


function renderLicenseSection(license) {
  if (license === "No license") {
    return "This application is not covered under a license. Please try again!"
  }
  const infoLink = renderLicenseInfoLink(license);
  return `This application is covered under the ${license} license.\n
          Please refer to this link for more information about this license: ${infoLink}`
}

// TODO: Create a function to generate markdown for README

export default function generateMarkdown(data) {
  return [renderLicenseLink(data.license), renderLicenseSection(data.license)];
}

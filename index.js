

const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your Project title?',
            name: 'projectTitle',
        }, {

            type: 'input',
            message: 'describe your read me?',
            name: 'description'
        },{

            type: 'input',
            message: 'what is the steps to installation ?',
            name: 'installation'
        },{

            type: 'input',
            message: 'what is this project going to be used for?',
            name: 'usage'
        },{
            type: 'input',
            message: 'Who are the contributors of this projects?',
            name:'contribution'
        }, {
            type: 'list',
            name: 'license',
            message: ' license the application is covered under?',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License'],
          },{
            type: "input",
            name: "tests",
            message: "Is there a test included?"
        },{
            type: "input",
            name: "questions",
            message: "What do I do if I have an issue? "
        }, {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        }, {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ]).then((response) => {
        console.log(response.projectTitle)
        fs.writeFile("READ.md", `# ${response.projectTitle}  \n# ${response.description} \n###  ${response.license}  \n### ${response.usage} \n### ${response.installation} \n### ${response.tests} \n ## ${response.questions} \n ## ${response.username} \n ## ${response.email} `, err => {
            if (err) throw err

        })
    })





const inquirer = require('inquirer');
const fs = require('fs');
// const jest = require('jest');

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const htmlTemplate = require('./src/generateHTML');
// const { off } = require('process');
// const Employee = require('./lib/Employee');
// const htmlCreate = require('./dist/team.html')

const employees = [];


const managerQs = [
    {
        type: "input",
        message: "Manager name:",
        name: "name"
    },
    {
        type: "input",
        message: "Manager ID:",
        name: "id"
    },
    {
        type: "input",
        message: "Manager Email:",
        name: "email"
    },
    {
        type: "input",
        message: "Manager Office Number:",
        name: "officeNumber"
    },
];

const internQs = [
    {
        type: "input",
        message: "Intern name:",
        name: "name"
    },
    {
        type: "input",
        message: "Intern ID:",
        name: "id"
    },
    {
        type: "input",
        message: "Intern Email:",
        name: "email"
    },
    {
        type: "input",
        message: "Intern School:",
        name: "school"
    },
];

const engineerQs = [
    {
        type: "input",
        message: "Engineer name:",
        name: "name"
    },
    {
        type: "input",
        message: "Engineer ID:",
        name: "id"
    },
    {
        type: "input",
        message: "Engineer Email:",
        name: "email"
    },
    {
        type: "input",
        message: "Engineer Github:",
        name: "github"
    },
];

const nextStep = [
    {
        type: "list",
        message: "What would you like to do next?",
        choices: [
            "Add an Engineer",
            "Add an Intern",
            "All done! Please generate my page <3"
        ],
        name: "nextStep"
    }
];

const init = (role) => inquire(role);

// MORE ABOUT SWITCH CASES: https://www.w3schools.com/js/js_switch.asp
async function inquire(role) {
    switch(role) {
        case 'Manager':
            questions = managerQs;
            break;
        case 'Engineer':
            questions = engineerQs;
            break;
        case 'Intern':
            questions = internQs;
            break;
    };

    const answers = await inquirer
        .prompt(questions)
        .then((answers) => {
            createEmployeeObject(role, answers);
            promptNextStep();
        });
};

const createEmployeeObject = (role, answers) => {
    // break separate variables
    const { name, id, email, officeNumber, school, github } = answers;

    // rebuild based on chosen role
    switch(role) {
        case 'Manager':
            employees.push(new Manager(name, id, email, officeNumber));
            break;
        case 'Intern':
            employees.push(new Intern(name, id, email, school));
            break;
        case 'Engineer':
            employees.push(new Engineer(name, id, email, github));
            break;
    };
};

async function promptNextStep() {
    const answers = await inquirer
        .prompt(nextStep)
        .then((answers) => {
            switch(answers.nextStep) {
                case 'Add an Engineer':
                    role = 'Engineer';
                    inquire(role);
                    break;
                case 'Add an Intern':
                    role = 'Intern';
                    inquire(role);
                    break;
                case 'All done! Please generate my page <3':
                    writeFile(htmlTemplate(employees))
            };
        });
};
// ask for manager info 
    // prompt user for data
        // THEN create and store an object for Manager
        // THEN ask what they would like to do next
    
// ask for engineer info
    // prompt user for data
            // THEN create and store an object for Engineer
            // THEN ask what they would like to do next
// ask for intern info 
    // prompt user for data
            // THEN create and store an object for Intern
            // THEN ask what they would like to do next

// ask what they'd like to do next
    // Add Engineer, Intern, or be done
        // IF add Engineer -> ask for Engineer info
        // IF add Intern -> ask for Intern info
        // IF be done -> build HTML page

// Use all collected employee data to build team.html
    // SWITCH CASE 
        // IF getRole() returns 
            // manager:
                // name
                // role
                // email
                // office number
            // intern: 
                // name
                // role
                // email
                // school
            // engineer:
                // name
                // role
                // email
                // github
        
init('Manager');
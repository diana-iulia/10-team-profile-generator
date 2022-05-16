// require node modules and lib files
const inquirer = require('inquirer');
const fs = require('fs');
// const jest = require('jest');
const buildHTML = require('')

// inquirer questions
const questions = [
    {
        name: name,
        type: input,
        question: "Employee Name:",
    },
    {
        name: id,
        type: input,
        question: "Employee ID:",
    },
    {
        type: input,
        name: email,
        question: "Employee Email:",
    },
    {
        type: list,
        name: role,
        question: ,
    },
    {
        type: input,
        name: officeNumber,
        question: ,
    },
    {
        type: ,
        name: github,
        question: ,
    },
    {
        type: ,
        name: school,
        question: ,
    },

]
// link html template 
const genHTML = require('./dist/template')

// link constructor folders (?) 
const employee = require('./lib/Employee');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');
const manager = require('./lib/Manager');

// const questions = 
const employees = [];

//actions need

function askForManagerInfo() {

    //prompt user for data 
    inquirer
        .prompt( /*questions*/)
        .then(( answers ) => {

            //then create and store an object for manager 
            employees.push( new manager( /* pass in inquirer data */  ) );

            //then ask "what would they like to do next?" 
            askForNextAction(); // DEFINE!
        })
}
//ask

function inquirer
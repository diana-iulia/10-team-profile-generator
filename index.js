const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');


const employees = [];
const createTeam = require('./dist/team.html')

const questions = [
    // console log "Welcome! Enter the information to build your team "

    // INPUT manager name 
    // INPUT manager id
    // INPUT manager email
    // INPUT manager office number

    // LIST which type of team member would you like to add?
    // ENGINEER
    // INTERN
    // I don't want to add anyone else 

    // if add engineer:
    // name, id, email, github username

    // if add intern:
    // name, id, email, school
]

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
        

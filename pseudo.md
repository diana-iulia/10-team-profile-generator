GIVEN a command-line application that accepts user input 
[]Inquirer 
[]Jest
[]fs

WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
[]template html file 
>[]link to template html file
[] teamArr empty array to push to in index.js

WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
[] holy shit what lmao
[] googling, that's what I need to do here

WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
[] template literal? 
<a href='http://www.github.com/`${data.github}`'>`${data.github}`</a>

WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
[] ` const managerQuestions = () => {
    return inquirer
    .prompt([
    {
        type: input,
        name: name,
        question: What is the team manager's name?,
        validate: ??
    },
    {
        type: input,
        name: id,
        question: What is the team manager's id?,
        validate: ??
    },
    {
        type: input,
        name: email,
        question: What is the team manager's email?,
        validate: ??
    },
    {
        type: input,
        name: officeNumber,
        question: What is the team manager's office number?,
        validation: ??
    },
    {
        type: ,
        name: ,
        question: ,
    },
    )
    .then (push manager to teamArray )
    
] 

`


WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

managerMenu 

WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
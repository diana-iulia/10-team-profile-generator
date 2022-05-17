let teamCards = [];
// const roleData = (employee) => {
//     role = employee.getRole();
//     switch (role) {
//         case 'Manager':
//             return `Office Phone: ${employee.getOffice()}`;
//         case 'Intern':
//             return `School: ${employee.getSchool()}`;
//         case 'Engineer':
//             return `Github: <a href="https://github.com/${employee.getGithub()}" target="_blank" rel="noopener noreferrer class="card-link">${employee.getGithub()}</a> `;
//     }
// }

// switch case above wasn't working :') 
function roleData(employees){
    if (employees.getRole() === 'Manager'){
        return `<a href="tel:${employees.getOffice()}" class="card-link">Call Me</a>`
    } else if (employees.getRole() === 'Intern'){
        return `<a href="https://www.google.com/search?q=${employees.getSchool()}" target="_blank" rel="noopener noreferrer" class="card-link">${employees.getSchool()}</a>`
    } else if (employees.getRole() === 'Engineer'){
        return `<a href="https://www.github.com/${employees.getGithub()}" target="_blank" rel="noopener noreferrer" class="card-link">${employees.getGithub()}</a>` 
    } 
}

function htmlTemplate(employees) {
    // console.log(employees)
    cardTemplate(employees);
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <title>my team</title>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <nav>
            <a>
                THE TEAM:
            </a>
        </nav>
        <main class="container-fluid">
            <div id="cardArray" class="row row-cols-4">
                ${teamCards}
            </div>
        </main>
    </body>
    </html>
    `
}

function cardTemplate(employees) {
    for ( var i=0; i<employees.length; i++ ){
        let card = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${employees[i].name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${employees[i].role}</h6>
                <p class="card-text">${employees[i].id}</p>
                <a href="mailto:${employees[i].email}" class="card-link">Send Email</a>
                ${roleData(employees[i])}
            </div>
        </div>
        `
        teamCards.push(card);
    } return
}

module.exports = htmlTemplate;
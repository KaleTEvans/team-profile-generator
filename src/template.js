const fs = require('fs');

const generateCards = cardInfo => {
    console.log(cardInfo);
    let cardText = ''
    cardInfo.forEach(object => {
        cardText = cardText + 
        `
                <div class='col-12 col-md-4 col-xl-4'>
                    <div class='card'>
                        <h2 class='name'>${object.getName()}</h2>
                        <h3 class='title'>${object.getRole()}</h3>
                        <div>
                            <div class='card'>
                                <h5>ID: ${object.getId()}</h5>
                            </div>
                            <div class='card'>
                                <h5>Email: <a href='mailto:${object.getEmail()}'>${object.getEmail()}</a></h5>
                            </div>
                            <div class='card'>
                                <h5>${determineExtraInfo(object)}</h5>
                            </div>
                        </div>
                    </div>
                </div>
        `;
    });
    return cardText;
}; 

// determine which information to provide
const determineExtraInfo = data => {
    if (data.getRole() === 'Manager') {
        return `Office: ${data.officeNumber}`;
    }
    if (data.getRole() === 'Engineer') {
        return `Github: <a href='${data.getGithub()}'>${data.getGithub()}</a>`;
    }
    if (data.getRole() === 'Intern') {
        return `School: ${data.getSchool()}`;
    }
}

const generatePage = templateData => {
    fs.writeFileSync('./dist/index.html', 
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="./style.css" />
        <title>Team Profile</title>
    </head>

    <body>
        <header>
            <h1>My Team</h1>
        </header>

        <main>
            <div class='employees'>
                <div class='row align-items-center'>
                    ${generateCards(templateData)}
                </div>
            </div>
        </main>
    </body>
    </html>
    `);
}

module.exports = { generatePage };
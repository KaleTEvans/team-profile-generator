const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

class employeeGenerator {
    constructor() {
        this.employees = [];
    }
    getManagerInfo() {
        inquirer.prompt([
            {
                type: 'text',
                name: 'name',
                message: "Enter the team manager's name",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a name');
                        return false;
                    }
                }
            },
            {
                type: 'number',
                name: 'id',
                message: "Enter the employee's ID number",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('Please enter a valid ID');
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'email',
                message: "Enter the employee's email address",
                validate: emailInput => {
                    if (emailInput.includes('@')) {
                        return true;
                    } else {
                        console.log('Please enter a valid email address');
                        return false;
                    } 
                }
            },
            {
                type: 'number',
                name: 'officeNumber',
                message: 'Enter the office number of the manager',
                validate: officeNumberInput => {
                    if (officeNumberInput) {
                        return true;
                    } else {
                        console.log('Please enter a valid office number');
                        return false;
                    }
                }
            }
        ]).then(({ name, id, email, officeNumber }) => {
            this.manager = new Manager(name, officeNumber);
            this.manager.id = id;
            this.manager.email = email;
            this.employees.push(this.manager);
            // Ask user which employee they would like to add
            this.getNewEmployeeInfo();
        })
    };

    getNewEmployeeInfo() {
        console.log(this.employees);
        inquirer.prompt([
            {
                type: 'list',
                name: 'newEmployee',
                message: 'To add another employee, select either Engineer or Intern, or select "EXIT" if you are finished.',
                choices: ['Engineer', 'Intern', 'EXIT']
            }
        ]).then(({ newEmployee }) => {
            if (newEmployee === 'Engineer') {
                // separating functions here for cleaner code
                return this.getNewEngineer();
            }
            if (newEmployee === 'Intern') {
                return this.getNewIntern();
            }
            else return;
        });
    };

    getNewEngineer() {
        inquirer.prompt([
            {
                type: 'text',
                name: 'name',
                message: "Enter the engineer's name",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a name');
                        return false;
                    }
                }
            },
            {
                type: 'number',
                name: 'id',
                message: "Enter the employee's ID number",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('Please enter a valid ID');
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'email',
                message: "Enter the employee's email address",
                validate: emailInput => {
                    if (emailInput.includes('@')) {
                        return true;
                    } else {
                        console.log('Please enter a valid email address');
                        return false;
                    } 
                }
            },
            {
                type: 'text',
                name: 'github',
                message: "Enter the Engineer's GitHub username",
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('Please enter a valid GitHub username');
                        return false;
                    }
                }
            }
        ]).then(({ name, id, email, github }) => {
            this.engineer = new Engineer(name, github);
            this.engineer.id = id;
            this.engineer.email = email;
            this.employees.push(this.engineer);
            // return to selection function
            this.getNewEmployeeInfo();
        });
    };

    getNewIntern() {
        inquirer.prompt([
            {
                type: 'text',
                name: 'name',
                message: "Enter the intern's name",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a name');
                        return false;
                    }
                }
            },
            {
                type: 'number',
                name: 'id',
                message: "Enter the employee's ID number",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('Please enter a valid ID');
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'email',
                message: "Enter the employee's email address",
                validate: emailInput => {
                    if (emailInput.includes('@')) {
                        return true;
                    } else {
                        console.log('Please enter a valid email address');
                        return false;
                    } 
                }
            },
            {
                type: 'text',
                name: 'school',
                message: "Enter the intern's school",
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log('Please enter a valid school');
                        return false;
                    }
                }
            }
        ]).then(({ name, id, email, school }) => {
            this.intern = new Intern(name, school);
            this.intern.id = id;
            this.intern.email = email;
            this.employees.push(this.intern);
            // return to new employee function
            this.getNewEmployeeInfo();
        })
    }
}

module.exports = employeeGenerator;
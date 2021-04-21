const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, github) {
        // call parent
        super(name);

        this.github = github;
    }

    getGithub() {
        if (this.github) {
            return `github.com/${this.github}`;
        }
        return false;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;
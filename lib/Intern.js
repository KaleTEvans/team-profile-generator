const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, school) {
        // call parent
        super(name);

        this.school = school;
    }

    getSchool() {
        if (this.school) {
            return this.school;
        }
        return false;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;
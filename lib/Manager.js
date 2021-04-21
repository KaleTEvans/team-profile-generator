const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, officeNumber) {
        // call parent
        super(name);

        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;
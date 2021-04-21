// create a constructor for the employee
class Employee {
    constructor(name, id, email) {
        this.name = name;

        this.id = id;
        this.email = email;
    }

    getName() {
        if (this.name) {
            return this.name;
        }
        return false;
    }

    getId() {
        if (this.id) {
            return this.id;
        }
        return false;
    }

    getEmail() {
        if (this.email) {
            return this.email;
        }
        return false;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;
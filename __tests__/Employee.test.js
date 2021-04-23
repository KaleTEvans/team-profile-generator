/* Employee parent class with the following properties:
    name
    id
    email
    getName()
    getId()
    getEmail()
    getRole() returns 'Employee'
*/

const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Mike');
    employee.id = 24;
    employee.email = 'mike@gmail.com';

    expect(employee.name).toBe('Mike');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Mike');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee id number', () => {
    const employee = new Employee('Mike');
    employee.id = 24;

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('Mike');
    employee.email = 'mike@gmail.com';

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('get employee role', () => {
    const employee = new Employee('Mike');

    expect(employee.getRole()).toBe('Employee');
})
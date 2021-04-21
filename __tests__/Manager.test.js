const { expect, test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Mike');

    expect(manager.name).toBe('Mike');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('get the manager role', () => {
    const manager = new Manager('Mike');

    expect(manager.getRole()).toBe('Manager');
})
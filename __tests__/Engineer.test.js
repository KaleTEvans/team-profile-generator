const { expect, test } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Mike');

    expect(engineer.name).toBe('Mike');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineer github', () => {
    const engineer = new Engineer('Mike');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test('gets engineer role', () => {
    const engineer = new Engineer('Mike');

    expect(engineer.getRole()).toBe('Engineer');
});
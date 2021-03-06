const { expect, test } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates a intern object', () => {
    const intern = new Intern('Mike');
    intern.id = 3;
    intern.email = 'mike@gmail.com';
    intern.school = 'University of Texas';

    expect(intern.name).toBe('Mike');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('get the school of the intern', () => {
    const intern = new Intern('Mike');
    intern.school = 'University of Texas';

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test('get the intern role', () => {
    const intern = new Intern('Mike');

    expect(intern.getRole()).toBe('Intern');
});
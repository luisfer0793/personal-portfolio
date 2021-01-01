import '@testing-library/jest-dom';

const person = {
  name: 'Fernando',
  age: 27
};

describe('Basic Test Suite', () => {
  test('Name must be Fernando', () => {
    expect(person.name).toBe('Fernando');
  });
});
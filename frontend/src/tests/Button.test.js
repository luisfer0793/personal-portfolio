import '@testing-library/jest-dom';

import { greet } from './Button';

describe('Common Functions', () => {
  test('Should return valid message', () => {
    const messsage = greet('World');
    const expectedMessage = 'Hello, World';
    expect(messsage).toBe(expectedMessage);
  });
});
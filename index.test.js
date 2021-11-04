const { getMethod } = require('./index.js');

describe('http getMethod tests', () => {

  test('calling getMethod with a GET request returns GET', () => {
    const actual = getMethod(
      'GET / HTTP/1.1\n\r' +
      'Host: example.com\n\r' +
      'Accept-Language: us-en');
    const expected = 'GET';
    
    expect(actual).toEqual(expected);
  });

  test('calling getMethod with a DELETE request returns DELETE', () => {
    const actual = getMethod(
      'DELETE / HTTP/1.1' +
      'Host: example.com' +
      'Accept-Language: us-en');
    const expected = 'DELETE';
    expect(actual).toEqual(expected);
  });
});

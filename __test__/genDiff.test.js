import { genDiff } from '../src/parsers';

test('genDiff with flat JSON files', () => {
  const data1 = {
    host: 'hexlet.io',
    timeout: 50,
    proxy: '123.234.53.22',
    follow: false,
  };

  const data2 = {
    timeout: 20,
    verbose: true,
    host: 'hexlet.io',
  };

  const expectedDiff = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

  expect(genDiff(data1, data2)).toBe(expectedDiff);
});

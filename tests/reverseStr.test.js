import reverseStr from '../scripts/reverseStr';

test('Returns string reversed', () => {
  expect(reverseStr('foo')).toMatch('oof');
});

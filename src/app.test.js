const { dayOfTheWeek, monthOfYear } = require('./app');

test('returns correct day', () => {
  expect(dayOfTheWeek(new Date('3/11/2020'))).toBe('Wednesday');
});

test('returns correct month', () => {
  expect(monthOfYear(new Date('3/11/2020'))).toBe('March');
});

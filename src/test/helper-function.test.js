import tester from '../js/helper-functions';

// Quick test to make sure jest works.
test('adds 1 + 2 to equal 3', () => {
  expect(tester.sum(1, 2)).toBe(3);
});

test('subtracts 2 - 2 to equal 0', () => {
  expect(tester.subtract(2, 2)).toBe(0);
});
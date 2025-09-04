const { getReply } = require('../chatbot');

test('greets on hello', () => {
  expect(getReply('Hello')).toBe("❌ Sorry, I don't know that yet. Try 'help' for examples.");
});

test('responds with correct Linux command', () => {
  expect(getReply('How to make file')).toBe('touch filename.txt');
});

test('handles nonsense', () => {
  expect(getReply('blahblah')).toBe("❌ Sorry, I don't know that yet. Try 'help' for examples.");
});

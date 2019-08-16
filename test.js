import test from 'ava';
import words from './words';
import strangerThings from '.';

test('return all words', t => {
	t.deepEqual(strangerThings.all, words);
});

test('return random word', t => {
	t.true(words.includes(strangerThings.random()));
});

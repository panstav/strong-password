const assert = require('power-assert');

const strongPassword = require('../index');

describe('StrongPassword', () => {

	it('Should default to a long password', () => {
		assert(strongPassword().length > 15);
	});

	it('Should default to various types of characters', () => {

		const outputPassword = strongPassword();

		Object.keys(strongPassword.charTypes).forEach(charTypeName => {
			assert(strongPassword.charTypes[charTypeName].split('').some(char => outputPassword.includes(char)));
		});

	});

	it('Should output a password of a desired length', () => {

		assert(strongPassword({ len: 10 }).length === 10);
		assert(strongPassword({ len: 20 }).length === 20);

	});

	it('Should show only letters as a simple password', () => {

		const outputPassword = strongPassword({ simple: true });

		assert(strongPassword.charTypes.letters.split('').some(char => outputPassword.includes(char)));
		assert(strongPassword.charTypes.numbers.split('').every(char => !outputPassword.includes(char)));
		assert(strongPassword.charTypes.symbols.split('').every(char => !outputPassword.includes(char)));

	});

});

describe('Module', () => {

	it('Should return result', () => {
		assert(typeof(strongPassword()) === 'string');
	});

	it('Should receive a callback and call it with result', () => {

		strongPassword({}, (err, result) => {
			assert(err === null);
			assert(typeof(result) === 'string')
		});

	});

});
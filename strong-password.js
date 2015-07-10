var defaults = require('defaults');

var chars = {
	letters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
	numbers: '0123456789',
	symbols: '`-=[]\\;\',./*+!@#$%^&*()_{}|:"<>?'
};

function randomPassword(options, callback){
	options = defaults(options, {
		len: 16,
		simple: false
	});

	var charsDisposal = [chars.letters];

	if (!options.simple){
		charsDisposal.push(chars.numbers);
		charsDisposal.push(chars.symbols);
	}

	var result = '';
	for (var i = 0, len = options.len; i < len; i++){

		var charType = charsDisposal[Math.round(Math.random() * (charsDisposal.length - 1))];
		result += charType[Math.round(Math.random() * (charType.length - 1))];

	}

	if (callback) callback(null, result);

	return result;
}

module.exports = randomPassword;
var defaults = require('defaults');

var chars = {
	letters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
	numbers: '0123456789',
	symbols: '`-=[]\\;\',./*+!@#$%^&*()_{}|:"<>?'
};

function randomPassword(options, callback){
	options = defaults(options, {
		len: 16,
		numbers: true,
		symbols: true
	});

	var charsDisposal = [chars.letters];
	if (options.numbers) charsDisposal.push(chars.numbers);
	if (options.symbols) charsDisposal.push(chars.symbols);

	var result = '';
	for (var i = 0, len = options.len; i < len; i++){

		var charType = charsDisposal[Math.round(Math.random() * (charsDisposal.length - 1))];
		result += charType[Math.round(Math.random() * (charType.length - 1))];

	}

	if (callback){
		callback(null, result);

	} else {
		return result;
	}
}

module.exports = randomPassword;
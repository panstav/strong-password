var chars = {
	letters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
	numbers: '0123456789',
	symbols: '`-=[]\\;\',./*+!@#$%^&*()_{}|:"<>?'
};

module.exports = randomPassword;
module.exports.charTypes = chars;

function randomPassword(options, callback){

	// set defaults options
	var options = options || {};
	var passlen = options.len || 16;
	var simple = options.simple || false;

	// collect relevant characters
	var charsInventory = [chars.letters];
	if (!simple){
		charsInventory.push(chars.numbers);
		charsInventory.push(chars.symbols);
	}

	// add up a password made up of random characters
	var result = '';
	while(result.length < passlen){

		// choose a random characters type
		var randomIndexForType = Math.round(Math.random() * (charsInventory.length - 1));
		var chosenType = charsInventory[randomIndexForType];

		// choose a random character of that type
		var randomIndexForChar = Math.round(Math.random() * (chosenType.length - 1));
		result += chosenType[randomIndexForChar];

	}

	// answer back
	if (callback) callback(null, result);
	return result;
}
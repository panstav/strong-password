#! /usr/bin/env node

var minimist = require('minimist');

var strongPassword = require('./strong-password');

var argv = minimist(process.argv.slice(2),{
	alias: {
		numbers: 'n',
		symbols: 's',
		len: 'l'
	},
	boolean: ['numbers', 'symbols']
});

console.log(strongPassword(argv));
process.exit(0);
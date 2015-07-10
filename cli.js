#! /usr/bin/env node

var minimist = require('minimist');

var strongPassword = require('./strong-password');

var argv = minimist(process.argv.slice(2),{
	alias: {
		simple: 's',
		len: 'l'
	},
	boolean: 'simple'
});

console.log(strongPassword(argv));

process.exit(0);
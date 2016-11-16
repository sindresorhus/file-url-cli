#!/usr/bin/env node
'use strict';
const meow = require('meow');
const fileUrl = require('file-url');

const cli = meow(`
	Usage
	  $ file-url [path]

	Example
	  $ file-url
	  file:///Users/sindresorhus/dev/file-url
`);

console.log(fileUrl(cli.input[0] || process.cwd()));

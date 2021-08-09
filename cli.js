#!/usr/bin/env node
import process from 'node:process';
import meow from 'meow';
import fileUrl from 'file-url';

const cli = meow(`
	Usage
	  $ file-url [path]

	Example
	  $ file-url
	  file:///Users/sindresorhus/dev/file-url
`, {
	importMeta: import.meta,
});

console.log(fileUrl(cli.input[0] || process.cwd()));

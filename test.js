import test from 'ava';
import execa from 'execa';

test(async t => {
	t.regex(await execa.stdout('./cli.js', ['test.jpg']), /file:\/\/\/.*\/test\.jpg/);
});

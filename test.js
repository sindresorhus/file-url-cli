import test from 'ava';
import execa from 'execa';

test('main', async t => {
	const {stdout} = await execa('./cli.js', ['test.jpg']);
	t.regex(stdout, /file:\/\/\/.*\/test\.jpg/);
});

test('numbered file', async t => {
	const {stdout} = await execa('./cli.js', ['123']);
	t.regex(stdout, /file:\/\/\/.*\/123/);
});

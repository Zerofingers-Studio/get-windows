const {inspect} = require('node:util');
const test = require('ava');
const {
	activeWindow,
	activeWindowSync,
	openWindows,
	openWindowsSync,
} = require('./index.js');

function asserter(t, result) {
	t.log(inspect(result));
	t.is(typeof result, 'object');
	t.is(typeof result.title, 'string');
	t.is(typeof result.id, 'number');
	t.is(typeof result.owner, 'object');
	t.is(typeof result.owner.name, 'string');
}

function asserterOpenWindows(t, result) {
	t.log(inspect(result));
	t.is(typeof result, 'object');
	t.is(typeof result.length, 'number');
	asserter(t, result[0]);
}

test('activeWindow', async t => {
	asserter(t, await activeWindow());
});

test('activeWindowSync', t => {
	asserter(t, activeWindowSync());
});

test('openWindows', async t => {
	asserterOpenWindows(t, await openWindows());
});

test('openWindowsSync', t => {
	asserterOpenWindows(t, openWindowsSync());
});

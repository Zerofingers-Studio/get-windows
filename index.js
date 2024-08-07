const process = require('node:process');
const {
	activeWindowSync: activeWindowSyncMacOS,
	openWindowsSync: openWindowsSyncMacOS,
} = require('./lib/macos.js');
const {
	activeWindowSync: activeWindowSyncLinux,
	openWindowsSync: openWindowsSyncLinux,
} = require('./lib/linux.js');
const {
	activeWindowSync: activeWindowSyncWindows,
	openWindowsSync: openWindowsSyncWindows,
} = require('./lib/windows.js');

async function activeWindow(options) {
	if (process.platform === 'darwin') {
		const {activeWindow} = require('./lib/macos.js');
		return activeWindow(options);
	}

	if (process.platform === 'linux') {
		const {activeWindow} = require('./lib/linux.js');
		return activeWindow(options);
	}

	if (process.platform === 'win32') {
		const {activeWindow} = require('./lib/windows.js');
		return activeWindow(options);
	}

	throw new Error('macOS, Linux, and Windows only');
}

function activeWindowSync(options) {
	if (process.platform === 'darwin') {
		return activeWindowSyncMacOS(options);
	}

	if (process.platform === 'linux') {
		return activeWindowSyncLinux(options);
	}

	if (process.platform === 'win32') {
		return activeWindowSyncWindows(options);
	}

	throw new Error('macOS, Linux, and Windows only');
}

async function openWindows(options) {
	if (process.platform === 'darwin') {
		const {openWindows} = require('./lib/macos.js');
		return openWindows(options);
	}

	if (process.platform === 'linux') {
		const {openWindows} = require('./lib/linux.js');
		return openWindows(options);
	}

	if (process.platform === 'win32') {
		const {openWindows} = require('./lib/windows.js');
		return openWindows(options);
	}

	throw new Error('macOS, Linux, and Windows only');
}

function openWindowsSync(options) {
	if (process.platform === 'darwin') {
		return openWindowsSyncMacOS(options);
	}

	if (process.platform === 'linux') {
		return openWindowsSyncLinux(options);
	}

	if (process.platform === 'win32') {
		return openWindowsSyncWindows(options);
	}

	throw new Error('macOS, Linux, and Windows only');
}

module.exports = {
	activeWindow,
	activeWindowSync,
	openWindows,
	openWindowsSync,
};

// Note to self: The `main` field in package.json is requried for pre-gyp.

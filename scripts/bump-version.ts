import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const packageJsonPath = join(process.cwd(), 'package.json');

function parseVersion(version: string): [number, number, number] {
	const parts = version.split('.').map(Number);
	return [parts[0], parts[1], parts[2]];
}

function formatVersion([major, minor, patch]: [number, number, number]): string {
	return `${major}.${minor}.${patch}`;
}

function incrementVersion(
	current: [number, number, number],
	type: 'major' | 'minor' | 'patch',
): [number, number, number] {
	const [major, minor, patch] = current;
	switch (type) {
		case 'major':
			return [major + 1, 0, 0];
		case 'minor':
			return [major, minor + 1, 0];
		case 'patch':
			return [major, minor, patch + 1];
	}
}

function determineVersionType(commitMessage: string): 'major' | 'minor' | 'patch' {
	const message = commitMessage.toLowerCase();
	
	if (message.includes('breaking change') || message.includes('!:')) {
		return 'major';
	}
	
	if (message.startsWith('feat')) {
		return 'minor';
	}
	
	return 'patch';
}

const commitMessage = process.argv[2] || '';

if (!commitMessage) {
	console.error('No commit message provided');
	process.exit(1);
}

const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
const currentVersion = parseVersion(packageJson.version);
const versionType = determineVersionType(commitMessage);
const newVersion = incrementVersion(currentVersion, versionType);
const newVersionString = formatVersion(newVersion);

packageJson.version = newVersionString;
writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, '\t') + '\n');

console.log(`Version bumped from ${formatVersion(currentVersion)} to ${newVersionString} (${versionType})`);


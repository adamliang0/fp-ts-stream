import { readFileSync } from 'node:fs';
import { join } from 'node:path';

export function getVersion(): string {
  const pkgPath = join(process.cwd(), 'package.json');
  const pkgJson = JSON.parse(readFileSync(pkgPath, 'utf8'));
  return pkgJson.version;
}
import type { Language, PackageManager } from '../types';
import { type IOType, execSync } from 'node:child_process';

interface InstallDepsProps {
  manager: PackageManager;
  dir: string;
  lang: Language;
  stdio: IOType;
}

const baseDependencies = ['', '', ''];

const dependencies = {
  js: {
    dependencies: baseDependencies,
  },
  ts: {
    dependencies: baseDependencies,
    devDependencies: ['@types/node', 'typescript'],
  },
};

export function installDeps({
  manager,
  dir,
  lang,
  stdio = 'pipe',
}: InstallDepsProps) {
  const depsCommand = `${manager} add ${dependencies[lang].dependencies.join(
    ' ',
  )}`;
  const devDepsCommand = `${manager} add ${dependencies.ts.devDependencies.join(
    ' ',
  )}`;

  execSync(depsCommand, { cwd: dir, stdio });

  if (lang == 'ts') {
    execSync(devDepsCommand, { cwd: dir, stdio });
  }
}
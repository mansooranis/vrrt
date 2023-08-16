#!/usr/bin/env node
console.log('Creating a new React Redux app in the current directory.');
import { execSync } from'child_process';
import path from 'path';
import fs from 'fs';

if (process.argv.length < 3) {
    console.log('You have to provide a name to your app.');
    console.log('For example :');
    console.log('    npx vrrt my-app');
    process.exit(1);
}

const projectName = process.argv[2];
const currentPath = process.cwd();
const projectPath = path.join(currentPath, projectName);
const git_repo = "git@github.com:mansooranis/react-redux.git";

try {
    fs.mkdirSync(projectPath);
  } catch (err) {
    if (err.code === 'EEXIST') {
      console.log(`The file ${projectName} already exist in the current directory, please give it another name.`);
    } else {
      console.log(error);
    }
    process.exit(1);
}
  async function main() {
    try {
      console.log('Downloading files...');
      execSync(`git clone --depth 1 ${git_repo} ${projectPath}`);

      process.chdir(projectPath);

      console.log('Installing dependencies...');

      console.log('Removing unused files...');
      execSync('npm i rimraf')
      execSync('npx rimraf ./.git');
      execSync('npm uninstall rimraf')
      fs.rm(path.join(projectPath, 'bin'), { recursive: true}, async (err) => {
        if (err) {
          console.log(err);
          return;
        };
      });

      console.log('The installation is done, this is ready to use !');
      console.log(`To use the application cd ${projectName}`);
      console.log('run yarn && yarn dev')

    } catch (error) {
      console.log(error);
    }
}
main();
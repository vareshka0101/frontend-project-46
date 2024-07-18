#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { Command } from 'commander';
import  { genDiff} from '../src/parsers.js';

const program = new Command();

program
  .version('0.0.1')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const diff = genDiff(filepath1, filepath2);
    console.log(diff);
  });

program.parse(process.argv);

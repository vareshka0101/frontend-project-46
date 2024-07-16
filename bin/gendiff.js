#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { Command } from 'commander';
import { parseFile, compareObjects } from '../src/parsers.js';

const program = new Command();

program
  .version('0.0.1')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const data1 = parseFile(filepath1);
    const data2 = parseFile(filepath2);

    console.log('File 1 data:', data1);
    console.log('File 2 data:', data2);

    const differences = compareObjects(data1, data2);
    console.log('Differences:', differences);
  });

program.parse(process.argv);


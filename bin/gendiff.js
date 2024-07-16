import program from 'commander';
import { parseFile } from './parsers';

program
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2) => {
    const file1 = parseFile(filepath1);
    const file2 = parseFile(filepath2);
  });

program.parse(process.argv);

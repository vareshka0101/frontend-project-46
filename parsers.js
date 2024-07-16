import fs from 'fs';
import path from 'path';

const parseFile = (filepath) => {
  const fullPath = path.resolve(process.cwd(), filepath);
  const fileContent = fs.readFileSync(fullPath, 'utf8');
  const fileExtension = path.extname(filepath).slice(1);

  switch (fileExtension) {
    case 'json':
      return JSON.parse(fileContent);
    default:
      throw new Error(`Unsupported file format: ${fileExtension}`);
  }
};

export { parseFile };

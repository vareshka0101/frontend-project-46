import fs from 'fs';
import path from 'path';

export const parseFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const fileContent = fs.readFileSync(absolutePath, 'utf-8');
  return JSON.parse(fileContent);
};

export const compareObjects = (obj1, obj2) => {
  const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
  const result = {};

  keys.forEach((key) => {
    if (obj1[key] !== obj2[key]) {
      result[key] = { value1: obj1[key], value2: obj2[key] };
    }
  });

  return result;
};

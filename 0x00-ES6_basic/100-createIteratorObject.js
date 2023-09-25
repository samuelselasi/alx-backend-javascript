export default function createIteratorObject(report) {
  const objectArray = [];
  for (const idx of Object.values(report.allEmployees)) {
    objectArray.push(...idx);
  }

  return objectArray;
}

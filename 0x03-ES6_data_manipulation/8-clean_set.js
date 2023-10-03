export default function cleanSet(set, startString) {
  let string = '';
  const array = [];

  if (startString && typeof startString === 'string') {
    for (const element of set) {
      if (element && element.startsWith(startString)) {
        array.push(element.slice(startString.length));
      }
    }
    string = array.join('-');
  }
  return string;
}

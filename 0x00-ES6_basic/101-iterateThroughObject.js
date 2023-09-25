/* eslint-disable radix */
export default function iterateThroughObject(reportWithIterator) {
  let value = '';

  for (const [idx, item] of Object.entries(reportWithIterator)) {
    value += `${item}`;

    if (parseInt(idx) !== reportWithIterator.length - 1) {
      value += ' | ';
    }
  }

  return value;
}

// module containing utils for spies
const sinon = require('sinon');

const Utils = {
  calculateNumber: (type, a, b) => {
    switch (type) {
      case 'SUM':
        return Math.round(a) + Math.round(b);
      case 'SUBTRACT':
        return Math.round(a) - Math.round(b);
      case 'DIVIDE':
        if (Math.round(b) === 0) return 'Error';
        return Math.round(a) / Math.round(b);
      default:
        throw new Error('Invalid type. Type must be SUM, SUBTRACT, or DIVIDE.');
    }
  },
  calculateNumberSpy: sinon.spy(),
};
module.exports = Utils;

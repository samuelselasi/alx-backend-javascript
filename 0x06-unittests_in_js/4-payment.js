// function that sums 2 Number args with the calculateNumber function
const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const sum = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${sum}`);
}
module.exports = sendPaymentRequestToApi;

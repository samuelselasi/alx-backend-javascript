// function that returns token from api
/* eslint-disable consistent-return */
function getPaymentTokenFromAPI(success) {
  if (success) {
    return new Promise((resolve) => {
      resolve({ data: 'Successful response from the API' });
    });
  }
  // Implicitly returns undefined for false
}

module.exports = getPaymentTokenFromAPI;

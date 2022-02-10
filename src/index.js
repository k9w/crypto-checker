import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CryptoChecker from './js/crypto.js';

function clearFields() {
  $('#search-field').val("");
  $('#show-currency').html("");
  $('#show-errors').html("");
}

function getElements(response) {
  console.log(response);
  if (!response.currency) {
    $('#show-errors').text(`Something else went wrong this time. Error: ${response}`);
    return;
  } else if (response.currency.length === 0) {
    $('#show-currency').text(`No currencies found.`);
  } else if (response.currency) {
    $('#show-currency').text(`Here is the description for ${response.currency}. ${response.currency.description}`);
  }
}

async function makeApiCall(currency) {
  let response = await CryptoChecker.getCurrency(currency);
  getElements(response);
}

$(document).ready(function() {
  $('#get-crypto').click(function() {
    let currency = $('#search-field').val();
    clearFields();
    makeApiCall(currency);    
  });  
});

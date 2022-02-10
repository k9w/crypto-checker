import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CryptoPedia from './js/crypto.js';

function clearFields() {
  $('#search-field').val("");
  $('#show-currency').html("");
  $('#show-errors').html("");
  $('#show-description').html("");
}

function getElements(response) {
  $('.book').hide();
  if (typeof response === "string") {
    $('#show-errors').text(`error on our end: ${response}`);
  } else if (!response[0]) {
    $('#show-errors').text(`error on your end: This currency doesn't exist. Try again!`);
    return;
  } else if (response[0]) {
    let image = "https://thumbs.dreamstime.com/b/abstract-thoughtful-doubting-woman-question-mark-girl-solves-problem-chooses-solution-concept-doubt-ignorance-167617958.jpg";
    
    if (response[0].logo_url != "") {
      response[0].logo_url = `<img src="${response[0].logo_url}" class="logo">`;
    }
    else {
      response[0].logo_url = `<img src="${image}" class="logo">`;
    }
    if (response[0].description === "") {
      response[0].description = "There is no description sadly";
    }

    $('#show-currency').html(`<h2>${response[0].name}</h2>${response[0].logo_url}`);
    $('#show-description').html(`<p id="description">${response[0].description}</p>`);
    $('.book').show();
  }
}

async function makeApiCall(currency) {
  let response = await CryptoPedia.getCurrency(currency);
  getElements(response);
}

$(document).ready(function() {
  $('#get-crypto').click(function() {
    let currency = $('#search-field').val().toUpperCase();
    clearFields();
    if (currency.length === 3) {
      makeApiCall(currency);
    } else {
      $('#show-errors').text(`You can only enter 3 characters, no more, no less.`);
    }
  });  
});

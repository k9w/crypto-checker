import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CryptoChecker from './js/crypto.js';

function clearFields() {
  $('').val("");
  $('').html("");
}

$(document).ready(function() {
  $('').submit(function(event) {
    event.preventDefault();
    // result = $('result').val();

    
    // $('.result').html("");
  });  
});


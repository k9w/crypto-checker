$(document).ready(function() {
  $('#dinoaur-form').submit(function(event) {
    event.preventDefault();
    result = $('result').val();

    let promise = Dinosaur.getDinoWords();
    promise.then(function(response) {
      const body = JSON.parse(response);

    }, function(error) {

    });
    
    
    $('.result').html("");
  });  
});


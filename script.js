
var moviesArray = [];
var btnRow = $('<span class="btnDelete btn btn-xs btn-danger lyphicon glyphicon-minus"></span>');
function movieObj(mov, dir) {
  this.movie = mov;
  this.director = dir;
}

$('#submit').click(function() {
  var movie = $('#title').val();
  var director = $('#director').val();
  if(movie.length == 0 || director.length == 0) {
    console.log('wrong');
  } else {
    $('table > tbody:last-child').append('<tr><td>' + movie + '</td><td>' + director + '</td><td></td></tr>');
    $('tbody td:last-child').append(btnRow);
    popCall();
    var newMovie = new movieObj(movie, director);
    moviesArray.push(newMovie);
    console.log(newMovie);
    console.log(moviesArray);
    // erase text from input popup
    $('#title').val("");
    $('#director').val("");
  }

});

// call event listener for delete btn
function popCall() {
  $('.btnDelete').click(function() {
    $('#modalPop').modal('show');

  });
}

var moviesArray = [];
var num;
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
    var newMovie = new movieObj(movie, director);
    moviesArray.push(newMovie);
    num = moviesArray.length;
    $('table > tbody:last-child').append('<tr><td>' + movie + '</td><td>' + director + '</td><td></td></tr>');
    var tdLast = $("tbody td").last();
    var btnRow = document.createElement('button');
    $(btnRow).addClass("btnDelete btn btn-xs btn-danger glyphicon glyphicon-minus");

  //  btnRow.id = 'btnDelete' + num;
    tdLast.append(btnRow);
    popCall();
    // erase text from input popup
    $('#title').val("");
    $('#director').val("");
  }

});

// call event listener for delete btn
function popCall() {
  for (var i = 0; i < moviesArray.length; i++) {
    $('.btnDelete').click(function() {
    var val = $(this).parent().parent().html();
    console.log(val);
      $('#modalPop').modal('show');
    });
  }
}

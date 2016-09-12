
var moviesArray = [];
var movieObj = $('tbody').children();
console.log(movieObj.length + movieObj.children().html());
var btnRow  = '<span class="btnDelete btn btn-xs btn-danger lyphicon glyphicon-minus"></span>';


$('#submit').click(function() {
  var movie = $('#title').val();
  var director = $('#director').val();
  if(movie.length == 0 || director.length == 0) {
    console.log('wrong');
  } else {
    $('table > tbody:last-child').append(
      '<tr><td>' + movie + '</td><td>' + director + '</td><td>' + btnRow + '</td></tr>');
    removeBtn();
    console.log(movie + " " + director);

    }

});


function removeBtn() {
  $('.btnDelete').click(function() {
    $(this).parent().parent().remove();
  });
}

removeBtn();

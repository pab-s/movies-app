var moviesArray = [];
var rowDelete;
var rowData;
function movieObj(mov, dir) {
  this.movie = mov;
  this.director = dir;
}

$('#submit').click(function() {
  var movie = $('#title').val();
  var director = $('#director').val();

    if (movie.length != 0 && director.length != 0) {
      // create new movie
      var newMovie = new movieObj(movie, director);
      moviesArray.push(newMovie);
      console.log(newMovie);
      // create table row, button and append data
      $('table > tbody:last-child').append('<tr><td>' + movie + '</td><td>' + director + '</td><td></td></tr>');
      var btnRow = document.createElement('button');
      var tdLast = $("tbody td").last();
      $(btnRow).addClass("btnDelete btn btn-xs btn-danger glyphicon glyphicon-remove");
      tdLast.append(btnRow);
      // call popup and clear inputs
      popCall();
      clearInput();
    }
});

// erase text from input popup
function clearInput() {
  $('#title').val("");
  $('#director').val("");
}

$('#cancel').click(function() {
  clearInput();
});

// call event listener for delete btn
function popCall() {
  $('.btnDelete').click(function() {
    rowDelete = $(this).parent().parent();
    rowData = $(this).parent().siblings().first().html();
    $('#movieTitle').html(rowData).addClass('text-danger');

      $('#modalPop').modal('show');

      $('#popDelete').click(function() {
        //filter array function
        function filterArray(obj) {
          if(rowData != obj.movie) {
            return true;
          }
        }
        moviesArray = moviesArray.filter(filterArray);
        rowDelete.remove();
        console.log(moviesArray);
      });
  });
}

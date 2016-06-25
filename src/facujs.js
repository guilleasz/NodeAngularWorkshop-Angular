
/*

window.document(' //track// ').
   // Marcar el track

   import './components/app/comments.html'
}
*/

$("#comments").on("click","button", function(){

  $.ajax({
    url:'comments/'+this.id,
    context: .post textarea.value
  }).done(function() {
    location.reload(); //reloadea todo?
  });

})

$('#comments tbody>tr').click(function(){

  $(this).addClass('marcado')
    $.get('comments/'+this.id,success(function(data){
      $('.comments-container').append(data)
    }))

  }
)
$.get('data',success(function(data){
  for(var key in data){
    $('#comments tbody>tr').append('<tr>'+data.band.name+'</tr><tr>'+data.band.foundationDate+'</tr><tr>'+data[key].band.endDate+'</tr>')
  }
}))

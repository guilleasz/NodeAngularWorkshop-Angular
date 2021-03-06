$("#home").on("click", ".banda", function(){
  $("#home").hide()
  $("#detail").empty()
  $("#detail").append("<div id=bandArtists>")
    $("#detail").append("<div id=bandAlbums>")
    var pi=$(this).attr("id")
  for(var i in data[pi].artists){
    var artista=data[pi].artists[i]
    var id=artista.firstName+artista.lastName
    $("#bandArtists").append("<div class=artista id="+id+">")
    $("#"+id).append("<img src="+artista.url+">")
    $("#detail").on("hover", ".artista", function(){
      var top=$(this).offset().top
      var left=$(this).offset().left+60

      var info=$("<div class=info id=info"+id+">").appendTo("#detail")

      info.css({
        top: top,
        left: left,
        position: "absolute"
      }).html("<p>"+artista.firstName+" "+artista.lastName+"</p>"+"<p>"+artista.birthdate+"</p>"+"<p>"+artista.instrument+"</p>")
    }, function(){
      $("#info"+id).remove()
    })

        }
    for(var i in data[pi].albums){
      var album=data[pi].albums[i]
      var id=album.name
        $("#bandAlbums").append("<div class=album id="+id+">")
        $("#"+id).append("<img src="+album.url+">")
        $("#detail").on("hover", ".album", function(){
          var top=$(this).offset().top
          var left=$(this).offset().left+60

          var info=$("<div class=info index="+i+" id=info"+id+">").appendTo("#detail")

          info.css({
            top: top,
            left: left,
            position: "absolute"
          }).html("<p>"+album.name+"</p>"+"<p>"+album.releaseDate+"</p>")
        }, function(){
          $("#info"+id).remove()
        })
    }
    $("#detail").on("click", ".album", function(){
      $("#comments").show()
      $("#home tbody").empty()
      var i=$(this).attr("index")
    for (var key in data[pi][i].tracks) {
       var track=data[pi][i].tracks[key]
       var tr= $("<tr id="+track.name+">").appendTo("#home tbody")
       tr.append("<th>"+track.name+"</th><th>"+Math.floor((Math.round((track.duration_ms)/1000))/60)+":"+(Math.round((track.duration_ms)/1000)%60"</th><th></th>")
    }
    })
})

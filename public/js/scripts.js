console.log('...loadedweee');
$(function(){
  init();
})

function init(){
  today();
  planet();

}


function today(){
  $('#day').on('click', function(e){
    e.preventDefault();
    $('#description').hide();
    $('#today').empty();
    var $data = $('#today');
    $data.show();
    $.ajax({
        url:'/profile/day',
        method: 'get',
        success: function(data){
          var $el = $('#today');
          $el.append( $('<h2>').text(data.title) )
          $el.append( $('<img>').attr('src', data.url) )
          $el.append( $('<p>').text(data.explanation) )
        }
    })
  })
}


function planet(){
  $('.planet-list').on('click', 'button', function(e){
    e.preventDefault();
    $('#description').show();
    $('#today').empty();
    var planet = this.id;
    $.ajax({
      url: '/api/planets/'+planet,
      method: 'get',
      success: function(data){
        console.log(data.Planet.title);
      $('#title').text(data.Planet.title);
      $('#info').text(data.Planet.info);
      $('#img img').attr('src', data.Planet.img);
      $('#stats').text(data.Planet.stats);
      $('#temp').text(data.Planet.temp);
      $('#size').text(data.Planet.size);
      $('#earthday').text(data.Planet.earthday);
      $('#earthyear').text(data.Planet.earthyear);
      $('#moon').text(data.Planet.moon);
      $('#type').text(data.Planet.type);
      $('#distance').text(data.Planet.distance);
      }
    })
  })
}

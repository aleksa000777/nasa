console.log('...loadedweee');
$(function(){
  // loadlogo();
  init();
})

function init(){
  today();
  planet();
  main();

}

function loadlogo(){
  $( "#main-page" ).delay( 5000 ).fadeIn( 2000 );
  $('#load').delay( 5000 ).fadeOut( 1000 );

}

function main(){
  $('#main').on('click', function(e){
    e.preventDefault();
    $('.solar-system').show();
    $('#description').hide();
    $('#container').empty();
    $('#today').empty();
  })
}


function today(){
  $('#day').on('click', function(e){
    e.preventDefault();
    $('.solar-system').hide();
    $('#description').hide();
    $('#container').empty();
    $('#today').empty();
    var $data = $('#today');
    $data.show();
    $.ajax({
        url:'/profile/day',
        method: 'get',
        success: function(data){
          var $el = $('#today');
          $el.append( $('<h2>').text(data.title) )
          $el.append( $('<iframe>').attr('src', data.url) )
          $el.append( $('<p>').text(data.explanation) )
        }
    })
  })
}


// var img = '';
function planet(){
  $('.planet-list').on('click', 'img', function(e){
    e.preventDefault();
    $('.solar-system').hide();
    $('#description').show();
    $('#today').empty();
    $('#container').empty();
    var planet = this.id;
    $.ajax({
      url: '/api/planets/'+planet,
      method: 'get',
      success: function(data){
        // img = data.Planet.img
        console.log(data.Planet.title);
      $('#title').text(data.Planet.title);
      $('#info').text(data.Planet.info);
      // $('#img img').attr('src', data.Planet.img);
      $('#stats').text(data.Planet.stats);
      $('#temp').text(data.Planet.temp);
      $('#size').text(data.Planet.size);
      $('#earthday').text(data.Planet.earthday);
      $('#earthyear').text(data.Planet.earthyear);
      $('#moon').text(data.Planet.moon);
      $('#type').text(data.Planet.type);
      $('#distance').text(data.Planet.distance);


      createsphere(data.Planet.title);
      style="background: url('./images/image.jpg')"
      $('canvas').css("background-image: url('../img/space.jpg')")
      }
    })
  })
}

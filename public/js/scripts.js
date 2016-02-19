console.log('...loadedweee');
$(function(){
  loadlogo();
  init();
})

function init(){
  today();
  planet();
  main();
  active_planet();

}

function loadlogo(){
  $( "#main-page" ).stop().delay( 5000 ).fadeIn( 2000 );
  $('#load').stop().delay( 5000 ).fadeOut( 1000 );
  $("#load").empty();

}



function main(){
  $('#main').on('click', function(e){
    e.preventDefault();
    $('.solar-system').show();
    $('#title,#info,#stats,#temp,#size,#earthday,#earthyear,#moon,#type,#distance').empty();
    $('#container').empty();
    $('#today').empty();
  })
}


function today(){
  $('#day').on('click', function(e){
    e.preventDefault();
    $('.solar-system').hide();
    // $('#description').hide();
    console.log('click happend');
    $('#title,#info,#stats,#temp,#size,#earthday,#earthyear,#moon,#type,#distance').empty();
    $('#container').empty();
    $('#today').empty();
    var $data = $('#today');
    $data.show();
    $.ajax({
        url:'/profile/day',
        method: 'get',
        success: function(data){
          var $el = $('#today');
          $el.append( $('<h1>').text(data.title) )
          if(data.media_type==="video"){
            $el.append( $('<iframe>').attr('src', data.url).attr('id','video-day') );
          }
          else{
            $el.append( $('<img>').attr('src', data.hdurl).attr('id','img-day').attr('scrolling', "no" ) );
          }
          $el.append( $('<p>').text(data.explanation) )
        }
    })
    console.log('ajax came throw');
  })
}


function planet(){
  $('.solar-system').on('click', 'img', function(e){
    e.preventDefault();
    $('.solar-system').hide();
    $('#today').empty();
    $('#container').empty();
    var planet = this.id;
    $.ajax({
      url: '/api/planets/'+planet,
      method: 'get',
      success: function(data){
      $('#title').append( $('<h1>').text(data.Planet.title) );
      $('#info').text(data.Planet.info);
      $('#stats').append($('<h4>').text('Facts:')).append($('<p>').text(data.Planet.stats));
      $('#temp').append( $('<img>').attr('src', '../img/icons/therm2.png') ).append( $('<p>').text(data.Planet.temp));
      $('#size').append( $('<img>').attr('src', '../img/icons/size.png') ).append( $('<p>').text(data.Planet.size));
      $('#earthday').append( $('<h4>').text('Earth times equals 1 day-night:')).append( $('<p>').text(data.Planet.earthday));
      $('#earthyear').append( $('<h4>').text('Earth times equals 1 year:')).append( $('<p>').text(data.Planet.earthyear));
      $('#moon').append($('<h4>').text('Moons:')).append($('<p>').text(data.Planet.moon));
      $('#type').append($('<h4>').text('Type:')).append($('<p>').text(data.Planet.type));
      $('#distance').append( $('<img>').attr('src', '../img/icons/distance.png') ).append( $('<p>').text(data.Planet.distance) );

      createsphere(data.Planet.title);
      }
    })
  })
}


//hover planet selector
function active_planet(){
    $('.planet-list li img, img#Sun, img#main, img#day')
        .hover(function() {
            $(this).stop().animate({
              opacity: '0.8',
              borderWidth: "2px",
          }, 'fast');
        }, function() {
            $(this).stop().animate({
              opacity: '1',
              borderWidth: "0px",
            }, 'fast');
        });
};

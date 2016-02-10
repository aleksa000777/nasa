console.log('...loadedweee');
$(function(){
  // loadlogo();
  init();
})

function init(){
  today();
  planet();
  main();
  iframe();
  starsun();

}

function loadlogo(){
  $( "#main-page" ).delay( 5000 ).fadeIn( 2000 );
  $('#load').delay( 5000 ).fadeOut( 1000 );

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
function iframe(){
    $('iframe').load(function(){$(this).height($(this).contents().outerHeight());$(this).width($(this).contents().outerWidth());});
}

function today(){
  $('#day').on('click', function(e){
    e.preventDefault();
    $('.solar-system').hide();
    // $('#description').hide();
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
          $el.append( $('<h2>').text(data.title) )
          $el.append( $('<iframe>').attr('src', data.hdurl).attr('id','img-day').attr('scrolling', "no" ) );
          $el.append( $('<p>').text(data.explanation) )
        }
    })
  })
}

function starsun(){
  $('.sun').on('click','img', function(e){
    e.preventDefault();
    $('.solar-system').hide();
    $('#today').empty();
    $('#container').empty();
    var starSun = this.id;
    console.log(starSun,'sunnnnn');
    createsphere(starSun);
  })
}

function planet(){
  $('.planet-list').on('click', 'img', function(e){
    e.preventDefault();
    $('.solar-system').hide();
    $('#today').empty();
    $('#container').empty();
    var planet = this.id;
    $.ajax({
      url: '/api/planets/'+planet,
      method: 'get',
      success: function(data){
      $('#title').append( $('<h2>').text(data.Planet.title) );
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

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
    $('#planet').text('');
    var $data = $('#today')
    $data.toggle();
  })
}

function planet(){
  $('.planet-list').on('click', 'button', function(e){
    e.preventDefault();
    $('#today').hide();
    var planet = this.id;
    $('#planet').text(planets[planet].info);

  })
}

console.log('...loadedweee');
$(function(){
  init();
})

function init(){
  today();
  console.log(planets.mercury);
  planet();

}


function today(){
  $('#day').on('click', function(e){
    e.preventDefault();
    console.log('clicked');
    var $data = $('#today')
    $data.toggle();
  })
}

function planet(){
  $('.planet-list').on('click', 'button', function(e){
    e.preventDefault();
    console.log('heeer');
    var planet = this.id;  
    $('#planet').text(planets[planet].info)
  })
}

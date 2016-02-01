console.log('...loaded');
$(function(){
  init();
})

function init(){
  example();
}


function example(){
  $('#day').on('click', function(e){
    e.preventDefault();
    console.log('clicked');
    // var secretkey = process.env.SECRETACCESSKEY
    var demo_key="DEMO_KEY"
    var url = "https://api.nasa.gov/planetary/apod?api_key="+demo_key;

    $.ajax({
      url: url,
      success: handleResult
    });
    function handleResult(result){
      if("copyright" in result) {
        $("#copyright").text("Image Credits: " + result.copyright);
      }
      else {
        $("#copyright").text("Image Credits: " + "Public Domain");
      }

      if(result.media_type == "video") {
        $("#apod_img_id").css("display", "none");
        $("#apod_vid_id").attr("src", result.url);
      }
      else {
        $("#apod_vid_id").css("display", "none");
        $("#apod_img_id").attr("src", result.url);
      }
      $("#reqObject").text(url);
      $("#returnObject").text(JSON.stringify(result, null, 4));
      $("#apod_explaination").text(result.explanation);
      $("#apod_title").text(result.title);
    }

  })
}


function randomColor() {
  $.ajax({
    url: 'http://localhost:3000/colors',
    type: 'GET',
    success: function(object) {
      console.log(object.color);
      $(`#${object.pos}`).css('background', object.color)
    }
  })
}

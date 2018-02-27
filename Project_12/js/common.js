$(document).ready(function () {
    $(".range-slider").asRange({
        step: 1,
        limit: true,
        range: false,
        min: 10,
        max: 1000,
        format: function(value) {
          return value + '$';
      },
      onChange: function(value) {
          $('<div> <span>value: </span>' + value[0] + '-' + value[1] + '</div>').prependTo($('.content'));
      }
  });  
});
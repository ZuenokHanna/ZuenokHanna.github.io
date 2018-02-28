$(document).ready(function () {

function getSliderValue(value) {

var arr = [{min: 10, max: 100, minLabel: 0, maxLabel: 0}, {min: 100, max: 250, minLabel: 0, maxLabel: 0}, {min: 250, max: 500, minLabel: 0, maxLabel: 0}, {min: 500, max: 600, minLabel: 0, maxLabel: 0}, {min: 600, max: 750, minLabel: 0, maxLabel: 0}, {min: 750, max: 850, minLabel: 0, maxLabel: 0}, {min: 850, max: 900, minLabel: 0, maxLabel: 0}, {min: 900, max: 1000, minLabel: 0, maxLabel: 0}];


  if (!$('.asRange-pointer_active').length) {
    return arr[0]['min'];
  }

  
  if (value === arr[arr.length - 1]['max']) {
    return arr[arr.length - 1]['max'];
  }

  if ($('.asRange-pointer_active').position().left === 0) {
    return arr[0]['min'];
  }
  
  var currentPos = [],
      $pointer = $('.asRange-pointer_active'),
      pointerOffset = $pointer.offset(),
      pointerCenter = pointerOffset.left + $pointer.width() / 2;

    $('.price-box > ul li').each(function () {     

      currentPos.push($(this).offset().left + $(this).width() / 2)

    });

  for (var i =0; i < arr.length; i++) {
    arr[i]['minLabel'] = currentPos[i]
    arr[i]['maxLabel'] = currentPos[i + 1]
  }
  

  for (var i =0; i < currentPos.length; i++) {

    if (currentPos[i] <= pointerCenter && (!currentPos[i+1] || currentPos[i+1] >= pointerCenter)) {

      if (!arr[i]) {
        return arr[arr.length - 1]['max'];
      }

       var rate = (arr[i]['max'] - arr[i]['min']) / (arr[i]['maxLabel'] - arr[i]['minLabel']);

        return parseInt(arr[i]['min'] + rate * (pointerCenter - arr[i]['minLabel']));
    }
  }
}

 $(".range-slider").asRange({
        step: 1,
        limit: true,
        range: false,
        min: 10,
        max: 1000,
        format: function(value) {
          return getSliderValue(value)  + '$';
      },
      onChange: function(value) {
          $('<div> <span>value: </span>' + value[0] + '-' + value[1] + '</div>').prependTo($('.content'));
      }
  });   
 
});
$(function(){
  $('#typo').on('mouseover', function(){
    $('#typo').css({
      'color': '#ebc000',
      'background-color': '#ae5e9b'
    });
  });
    $('#typo').on('mouseout', function(){
      $('#typo').css({
        'color': '',
        'background-color': ''
      });
  });
});

 $(document).ready(function () {
  let ctn = 0
  let timer
  $('button').click(function () {
    if(timer) {
      clearInterval(timer)
      timer = null;

      $('button').text('Start')
      
    } else {
      timer = setInterval(function () {
        ctn += 1
      $( '#seconds').text(Math.floor(ctn/10))
      $('#running').slideUp();
      $('#running').slideDown();
      $('.dots div:last-child').prependTo($('.dots'))
      }, 1)

      $('button').text('Stop')
      
    }
    
    });
  });

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('create-element').addEventListener('click', function() {
    const timeDiv = document.createElement('div');

    timeDiv.className ='time'
    timeDiv.textContent = (new Date()).toString();
    document.querySelector('.right').appendChild(timeDiv);

  });

  document.getElementById('reset-inner-html').addEventListener('click', function() {
    document.querySelector('.right').innerHTML = '<div class="title">如假包換</div>';
  })

  
  document.getElementById('remove').addEventListener('click', function() {
    const lastTimeDev = document.querySelector('.right .time:last-child')
    if (lastTimeDev) {
      lastTimeDev.remove()
    }
  })

  document.getElementById('create-element-insert-adjacent').addEventListener('click', function() {

    const timeDiv = document.createElement('div');

    timeDiv.className ='time'
    timeDiv.textContent = (new Date()).toString();

    document.querySelector('.title').insertAdjacentElement('afterend', timeDiv);
  } )
});

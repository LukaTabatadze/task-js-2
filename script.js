document.addEventListener('DOMContentLoaded', function() {
    const blueBtn = document.getElementById('blueBtn');
    const greenBtn = document.getElementById('greenBtn');
  
    blueBtn.addEventListener('click', function() {
      document.body.style.backgroundColor = 'blue';
    });
  
    greenBtn.addEventListener('click', function() {
      document.body.style.backgroundColor = 'green';
    });
  });
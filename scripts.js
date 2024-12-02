document.addEventListener('DOMContentLoaded', function () {
    const radioButtons = document.querySelectorAll('input[type="radio"][name="bundle"]');
    const allContents = document.querySelectorAll('.box-content');
  
    radioButtons.forEach((radio, index) => {
      radio.addEventListener('change', function () {
        allContents.forEach(content => content.classList.remove('active'));
        const selectedContent = allContents[index];
        selectedContent.classList.add('active');
      });
    });
  });
  
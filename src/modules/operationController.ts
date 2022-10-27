const keys = document.querySelectorAll('.key-text') as NodeList;

keys.forEach((key) => {
  key.addEventListener('click', (e) => {

    console.log(e.target) 
  });
});

const keys = document.querySelectorAll('.key') as NodeList;

keys.forEach((key) => {
  key.addEventListener('click', (e) => {
    console.log(key) 
  });
});

const track = document.querySelector('.track') as HTMLDivElement;

track.addEventListener('click', (e: Event) => {
  const elem = e.target as HTMLDivElement;
  const position: string = elem.getAttribute('data-position')!;

  switch (position) {
    case '1': {
        break;
    }
    case '2': {
        break;
    }
    case '3': {
      break;  
    }
    default :
  }
});

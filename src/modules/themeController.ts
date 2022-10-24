const track = document.querySelector('.track') as HTMLDivElement;

track.addEventListener('click', (e: Event) => {
  const elem = e.target as HTMLDivElement;
  const position: string = elem.getAttribute('data-position')!;
  reposition(elem, position);
});

const reposition = (elem: HTMLDivElement, position: string): void => {
  switch (position) {
    case '1': {
      elem.style.left = '27px';
      elem.setAttribute('data-position', '2');
      break;
    }
    case '2': {
      elem.style.left = '51px';
      elem.setAttribute('data-position', '3');
      break;
    }
    case '3': {
      elem.style.left = '3px';
      elem.setAttribute('data-position', '1');
      break;
    }
    default:
      elem.style.left = '3px';
      elem.setAttribute('data-position', '1');
  }
};

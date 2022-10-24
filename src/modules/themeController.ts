const track = document.querySelector('.track') as HTMLDivElement;

track.addEventListener('click', (e: Event) => {
  const elem = e.target as HTMLDivElement;
  const theme: string = elem.getAttribute('data-display')!;
  reposition(elem, theme);
});

const reposition = (elem: HTMLDivElement, theme: string): void => {
  switch (theme) {
    case 'dark': {
      elem.style.left = '27px';
      elem.setAttribute('data-position', 'light');
      break;
    }
    case 'light': {
      elem.style.left = '51px';
      elem.setAttribute('data-position', 'purple');
      break;
    }
    case 'purple': {
      elem.style.left = '3px';
      elem.setAttribute('data-position', 'dark');
      break;
    }
    default:
      elem.style.left = '3px';
      elem.setAttribute('data-position', 'dark');
  }
};

function updateLocalStorage(theme: string, position: string): void {
  localStorage.setItem('theme', JSON.stringify({ theme, position }));
}

// DOM Reference to the theme changer element
const trackRail = document.querySelector('.track-rail') as HTMLDivElement;
const track = trackRail.firstElementChild as HTMLDivElement;

/**
 * Event Listener attached to the div element
 * by the .track class to listen for click event
 * in order to change displaying theme
 */
trackRail.addEventListener('click', (e: Event) => {
  const theme: string = track.getAttribute('data-display')!;
  switchTheme(track, theme);
});

/**
 * Function receives following parameters
 * @param elem
 * @param theme
 * check for the current theme and change
 * the theme to the next theme predefined
 */
const switchTheme = (
  elem: HTMLDivElement,
  theme: string | null = 'dark'
): void => {
  const root = document.querySelector(':root') as HTMLBodyElement;
  switch (theme) {
    case 'dark': {
      elem.style.left = '27px';
      elem.setAttribute('data-display', 'light');
      root.setAttribute('data-color-scheme', 'light');
      updateLocalStorage('dark');
      break;
    }
    case 'light': {
      elem.style.left = '51px';
      changeAttribute(elem, 'data-display', 'purple');
      changeAttribute(root, 'data-color-scheme', 'purple');
      updateLocalStorage('light');
      break;
    }
    case 'purple': {
      elem.style.left = '3px';
      changeAttribute(elem, 'data-display', 'dark');
      changeAttribute(root, 'data-color-scheme', 'dark');
      updateLocalStorage('purple');
      break;
    }
    default:
      elem.style.left = '3px';
      changeAttribute(elem, 'data-display', 'dark');
      changeAttribute(root, 'data-color-scheme', 'dark');
      updateLocalStorage('dark');
  }
};

/**
 * Update the local storage @calcTheme item value
 * with the @param theme  value and update local storage
 * for later usage
 */
function updateLocalStorage(theme: string): void {
  localStorage.setItem('calcTheme', theme);
}

/**
 * This function receive three following parameters
 * @param elem
 * @param attr
 * @param value
 * then change specified element's attribute with
 * provided value for attribute.
 */
function changeAttribute(elem: HTMLElement, attr: string, value: string): void {
  elem.setAttribute(attr, value);
}

window.addEventListener('load', () => {
  const theme = localStorage.getItem('calcTheme')
    ? localStorage.getItem('calcTheme')
    : 'dark';
  switchTheme(track, theme);
});

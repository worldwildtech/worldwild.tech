import { Store } from 'svelte/store.js';

export const store = new Store({
  name: 'world',
  page: 'homepage'
});

store.on('state', ({changed, current}) => {
  /**** Routing event */
  if (changed.page) location.hash = `#${current.page}`;
})
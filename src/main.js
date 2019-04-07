import App from './App.html';
import { store } from './data/state-management/store';

const app = new App({
	target: document.body.querySelector('#app'),
	store
});

export default app;
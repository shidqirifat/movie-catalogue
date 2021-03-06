/* eslint-disable no-console */
import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import CONFIG from './globals/config';
import WebSocketInitiator from './utils/websocket-initiator';

const app = new App({
  button: document.getElementById('hamburgerButton'),
  drawer: document.getElementById('navigationDrawer'),
  content: document.getElementById('mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
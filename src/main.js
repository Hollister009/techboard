import App from './App.js';

const app = document.getElementById('app');

const fetchData = async () => {
  window.data = await fetch('./src/data.json').then((res) => res.json());
};

App.render(app, fetchData);

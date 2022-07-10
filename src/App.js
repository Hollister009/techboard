import Grid from './Grid.js';

export default class App {
  static async render(root, fetchData) {
    await fetchData();

    root.innerHTML = `
      <main>
        <div class="container">
          <h1>Techboard:</h1>
          <div id="grid"/>
        </div>
      </main>
    `;

    const grid = document.getElementById('grid');

    new Grid({ root: grid });
  }
}


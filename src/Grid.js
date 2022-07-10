import Cell from './Cell.js';

export default class Grid {
  constructor({ root }) {
    this.data = window.data || [];
    this.root = root;

    this.state = this.data.map((item) => [item, null, null, null, null]);

    this.render();
  }

  renderRow(row = []) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('row');

    const content = row.map((item) => new Cell(item).element);
    wrapper.append(...content);

    return wrapper;
  }

  render() {
    const allRows = this.state.map((row) => this.renderRow(row));
    this.root.append(...allRows);
  }
}

export default class Cell {
  element;

  constructor(item = null) {
    this.item = item;
    
    this.render();
  }

  render() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('cell');

    wrapper.innerHTML = `
      <div class="cell__inner">${this.item?.name || 'empty'}</div>
    `;

    this.element = wrapper;
  }
}

import Item from './Item.js';

export default class Cell {
  element;

  constructor(item = null) {
    this.item = item;
    this.render();
    this.initEventListeners();
  }

  render() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('cell');

    if (this.item) {
      const item = new Item(this.item);
      wrapper.append(item.element);
    } else {
      wrapper.innerHTML = '<div class="cell__inner">empty</div>';
    }

    this.element = wrapper;
  }

  initEventListeners() {
    this.element.addEventListener('dragover', this.dragOver);
    this.element.addEventListener('dragLeave', this.dragLeave);
    this.element.addEventListener('drop', this.dragDrop);
  }

  dragOver(e) {
    e.preventDefault();
    console.log('drag over');
  }

  dragEnter(e) {
    e.preventDefault();
    console.log('drag leave');
  }

  dragLeave() {
    console.log('drag leave');
  }

  dragDrop() {
    this.className = 'empty';
  }
}

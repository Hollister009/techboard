export default class Item {
  element;

  constructor(item = null) {
    this.item = item;

    this.render();
    this.initEventListeners();
  }

  render() {
    const wrapper = document.createElement('div');
    const textNode = document.createTextNode(this.item?.name ?? '');

    wrapper.classList.add('item');
    wrapper.setAttribute('draggable', 'true');
    wrapper.append(textNode);

    this.element = wrapper;
  }

  initEventListeners() {
    this.element.addEventListener('dragstart', this.dragStart);
    this.element.addEventListener('dragend', this.dragEnd);
  }

  dragStart() {
    this.className += ' hold';
    setTimeout(() => {
      this.className = 'invisible';
    });
  }

  dragEnd() {
    this.className = 'item';
  }
}

export default class Dropdown {
  constructor(element) {
    this.element = element;
    this.button = this.element.querySelector('.drop-down');
    this.content = this.element.querySelector('.drop-down-content');
    this.button.addEventListener('click', () => {
      this.toggleContent();
    });
  }

  toggleContent() {
    this.content.classList.toggle('visible');
  }
}

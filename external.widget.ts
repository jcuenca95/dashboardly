import { Widget } from './core/widget.class';

export class ExternalWidget implements Widget {
  render(): HTMLElement {
    const element = document.createElement('ul');

    for (let i = 0; i < 5; i++) {
      const li = document.createElement('li');
      li.innerHTML = '' + i;
      element.append(li);
    }
    return element;
  }
}

import { Widget } from '../core/widget.class';

export class JorgeWidget implements Widget {
  render(): HTMLElement {
    const element = document.createElement('h1');

    element.innerHTML = 'JORGE MOLA MAS';

    return element;
  }
}

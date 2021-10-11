import { Composer } from '../core/composer.class';

export class DefaultComposer implements Composer {
  compose(elements: HTMLElement[]): HTMLElement {
    const composition = document.createElement('div');
    composition.append(...elements);
    return composition;
  }
}

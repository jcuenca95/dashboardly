import { Composer } from '../core/composer.class';

export class FlexComposer implements Composer {
  compose(elements: HTMLElement[]): HTMLElement {
    const composition = document.createElement('div');
    composition.setAttribute('style', `display: flex;`);
    composition.append(...elements);
    return composition;
  }
}

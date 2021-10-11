import { Composer } from './composer.class';
import { Widget } from './widget.class';

export class Dashboard {
  private _widgets = new Array<Widget>();

  constructor(private composer: Composer) {}

  public append(widget: Widget) {
    this._widgets.push(widget);
  }

  public render(target: HTMLElement) {
    const elements = this._widgets.map((w) => w.render());
    const composition = this.composer.compose(elements);
    target.append(composition);
  }
}

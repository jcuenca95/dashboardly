import { DefaultComposer } from '../composers/default.composer';
import { FlexComposer } from '../composers/flex.composer';
import { Composer } from '../core/composer.class';
import { Dashboard } from '../core/dashboard.class';
import { Widget } from '../core/widget.class';
import { JorgeWidget } from '../widgets/jorge.widget';

type EntityMap<T> = { name: string; class: T };

export class Dashboardly {
  private widgets: Array<EntityMap<any>> = [
    {
      name: 'jorge',
      class: JorgeWidget,
    },
  ];
  private composers: Array<EntityMap<any>> = [
    {
      name: 'default',
      class: DefaultComposer,
    },
    {
      name: 'flex',
      class: FlexComposer,
    },
  ];

  constructor(config?: {
    widgets?: Array<EntityMap<any>>;
    composers?: Array<EntityMap<any>>;
  }) {
    if (config !== undefined) {
      if (config.widgets !== undefined) {
        this.widgets = [...config.widgets, ...this.widgets];
      }
      if (config.composers !== undefined) {
        this.composers = [...config.composers, ...this.composers];
      }
    }
  }

  createDashboard(
    element_id: string,
    widgets: {
      type: string;
    }[],
    composer: string
  ) {
    const app = document.getElementById(element_id);
    const composer_instance = this.getComposer(composer);
    const dashboard = new Dashboard(composer_instance);

    widgets.forEach((w) => {
      const wgt = this.getWidget(w.type);
      dashboard.append(wgt);
    });

    dashboard.render(app);
  }

  private getComposer(name: string): Composer {
    const composer_types = this.composers.find((c) => c.name === name);
    if (composer_types === undefined) {
      throw 'There is no Composer with name "' + name + '".';
    }
    return new composer_types.class();
  }

  private getWidget(type: string): Widget {
    const widget_type = this.widgets.find((c) => c.name === type);
    if (widget_type === undefined) {
      throw 'There is no Composer with name "' + name + '".';
    }
    return new widget_type.class();
  }
}

import { ExternalWidget } from './external.widget';
import { Dashboardly } from './public/dashboardly.class';

const manager = new Dashboardly({
  widgets: [
    {
      name: 'list',
      class: ExternalWidget,
    },
  ],
});

manager.createDashboard(
  'app',
  [
    {
      type: 'list',
    },
    {
      type: 'jorge',
    },
    {
      type: 'jorge',
    },
    {
      type: 'jorge',
    },
    {
      type: 'jorge',
    },
    {
      type: 'jorge',
    },
  ],
  'flex'
);

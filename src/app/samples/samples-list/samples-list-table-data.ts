import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { TableColumn } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: _('Event id'),
    dataKey: 'uuid',
    isSortable: true,
  }
];

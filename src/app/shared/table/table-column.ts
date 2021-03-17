export interface TableColumn {
  name: string;
  dataKey: string;
  isSortable?: boolean;
  icon?: boolean; // TODO : needs to be deleted when the old table is eliminated
}

export interface TableColumn {
  name: string;
  dataKey: string;
  isSortable?: boolean;
  // either provide a string with an acceptable name for the icon or
  // use string '$value' to dynamically set icon based on cell content
  icon?: string;
}

# Dynamic table

## Overview and scope

This is a component that allows you to create dynamic tables for different list entities with different configurations

## Creating a table

Simply add the dynamic table component wherever you need it to be. An example would look like this:

    <app-table
      [filterFormId]="formIdFilters"
      [resourceService]="eventService"
      [tableColumns]="defaultColumns"
      [isSortable]="true"
      [isSelectable]="true"
      [isHeaderSticky]="true"
      [fullHeight]="true"
      [saveConfigKey]="configKey"
      [bulkEditOptions]="actionsBulkEdit"
      [viewOptions]="actionsViewOption"
      [preSetFilters]="presetFilters"
      (triggerGroupEvent)="onGroupEvents($event)"
      showTotalContext="{{ 'strings.entityEvents' | translate }}"
    ></app-table>

Another example of dynamic table together with the legend components and period picker component:

    <app-table
      *ngIf="showTable"
      [filterFormId]="formIdFilters"
      [resourceService]="$service"
      [tableColumns]="defaultColumns"
      [isSortable]="true"
      [isSelectable]="tableView !== views.FOLLOW_UP"
      [isHeaderSticky]="true"
      [allowToggleColumns]="true"
      [fullHeight]="true"
      [saveConfigKey]="configKey"
      [viewOptions]="actionsViewOptions"
      [bulkEditOptions]="tableView !== views.FOLLOW_UP ? actionsBulkEdit : []"
      [preSetFilters]="presetFilters"
      [showLegend]="!!legend?.length"
      (viewOptionEvent)="changeOptionView($event)"
      showTotalContext="{{ 'strings.entityCases' | translate }}"
    >
      <app-legend *ngIf="legend?.length" [data]="legend" class="table-legend"></app-legend>
      <app-period-picker
        *ngIf="tableView === views.FOLLOW_UP"
        [from]="from"
        [to]="to"
        [filterId]="formIdFilters"
        class="table-filters"
      ></app-period-picker>
    </app-table>


| Input name                              | Description                                                                                                                                                                                                                          |
|-----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **filterFormId**: string                | An identifier that connects the table with the filters                                                                                                                                                                               |
| **resourceService**: BaseService\<any\> | The service for the respective entity that will be used to fetch the data for the table. Default is using the getAll() method                                                                                                        |
| **tableColumns**: Array\<TableColumn\>  | This input contains the structure of the table. Will be detailed bellow                                                                                                                                                              |
| **isSortable**: boolean                 | If true, the sortable option is on and the header of the table will contain the sortable icons ; if false, the table will not be sortable                                                                                            |
| **isSelectable**: boolean               | If true, each row will have a checkbox and the rows can be selected ; if false, it is not selectable                                                                                                                                 |
| **allowToggleColumns**: boolean         | If true, the columns can be hidden or shown from the toggle columns dropdown                                                                                                                                                         |
| **fullHeight**: boolean                 | If true, the table take full height                                                                                                                                                                                                  |
| **saveConfigKey**: string               | This is an identifier that will be used for the localstorage, when dragging the columns and giving them a new order                                                                                                                  |
| **isHeaderSticky**: boolean             | If true, the table header is sticky                                                                                                                                                                                                  |
| **viewOptions**: Array\<NavItem\>       | An array of NavItem that populates the "View options" dropdown above the table                                                                                                                                                       |
| **bulkEditOptions**: Array\<NavItem\>   | An array of NavItem that populates the "Bulk actions" dropdown above the table. THe bulk actions can be selected after one ore more rows are being selected (example of bulk actions: edit, delete, archive, dearchive, group, etc.) |
| **preSetFilters**: Filter               | A pre-set filter that the getAll() method will take into account from the first time the data is being fetched                                                                                                                       |
| **showLegend**: boolean                 | If true, the legend will be visible                                                                                                                                                                                                  |
| **isSelectableCheckboxHidden**: boolean | If true, hides the checkbox, but selection still available                                                                                                                                                                           |
| **isSelectableOnce**: boolean           | If true, the selection will be possible only once ; no multi-select                                                                                                                                                                  |
| **isEditable**: boolean                 | If true, the edit icon will be displayed along with the possibility to click it and trigger an event                                                                                                                                 |
| **isViewable**: boolean                 | If true, the view icon will be displayed along with the possibility to click it and trigger an event                                                                                                                                 |
| **viewableIcon**: string                | The icon identifier for the view icon                                                                                                                                                                                                |
| **rowStyleData**: string                | Sets the style of the row                                                                                                                                                                                                            |
| **showTotal**: boolean                  | Displays the total entries from the table                                                                                                                                                                                            |
| **showTotalContext**: string            | Displays the name of the total entity                                                                                                                                                                                                |
---

| Output name                                | Description                                              |
|--------------------------------------------|----------------------------------------------------------|
| **viewOptionEvent**: EventEmitter\<any\>   | Emits the option chosen from the "View options" dropdown |
| **selectItem**: EventEmitter\<any\>        | Emits the selected item                                  |
| **editItem**: EventEmitter\<any\>          | Emits the chosen item to be edited                       |
| **viewItem**: EventEmitter\<any\>          | Emits the chosen item to be viewed                       |
| **rowAction**: EventEmitter\<any\>         | Emits the item with the action                           |
| **triggerGroupEvent**: EventEmitter\<any\> | Emits the element for the group event                    |

### TableColumn

The structure of the table columns is being determined by the TableColumn

```
export interface TableColumn {
  name: string;
  additionalName?: string;
  dataKey: string;
  alternateData?: string;
  isSortable?: boolean;
  iconify?: string;
  align?: string;
  className?: string;
  format?: TableDataFormat;
  essential?: boolean;
  translationName?: string;
  actions?: TableDataAction[];
  sticky?: boolean;
  maxWidth?: number;
}
```

| Attribute                                      | Purpose                                                                |
|------------------------------------------------|------------------------------------------------------------------------|
| **name**: string                               | The translation key for the header of the column                       |
| **additionalName**: string                     | The translation key for the additional name                            |
| **dataKey**: string                            | The key corresponding for the column/atribute of the respective entity |
| **alternateData**: string                      | The translation key for the alternate date                             |
| **isSortable**: boolean                        | If true, the respective column is sortable                             |
| **iconify**: string                            | The icon identifier for the respective column                          |
| **align**: string                              | The alignment of the column                                            |
| **className**: string                          | The classes of the column                                              |
| **format**: TableDataFormat                    | The format of the column; an example can be seen bellow                |
| **essential**: boolean                         | If true, the column can not be toggled                                 |
| **sticky**: boolean                            | If true, the column is sticky                                          |
| **maxWidth**: number                           | The maxim width of the column                                          |


### Format example

We can add different formats. In this example, we are adding a link that has the following format : '/cases/case/$param1/details'.
$param1 will be replaced by what can be located in the params field : 'uuid' 

```
format: {
      type: TableDataFormatOptions.LINK,
      pattern: '/cases/case/$param1/details',
      params: ['uuid'],
      truncate: 6,
    },
```

In this second example, we have a simple display format. 
The pattern fields holds the format and it will be replaced from left to right with what can be found in the params field : 'person.age', 'person.birthdateDD', 'person.birthdateMM', 'person.birthdateYYYY'  

```
format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: '$param1 ($param2/$param3/$param4)',
      params: ['person.age', 'person.birthdateDD', 'person.birthdateMM', 'person.birthdateYYYY'],
    },
```

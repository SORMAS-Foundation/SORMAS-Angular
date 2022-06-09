# Dynamic forms

## Overview and scope

This is a module that allows us to quickly create a form simply by feeding a configuration object to its main component. Also, by separating the form's logic from its structure means that we can easily manipulate the structure based on different config options particular to a server instance, language, user role, etc -- a task which otherwise would require logic to be embedded in each form's component and/or template, resulting in a more complex application that will be harder to maintain.

## Creating a form

Simply add the dynamic form component wherever you need it to be. A complete example would look like this:

    <app-dynamic-form
    	[formId]="formId"
    	[formElements]="configObject"
    	[resourceService]="service"
    	[withAnchor]="true
    	[outsourceSubmit]="true"
    	(change)="watchFormChanges($event)"
    	(formSubmit)="customSubmit($event)"
    ></app-dynamic-form>

Out of all the inputs only `formElements` is required, as it contains the structure for the form. Without it, there's nothing to show and no form controls to create.

| Input name                              | Description                                                                                                                                                                                                                                                                                                                     |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **formId**: string                      | An identifier for the form, particularly useful when dealing with multiple forms on the page (For example: a filters form that constantly emits changes to a list, that refreshes its content whenever a filter updates could potentially interfere with an edit / create form from the same page, either inline or in a modal) |
| **formElements**: Array\<FormBase\>     | Provides the structure of the form, as well as some styling and functionality options. It must be an array of objects of type `FormBase`                                                                                                                                                                                        |
| **resourceService**: BaseService\<any\> | A service to be used when submitting the form to save the data (_Note: right now this is useful when creating or editing entities, as it's hardcoded to use the_ `add` _method_)                                                                                                                                                |
| **withAnchor**: boolean                 | Setting this flag to `true` adds an anchor navigation menu, automatically created based on sections specified in `formElements`                                                                                                                                                                                                 |
| **outsourceSubmit**: boolean            | When in need of a custom submit set this to `true` (for example: manipulating the form data prior to submission or saving parts of the form with a different service - like person)                                                                                                                                             |

---

| Output name                         | Description                                                                                                                               |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **changed**: EventEmitter\<any\>    | Emits whenever a form control updates, in order to notify the parent component                                                            |
| **formSubmit**: EventEmitter\<any\> | Used in combination with `outsourceSubmit` flag. Intercepts the submit process so it can be handled outside of the dynamic form component |

### Form structure

The structure of the form is determined by the configuration object passed as `formElements`. It is an array of objects of type `FormBase`, each one representing a section of the form (a `fieldset` in the `html` output). As such, grouping fields in a section should be done logically (example: for an address fields such as region, district, city, street, postal code should be grouped in a section)

```
class FormBase<T> {
	id?: string;
	title: string;
	subTitle?: string;
	fields: FormElementBase<T>[];
	required?: boolean;
	anchor?: string;
	anchorLabel?: string;
	hidden?: boolean;
	hiddenLeftSection?: boolean;
	appearance?: FormGroupStyle;
	className?: string;
}
```

| Attribute                                   | Purpose                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **id**: string                              | Optional. Used to identify the section                                                                                                                                                                                                                                                                                                                                          |
| **title**: string                           | The header of the section, specifying the general purpose of the section.                                                                                                                                                                                                                                                                                                       |
| **subtitle**: string                        | Further details about the section.                                                                                                                                                                                                                                                                                                                                              |
| **fields**: Array\<FormElementBase\<any\>\> | A list of the form fields that should be rendered in this section.                                                                                                                                                                                                                                                                                                              |
| **required**: boolean                       | Decorative only; it adds an asterisk indicating the section may contain mandatory fields.                                                                                                                                                                                                                                                                                       |
| **anchor**: string                          | Setting an anchor causes an inline navigator to appear (position fixed at the top of the form), with anchor links that scrolls to respective section.                                                                                                                                                                                                                           |
| **anchorLabel**: string                     | Used in combination with `anchor`. It is the text that will show in the inline navigator.                                                                                                                                                                                                                                                                                       |
| **hidden**: boolean                         | Determines if the section is visible or not. Sometimes we only want a section to appear under certain conditions (e.g.: if user make a specific selection).                                                                                                                                                                                                                     |
| **hiddenLeftSection**: boolean              | A flag to hide `title` and `subtitle`.                                                                                                                                                                                                                                                                                                                                          |
| **appearance**: FormGroupStyle              | Determines the appearance of the section. There are three possible values: 'BASIC' , 'CARD' or 'COLLAPSABLE'. Default is 'CARD', wrapping the fields inside a \<mat-card\> component. Using 'COLLAPSABLE' it will wrap the section in a collapsable box (e.g.: you can see this on filters sidebar). 'BASIC', as the name suggests, rendres the fields plain, with no wrappers. |
| **className**: string                       | Allows to set a css class on the section, to customize its appearance.                                                                                                                                                                                                                                                                                                          |

As stated, the actual form elements are defined in the `fields` attribute of each section. It is an array of objects of type `FormElementBase`, which has a plethora of attributes that allows to customize the look and functionality of each form element:

```
export class FormElementBase<T> {
	value?: T;
	key: string;
	label: string;
	placeholder?: string;
	hint?: string;
	validation?: string[];
	validationMessage?: string;
	controlType: string;
	type: string;
	newLine: boolean | undefined;
	separated: boolean | undefined;
	className?: string;
	options: {
		key: any;
		value: string;
		icon?: string
	}[];
	active: boolean;
	dependingOn?: string;
	dependingOnValues?: any[];
	widget?: any;
	widgetInfo?: any;
	chips?: boolean;
	allowClear?: boolean;
	allowSelect?: boolean;
	disabled?: boolean;
	timeLabel?: string;
	multipleChoice?: boolean;
	resource?: any;
	service?: string;
	serviceMethod?: string;
	determinedBy?: FormElementDependency[];
	fallbackOption?: {
		fallbackOptionKey: string;
		fallbackOptionValue: string
	};
}
```

| Attribute                                        | Purpose                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **value**: T                                     | Optional. The initial value of the form element.                                                                                                                                                                                                                                                                                                                                                           |
| **key**: string                                  | Unique identifier of the form element. It can contain a `.`, in which case the output would be an object (e.g.: if the key is `person.firstName` the form output will be: person: { firstName: 'value' }). Note: when initialising the form component the `.` is replaced by `__` to avoid some issues with form controls getters.                                                                         |
| **label**: string                                | Label of form element                                                                                                                                                                                                                                                                                                                                                                                      |
| **placeholder**: string                          | Placeholder for inputs or selects                                                                                                                                                                                                                                                                                                                                                                          |
| **hint**: string                                 | Additional (short) info that is rendered beneath form elements                                                                                                                                                                                                                                                                                                                                             |
| **validation**: Array\<string\>                  | A list of validation checks to be performed (e.g.: `['required']`). An asterisk is automatically added next to the label of the element.                                                                                                                                                                                                                                                                   |
| **validationMessage**: string                    | Messages to be displayed when validation check fails.                                                                                                                                                                                                                                                                                                                                                      |
| **controlType**: string                          | Determines the type of the form element (input, radio button, textarea, select etc)                                                                                                                                                                                                                                                                                                                        |
| **type**: string                                 | Usefull for inputs, to specify if it's a text input (default) or an iput of type number or date.                                                                                                                                                                                                                                                                                                           |
| **newLine**: boolean                             | By default, form elements are displayed inline, one after another. This is a flag that indicates this particular form element will start on a new line. This is accomplished by inserting a \<mat-divider\> component before the respective control.                                                                                                                                                       |
| **separated**: boolean                           | Used for radio groups. A flag indicating that radio buttons in a group should be rendered on separate lines, not inline, one after another (which is the default).                                                                                                                                                                                                                                         |
| **className**: string                            | Specify a css class to customize this form element. Note: multiple classes can be specified, separated by a space                                                                                                                                                                                                                                                                                          |
| **options**: string                              | Used for form elements that display multiple choices, such as selects, multiselect, radio groups or checkbox groups. It's a list of objects where `key` is the actual output value of the selection, while `value` is the friendly text that is displayed.                                                                                                                                                 |
| **active**: boolean                              | A flag indicating if the form control is active or not. An inactive control is ignored and not rendered.                                                                                                                                                                                                                                                                                                   |
| **dependingOn**: string                          | Usefull when there is a dependency between form controls and we have to show/hide this form element based on completness of a different element. The string that needs to be specified is the key of the form control is depending on. (e.g.: if we only want to show an input if the user checks a checkbox.)                                                                                             |
| **dependingOnValues**: Array\<any\>              | Used in combination with `dependingOn`, if we are interested in displaying a control based on certain values inputed by the user (e.g.: we'd like to show a select with regions but only if user selected Germany in a country drop-down)                                                                                                                                                                  |
| **widget**: string                               | Sometimes we need to have other information or functionalties inside the form. We can accomplish this by injecting a different component. The strings is an identifier for the component and needs to be mapped inside the `FormWidgetComponent`. The string is a simple map key, so it can have any value. But, by convention, we're using the selector for the widget component (e.g.: `app-gps-coords`) |
| **widgetInfo**: any                              | Used in combination with `widget`, to pass any kind of data to the widget component                                                                                                                                                                                                                                                                                                                        |
| **chips**: boolean                               | A flag indicating if we need to render what user selected as chips. Only usefull for multiselect controls.                                                                                                                                                                                                                                                                                                 |
| **allowClear**: boolean                          | Usefull for selects. Setting to true adds the posbility to clear the selection.                                                                                                                                                                                                                                                                                                                            |
| **allowSelect**: boolean                         | A flag that is usefull only for multiselect. Setting to true, it adds a checkbox that allows the user to select/deselect all the options at once.                                                                                                                                                                                                                                                          |
| **disabled**: boolean                            | Whether the control is enabled or disabled                                                                                                                                                                                                                                                                                                                                                                 |
| **timeLabel**: string                            | Can be used if `controlType` is `datetime`. It is an additional label displayed above the time drop-down                                                                                                                                                                                                                                                                                                   |
| **multipleChoice**: boolean                      | A flag that indicates if the user can choose multiple options in a select. Note: this is intended for simple selects. The `multiselect` control type is a different, more complex component.                                                                                                                                                                                                               |
| **service**: string                              | If we need to populate the options of a select dynamically, we can specify a service from which to retrieve the data (e.g.: populating a drop-down with all the countries)                                                                                                                                                                                                                                 |
| **serviceMethod**: string                        | Used in combination with `service` property. By default, the specified service calls the `getAllAsOptions` method. This property allows us to change that, and specify a different method to fetch the data.                                                                                                                                                                                               |
| **determinedBy**: Array\<FormElementDependency\> | Used in combination with `service`. We can provide an array of dependencies, which will be monitored for changes. Whenever a change appears, the `service` will request new data and repopulate the drop-down (e.g.: we have a select control for the regions of a country, that needs to update and re-populate whenever the country selection changes)                                                   |
| **fallbackOption**: T                            | Sometimes, we want a fallback option for dynamically populated drop-downs.                                                                                                                                                                                                                                                                                                                                 |

The dynamic-form component goes through all the sections of the provided config object, rendering them accordingly. And for each section will iterate through the fields and injects the appropriate entry component, based on provided `controlType`. This is achieved using the dynamic field directive (`appDynamicField`)

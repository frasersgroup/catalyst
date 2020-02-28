### Overview

DataFields are used to communicate read-only data. 

```jsx
<DataField
  label="Label"
  value="Value"
/>
```

If you use it in a table or list, you might want to hide the label

```jsx
<DataField
  label="Label"
  labelHidden
  value="Value"
/>
```

This data might link somewhere else in the app

```jsx
<DataField
  label="Parent Category"
  value="Men’s Clothing"
  to="/#/Components/Content/DataField"
/>
```

If the data is not set on this element, you can explain where it is set:
- The element is using default settings
- The element is inheriting from a child
- The element is locked
- The element’s value is being set via a plugin

```jsx
<div style={{marginBottom: "1rem"}}>
  <DataField
    label="Label"
    value="Value"
    style="default"
  />
</div>
<div style={{marginBottom: "1rem"}}>
  <DataField
    label="Label"
    value="Value"
    style="inherited"
  />
</div>
<div style={{marginBottom: "1rem"}}>
  <DataField
    label="Label"
    value="Value"
    style="lock"
  />
</div>
<DataField
  label="Label"
  value="Value"
  style="plugin"
/>
```

```jsx
<div style={{marginBottom: "1rem"}}>
  <DataField
    label="Label"
    value="Value"
    status="info"
  />
</div>
<div style={{marginBottom: "1rem"}}>
  <DataField
    label="Label"
    value="Value"
    status="success"
  />
</div>
<div style={{marginBottom: "1rem"}}>
  <DataField
    label="Label"
    value="Value"
    status="warning"
  />
</div>
<DataField
  label="Label"
  value="Value"
  status="danger"
/>
```
### Overview

Checkboxes are a standard form component. They have also a secondary (red) variant for dangerous, negative or subtractive operations, like removing products from categories.

```jsx noeditor
<div style={{marginBottom: "1rem"}}>
  <Checkbox color="default" />
</div>
<div style={{marginBottom: "1rem"}}>
  <Checkbox color="default" defaultChecked />
</div>
<div style={{marginBottom: "1rem"}}>
  <Checkbox color="default" indeterminate />
</div>
<div style={{marginBottom: "1rem"}}>
  <Checkbox color="default" preview />
</div>
<div style={{marginBottom: "1rem"}}>
  <Checkbox color="default" preview defaultChecked />
</div>
<div style={{marginBottom: "1rem"}}>
  <Checkbox color="default" preview indeterminate />
</div>
<div style={{marginBottom: "1rem"}}>
  <Checkbox color="secondary" />
</div>
<div style={{marginBottom: "1rem"}}>
  <Checkbox color="secondary" defaultChecked />
</div>
<div style={{marginBottom: "1rem"}}>
  <Checkbox color="secondary" indeterminate />
</div>
<div style={{marginBottom: "1rem"}}>
  <Checkbox color="secondary" preview />
</div>
<div style={{marginBottom: "1rem"}}>
  <Checkbox color="secondary" preview defaultChecked />
</div>
<div style={{marginBottom: "1rem"}}>
  <Checkbox color="secondary" preview indeterminate />
</div>
<div style={{marginBottom: "1rem"}}>
  <Checkbox disabled />
</div>
<div style={{marginBottom: "1rem"}}>
  <Checkbox defaultChecked disabled />
</div>
<div style={{marginBottom: "1rem"}}>
  <Checkbox indeterminate disabled />
</div>
```

```jsx
import { FormControl, FormLabel, FormGroup } from "@material-ui/core";
import FormControlLabel from "../FormControlLabel";
<FormControl component="fieldset">
  <FormLabel component="legend">Assign responsibility</FormLabel>
  <FormGroup>
    <FormControlLabel
      control={<Checkbox />}
      label="Gilad Gray"
      checked
    />
    <FormControlLabel
      control={<Checkbox />}
      label="Jason Killian"
      checked
      disabled
    />
    <FormControlLabel
      control={<Checkbox />}
      label="Antoine Llorca"
      detail="Some subtext goes here."
    />
    <FormControlLabel
      control={<Checkbox />}
      label="Morgan Carter"
      detail="Some subtext goes here."
      disabled
    />
  </FormGroup>
</FormControl>
  ```
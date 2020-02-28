### Overview

Avatars can display user photos, icons, letters. But most typically in Operator Tools they display product photos.

```jsx noeditor
<Checkbox />
<Checkbox defaultChecked />
<Checkbox disabled />
<Checkbox defaultChecked disabled />
```


```jsx
import { FormControl, FormLabel, FormGroup, FormControlLabel, FormHelperText } from "@material-ui/core";
<FormControl component="fieldset">
  <FormLabel component="legend">Assign responsibility</FormLabel>
  <FormGroup>
    <FormControlLabel
      control={<Checkbox value="gilad" />}
      label="Gilad Gray"
    />
    <FormControlLabel
      control={<Checkbox value="jason" />}
      label="Jason Killian"
    />
    <FormControlLabel
      control={
        <Checkbox value="antoine" />
      }
      label="Antoine Llorca"
    />
  </FormGroup>
  <FormHelperText>Be careful</FormHelperText>
</FormControl>
  ```
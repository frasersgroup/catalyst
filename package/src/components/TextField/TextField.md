### Overview

TextFields allow users to take an action such as add, save, cancel or delete. TextFields should clearly and simply communicate the action that will happen when they are pressed.

```jsx noeditor
import InputAdornment from '@material-ui/core/InputAdornment';

<div style={{ marginBottom: "2rem", border: "1px solid #e6e6e6", padding: "1rem 1rem 0"}}>
  <div style={{ marginBottom: "1rem" }}>
    <div style={{marginRight: "1rem", marginBottom: "1rem"}}>
      <TextField
        label="Label"
        placeholder="Placeholder"
        helperText="Full width!"
        margin="normal"
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
    <div style={{marginRight: "1rem", marginBottom: "1rem"}}>
    </div>
      <TextField
        label="Label"
        placeholder="Placeholder"
        helperText="Full width!"
        margin="normal"
        horizontal
      />
    </div>
  </div>
</div>
```

They can go horizontal too.

```jsx noeditor
import InputAdornment from '@material-ui/core/InputAdornment';

<div style={{ marginBottom: "2rem", border: "1px solid #e6e6e6", padding: "1rem 1rem 0"}}>
  <div style={{ marginBottom: "1rem" }}>
    <TextField
      label="Label"
      placeholder="Placeholder"
      helperText="Full width!"
      margin="normal"
      horizontal
    />
    <TextField
      label="Label"
      placeholder="Placeholder"
      margin="normal"
      horizontal
    />
    <TextField
      label="Label"
      placeholder="Placeholder"
      helperText="Full width!"
      margin="normal"
      horizontal
    />
  </div>
</div>
```

Can be validated.

```jsx noeditor
import InputAdornment from '@material-ui/core/InputAdornment';

<div style={{ marginBottom: "2rem", border: "1px solid #e6e6e6", padding: "1rem 1rem 0"}}>
  <div style={{ marginBottom: "1rem" }}>
    <TextField
      label="Label"
      placeholder="Placeholder"
      helperText="This one has an error!"
      margin="normal"
      InputProps={{
        startAdornment: <InputAdornment position="start">$</InputAdornment>,
      }}
      error
    />
    <TextField
      label="Label"
      placeholder="Placeholder"
      helperText="This one has an error!"
      margin="normal"
      horizontal
      error
    />
  </div>
</div>
```

Can be disabled.

```jsx noeditor
import InputAdornment from '@material-ui/core/InputAdornment';

<div style={{ marginBottom: "2rem", border: "1px solid #e6e6e6", padding: "1rem 1rem 0"}}>
  <div style={{ marginBottom: "1rem" }}>
    <TextField
      label="Label"
      placeholder="Placeholder"
      helperText="This one is disabled."
      margin="normal"
      InputProps={{
        startAdornment: <InputAdornment position="start">$</InputAdornment>,
      }}
      disabled
    />
    <TextField
      label="Label"
      placeholder="Placeholder"
      helperText="This one is disabled."
      margin="normal"
      horizontal
      disabled
    />
  </div>
</div>
```

And can be multiline. When multiline, they automatically expand to fit the content.

```jsx noeditor
import InputAdornment from '@material-ui/core/InputAdornment';

<div style={{ marginBottom: "2rem", border: "1px solid #e6e6e6", padding: "1rem 1rem 0"}}>
  <div style={{ marginBottom: "1rem" }}>
    <TextField
      label="Label"
      placeholder="Placeholder"
      margin="normal"
      multiline
      value="Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae elit libero, a pharetra augue."
    />
    <TextField
      label="Label"
      placeholder="Placeholder"
      helperText="Full width!"
      margin="normal"
      horizontal
      multiline
    />
  </div>
</div>
```
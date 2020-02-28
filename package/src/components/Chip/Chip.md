### Overview

Chips are compact visual elements that are used to present information to an operator to communicate status or feedback on an action taken. Chips can be used to represent tags, badges, and other compact bits of information to a user.

[Chips](https://material.io/design/components/chips.html) allow users to enter information, make selections, filter content, or trigger actions.

The Catalyst Chip inherits from the Material-UI [Chip component](https://material-ui.com/components/chips/). Refer to the Material-UI [Chip API docs](https://material-ui.com/api/chip/) for more information.

### Usage

<!-- Show all the variants/combos we use in Reaction Admin, without the code box > -->

```jsx noeditor
const onDelete = () => {
  console.log("stuff");
};
<div>
  <div style={{ display: "flex" }}>
    <div style={{ marginRight: "1rem" }}>
      <Chip label="Chip" />
    </div>
    <div style={{ marginRight: "1rem" }}>
      <Chip status="danger" label="Status Chip" />
    </div>
    <div style={{ marginRight: "1rem" }}>
      <Chip label="Deletable Chip" onDelete={onDelete} />
    </div>
  </div>
</div>;
```

#### Types

<!-- Show all Types of the component used in Reaction Admin -->

##### Deletable chip

Use a Deletable chip to allow users to remove an entity, like removing a Tag from a filter input. To create a Deletable chip, pass a Delete function to `onDelete`, and use the `default` variant with the `primary` color.

```jsx
function ChipsArray() {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "swim-2019.csv" },
    { key: 1, label: "womens-2019.csv" },
    { key: 2, label: "mens-2019.csv" }
  ]);

  const handleDelete = chipToDelete => () => {
    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
  };

  return (
    <div>
      {chipData.map(data => {
        return (
          <Chip
            key={data.key}
            label={data.label}
            onDelete={handleDelete(data)}
            style={{ marginRight: "4px" }}
          />
        );
      })}
    </div>
  );
}

<ChipsArray />;
```

##### Deletable chip for MultiSelects

Use a Deletable chip in components a MultiSelect to allow users to remove entities within another action. To create a Deletable chip for a Select or MultiSelect, use the `default` variant with the `secondary` color and `small` size props, along with p assing an `onDelete` function.

```jsx
function ChipsArray() {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "womens" },
    { key: 1, label: "mens" },
    { key: 2, label: "fall-winter-2019" }
  ]);

  const handleDelete = chipToDelete => () => {
    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
  };

  return (
    <div>
      {chipData.map(data => {
        return (
          <Chip
            key={data.key}
            label={data.label}
            onDelete={handleDelete(data)}
            style={{ marginRight: "8px" }}
          />
        );
      })}
    </div>
  );
}

<ChipsArray />;
```

##### Status chip

The Status chip is used to indicate the status of data. However since the status is represented only with color, the text should fully describe the status so that color-blind people do not lose any information.

```jsx
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Chip status="info" label="New Product" />
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Chip status="success" label="Visible" />
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Chip status="warning" label="Incomplete" />
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Chip status="danger" label="Hidden" />
  </div>
</div>
```

It may help to include icons.

```jsx
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import WarningIcon from "@material-ui/icons/Warning";
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';

<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Chip icon={<InfoIcon />} status="info" label="New Product" />
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Chip icon={<CheckCircleIcon />} status="success" label="Visible" />
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Chip icon={<WarningIcon />} status="warning" label="Incomplete" />
  </div>
  <div style={{ marginRight: "1rem" }}>
    <Chip icon={<ErrorIcon />} status="danger" label="Hidden" />
  </div>
</div>
```

##### Error chip

The Error chip is used to indicate an error status, such as when an order has been cancelled.

```jsx
<Chip status="error" label="Order Cancelled" />
```

##### All Chip variants

These are all the possible chip variants.

```jsx
function ChipsArray() {
  const handleDelete = chipToDelete => () => {
    alert("You clicked the delete button");
  };

  const [chipData, setChipData] = React.useState([
    [
      { label: "primary-default" },
      { label: "primary-deletable", key: 0, onDelete: handleDelete },
    ],
    [
      { label: "info-default", status: "info" },
      { label: "info-deletable", status: "info", onDelete: handleDelete },
    ],
    [
      { label: "success-default", status: "success" },
      { label: "success-deletable", status: "success", onDelete: handleDelete },
    ],
    [
      { label: "warning-default", status: "warning" },
      { label: "warning-deletable", status: "warning", onDelete: handleDelete },
    ],
    [
      { label: "danger-default", status: "danger" },
      { label: "danger-deletable", status: "danger", onDelete: handleDelete },
    ],
    [
      { label: "error-default", status: "error" },
      { label: "error-deletable", status: "error", onDelete: handleDelete },
    ]
  ]);

  return (
    <div>
      {chipData.map((chipRow, index) => {
        return (
          <div key={index} style={{ marginBottom: "8px" }}>
            {chipRow.map((data, chipIndex) => {
              return (
                <Chip
                  {...data}
                  key={chipIndex}
                  label={data.label}
                  onDelete={data.onDelete && data.onDelete(data)}
                  style={{ marginRight: "8px" }}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
<ChipsArray />;
```

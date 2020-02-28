### Overview

Checkboxes are a standard form component. They have also a secondary (red) variant for dangerous, negative or subtractive operations, like removing products from categories.

```jsx
<div style={{marginBottom: "1rem"}}>
  <TreeItem label="Men" checkable>
    <TreeItem label="Men’s Clothing" checkable checkboxProps={{ color: "secondary" }} />
    <TreeItem label="Men’s Clothing" checkable />
  </TreeItem>
  <TreeItem label="Men" checkable expanded>
    <TreeItem label="Men’s Clothing" checkable checkboxProps={{ color: "secondary" }} />
    <TreeItem label="Men’s Clothing" checkable>
      <TreeItem label="Shirts" checkable />
    </TreeItem>
  </TreeItem>
</div>
```
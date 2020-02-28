### Overview

Checkboxes are a standard form component. They have also a secondary (red) variant for dangerous, negative or subtractive operations, like removing products from categories.

```jsx
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

const options = [{
  label: "Add tags to products",
  details: "Add the selected tags from the filtered products list provided."
}, {
  label: "Remove tags from products",
  details: "Remove the selected tags from the filtered products list provided."
}, {
  label: "Remove all tags from products",
  details: "Remove all tags from the filtered products list provided.",
  isDisabled: true
}];

<div style={{marginBottom: "1rem"}}>
  <Hero
    backButton={{
      label: "Back to Products",
      url: "/"
    }}
    image="https://res.cloudinary.com/bobstores/image/upload/w_1000,q_auto,f_auto/2060314_601_main.jpg"
    chip={{
      label: "Visible",
      status: "success"
    }}
    title="THE REFORMATION Winslow Dress"
    subtitle="#1286101 · 6 variants · 36 options"
    tabs={[
      "General",
      "Variants",
      "Pricing",
      "Inventory",
      "Shipping",
      "Media",
    ]}
    action={{
      icon: <OpenInNewIcon />,
      label: "View on Site"
    }}
    moreActions={options}
  />
</div>
```
```jsx
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

const options = [{
  label: "Add tags to products",
  details: "Add the selected tags from the filtered products list provided."
}, {
  label: "Remove tags from products",
  details: "Remove the selected tags from the filtered products list provided."
}, {
  label: "Remove all tags from products",
  details: "Remove all tags from the filtered products list provided.",
  isDisabled: true
}];

<div style={{marginBottom: "1rem"}}>
  <Hero
    backButton={{
      label: "Back to Categories",
      url: "/"
    }}
    chip={{
      label: "Visible",
      status: "success"
    }}
    title="Men’s Rain Jackets"
    subtitle="mens-jackets-rain-jackets"
    tabs={[
      "General",
      "Products",
      "Metadata"
    ]}
    action={{
      icon: <OpenInNewIcon />,
      label: "View on Site"
    }}
    moreActions={options}
  />
</div>
```
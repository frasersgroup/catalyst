### Overview

Checkboxes are a standard form component. They have also a secondary (red) variant for dangerous, negative or subtractive operations, like removing products from categories.

```jsx
import HelpIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/SettingsOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircleOutlined";

<div style={{marginBottom: "1rem"}}>
  <NavBar
    company={{
      name: "EMS",
      logo: "https://staging.ems-test.io/assets/fc514090.svg"
    }}
    navItems={[
      {
        label: "Orders",
      },
      {
        label: "Products",
      },
      {
        label: "Customers",
      },
      {
        label: "Categories",
      },
      {
        label: "Changes",
        badge: 4
      },
    ]}
    secondaryNavItems={[
      {
        icon: <HelpIcon />,
        label: "Help"
      },
      {
        icon: <SettingsIcon />,
        label: "Settings"
      },
      {
        icon: <AccountCircleIcon />,
        label: "Profile"
      },
    ]}
  />
</div>
```
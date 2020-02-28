```jsx
import React from "react";
import { Box, ButtonGroup, Dialog, DialogHeader, DialogContent, DialogActions, Typography, Divider } from "@material-ui/core";
import Button from "../../../package/src/components/Button";
import DialogTitle from "../../../package/src/components/DialogTitle";
import Checkbox from "../../../package/src/components/Checkbox";
import FormControlLabel from "../../../package/src/components/FormControlLabel";
import TreeItem from "../../../package/src/components/TreeItem";

const tree = {
  label: "Men",
  slug: "mens",
  checked: false,
  explicitlyChecked: false,
  children: [
    {
      label: "Men’s Clothing",
      slug: "mens-clothing",
      parent: "mens",
      checked: false,
      explicitlyChecked: false,
      children: [
        {
          label: "Activewear",
          slug: "mens-clothing-activewear",
          parent: "mens-clothing",
          checked: false,
          explicitlyChecked: false,
          children: [
            {
              label: "Shirts",
              slug: "mens-clothing-activewear-shirts",
              parent: "mens-clothing-activewear",
              checked: false,
              explicitlyChecked: false,
            },
            {
              label: "Sweatshirts",
              slug: "mens-clothing-activewear-sweatshirts",
              parent: "mens-clothing-activewear",
              checked: false,
              explicitlyChecked: false,
            },
            {
              label: "Shorts",
              slug: "mens-clothing-activewear-shorts",
              parent: "mens-clothing-activewear",
              checked: false,
              explicitlyChecked: false,
            },
            {
              label: "Pants",
              slug: "mens-clothing-activewear-pants",
              parent: "mens-clothing-activewear",
              checked: false,
              explicitlyChecked: false,
              children: [
                {
                  label: "Shorts",
                  slug: "mens-clothing-activewear-pants-shorts",
                  parent: "mens-clothing-activewear-pants",
                  checked: false,
                  explicitlyChecked: false,
                },
                {
                  label: "Leggings",
                  slug: "mens-clothing-activewear-pants-leggings",
                  parent: "mens-clothing-activewear-pants",
                  checked: false,
                  explicitlyChecked: false,
                },
              ]
            },
          ]
        },
        {
          label: "Shirts",
          slug: "mens-clothing-shirts",
          parent: "mens-clothing",
          checked: false,
          explicitlyChecked: false,
          children: [
            {
              label: "T-Shirts",
              slug: "mens-clothing-shirts-t-shirts",
              parent: "mens-clothing-shirts",
              checked: false,
              explicitlyChecked: false,
            },
            {
              label: "Button-up Shirts",
              slug: "mens-clothing-shirts-button-up-shirts",
              parent: "mens-clothing-shirts",
              checked: false,
              explicitlyChecked: false,
            },
          ]
        },
        {
          label: "Shorts",
          slug: "mens-clothing-shorts",
          parent: "mens-clothing",
          checked: false,
          explicitlyChecked: false,
          children: [
            {
              label: "Short Shorts",
              slug: "mens-clothing-shorts-short-shorts",
              parent: "mens-clothing-short",
              checked: false,
              explicitlyChecked: false,
            },
            {
              label: "Long Shorts",
              slug: "mens-clothing-shorts-long-shorts",
              parent: "mens-clothing-short",
              checked: false,
              explicitlyChecked: false,
            },
          ]
        },
        {
          label: "Swimwear",
          slug: "mens-clothing-swimwear",
          parent: "mens-clothing",
          checked: false,
          explicitlyChecked: false,
        }
      ]
    },
  ]
}

function ThisTreeItem(props) {
  const [open, setOpen] = React.useState(false);
  const [selectChildren, setSelectChildren] = React.useState(true);

  const [treeData, setTreeData] = React.useState(tree);

  function searchTree(element, matchingSlug) {
    if (element.slug == matchingSlug) {
      return element;
    } else if (element.children != null) {
      var i;
      var result = null;
      for (i=0; result == null && i < element.children.length; i++) {
        result = searchTree(element.children[i], matchingSlug);
      }
      return result;
    }
    return null;
  }

  const toggleParents = (item, treeData) => {
    console.log("toggleParents", item.slug, item.checked)

    if (!item.parent) return null;

    const parent = searchTree(treeData, item.parent);

    parent.checked = item.checked;

    toggleParents(parent, treeData);
  }

  const toggleCheck = (event) => {
    console.log(event.currentTarget.value)
    const slug = event.currentTarget.value;

    let newTreeData = {...treeData};

    const item = searchTree(newTreeData, slug);
    console.log(item);

    if (item.explicitlyChecked) {
      item.explicitlyChecked = false;
      item.checked = false;
    } else {
      item.explicitlyChecked = true;
      item.checked = true;
    }

    toggleParents(item, newTreeData);

    setTreeData(newTreeData)
  }

  const toggleCheckChildren = () => {
    setSelectChildren(!selectChildren);
  }

  const recursiveRenderTree = (data) => {
    const { label, slug, checked, explicitlyChecked, children } = data;

    const checkedValue = selectChildren ? checked : explicitlyChecked;

    return (
      <TreeItem label={label} checkable expanded checkboxProps={{ checked: checkedValue, color: explicitlyChecked ? "primary" : "default", onChange: toggleCheck, value: slug }}>
        {children && children.map(child => recursiveRenderTree(child))}
      </TreeItem>
    )
  }

  console.log(treeData)

  return (
    <div>
      <Typography variant="h3">Add Products to Categories</Typography>

      <FormControlLabel
        control={<Checkbox />}
        label="Also select category ancestors"
        checked={selectChildren}
        onChange={toggleCheckChildren}
      />

      <Box pt={1} pb={2}>
        <Divider />
      </Box>

      {recursiveRenderTree(treeData)}
    </div>
  );
}

<ThisTreeItem />
```
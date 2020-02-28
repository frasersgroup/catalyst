
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
      checked: false,
      explicitlyChecked: false,
      children: [
        {
          label: "Activewear",
          slug: "mens-clothing-activewear",
          checked: false,
          explicitlyChecked: false,
          children: [
            {
              label: "Shirts",
              slug: "mens-clothing-activewear-shirts",
              checked: false,
              explicitlyChecked: false,
            },
            {
              label: "Sweatshirts",
              slug: "mens-clothing-activewear-sweatshirts",
              checked: false,
              explicitlyChecked: false,
            },
            {
              label: "Shorts",
              slug: "mens-clothing-activewear-shorts",
              checked: false,
              explicitlyChecked: false,
            },
            {
              label: "Pants",
              slug: "mens-clothing-activewear-pants",
              checked: false,
              explicitlyChecked: false,
              children: [
                {
                  label: "Shorts",
                  slug: "mens-clothing-activewear-pants-shorts",
                  checked: false,
                  explicitlyChecked: false,
                },
                {
                  label: "Leggings",
                  slug: "mens-clothing-activewear-pants-leggings",
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
          checked: false,
          explicitlyChecked: false,
          children: [
            {
              label: "T-Shirts",
              slug: "mens-clothing-shirts-t-shirts",
              checked: false,
              explicitlyChecked: false,
            },
            {
              label: "Button-up Shirts",
              slug: "mens-clothing-shirts-button-up-shirts",
              checked: false,
              explicitlyChecked: false,
            },
          ]
        },
        {
          label: "Shorts",
          slug: "mens-clothing-shorts",
          checked: false,
          explicitlyChecked: false,
          children: [
            {
              label: "Short Shorts",
              slug: "mens-clothing-shorts-short-shorts",
              checked: false,
              explicitlyChecked: false,
            },
            {
              label: "Long Shorts",
              slug: "mens-clothing-shorts-long-shorts",
              checked: false,
              explicitlyChecked: false,
            },
          ]
        },
        {
          label: "Swimwear",
          slug: "mens-clothing-swimwear",
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

  const toggleChildren = item => {
    console.log("toggleChildren", item.slug, item.checked)

    if (!item.children) return null;

    for (const index in item.children) {
      if (!item.children[index].explicitlyChecked) {
        item.children[index].checked = item.checked;
      }
      toggleChildren(item.children[index])
    }
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

    toggleChildren(newTreeData);

    setTreeData(newTreeData)
  }

  const toggleCheckChildren = () => {
    setSelectChildren(!selectChildren);
  }

  const recursiveRenderTree = (data) => {
    const { label, slug, checked, explicitlyChecked, children } = data;

    const checkedValue = selectChildren ? checked : explicitlyChecked;

    return (
      <TreeItem label={label} checkable expanded checkboxProps={{ checked: checkedValue, color: explicitlyChecked ? "secondary" : "defaultSecondary", onChange: toggleCheck, value: slug }}>
        {children && children.map(child => recursiveRenderTree(child))}
      </TreeItem>
    )
  }

  console.log(treeData)

  return (
    <div>
      <Typography variant="h3">Remove Products from Categories</Typography>

      <FormControlLabel
        control={<Checkbox />}
        label="Also select category descendants"
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
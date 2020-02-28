import React, { Fragment } from "react";
import { Box, Card, CardContent, Dialog, DialogHeader, DialogContent, DialogActions, Typography, Divider } from "@material-ui/core";
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import Banner from "../../../../package/src/components/Banner";
import Button from "../../../../package/src/components/Button";
import DialogTitle from "../../../../package/src/components/DialogTitle";
import Checkbox from "../../../../package/src/components/Checkbox";
import KeyboardShortcut from "../../../../package/src/components/KeyboardShortcut";
import FormControlLabel from "../../../../package/src/components/FormControlLabel";
import TreeItem from "../../../../package/src/components/TreeItem";

const tree = {
  label: "Men",
  slug: "mens",
  checked: true,
  hover: false,
  children: [
    {
      label: "Men’s Clothing",
      slug: "mens-clothing",
      parent: "mens",
      checked: false,
      hover: false,
      children: [
        {
          label: "Activewear",
          slug: "mens-clothing-activewear",
          parent: "mens-clothing",
          checked: true,
          hover: false,
          children: [
            {
              label: "Shirts",
              slug: "mens-clothing-activewear-shirts",
              parent: "mens-clothing-activewear",
              checked: true,
              hover: false,
            },
            {
              label: "Sweatshirts",
              slug: "mens-clothing-activewear-sweatshirts",
              parent: "mens-clothing-activewear",
              checked: false,
              hover: false,
            },
            {
              label: "Shorts",
              slug: "mens-clothing-activewear-shorts",
              parent: "mens-clothing-activewear",
              checked: false,
              hover: false,
            },
            {
              label: "Pants",
              slug: "mens-clothing-activewear-pants",
              parent: "mens-clothing-activewear",
              checked: false,
              hover: false,
              children: [
                {
                  label: "Shorts",
                  slug: "mens-clothing-activewear-pants-shorts",
                  parent: "mens-clothing-activewear-pants",
                  checked: false,
                  hover: false,
                },
                {
                  label: "Leggings",
                  slug: "mens-clothing-activewear-pants-leggings",
                  parent: "mens-clothing-activewear-pants",
                  checked: false,
                  hover: false,
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
          hover: false,
          children: [
            {
              label: "T-Shirts",
              slug: "mens-clothing-shirts-t-shirts",
              parent: "mens-clothing-shirts",
              checked: false,
              hover: false,
            },
            {
              label: "Button-up Shirts",
              slug: "mens-clothing-shirts-button-up-shirts",
              parent: "mens-clothing-shirts",
              checked: false,
              hover: false,
            },
          ]
        },
        {
          label: "Shorts",
          slug: "mens-clothing-shorts",
          parent: "mens-clothing",
          checked: false,
          hover: false,
          children: [
            {
              label: "Short Shorts",
              slug: "mens-clothing-shorts-short-shorts",
              parent: "mens-clothing-short",
              checked: false,
              hover: false,
            },
            {
              label: "Long Shorts",
              slug: "mens-clothing-shorts-long-shorts",
              parent: "mens-clothing-short",
              checked: false,
              hover: false,
            },
          ]
        },
        {
          label: "Swimwear",
          slug: "mens-clothing-swimwear",
          parent: "mens-clothing",
          checked: false,
          hover: false,
        }
      ]
    },
  ]
}

class EditProductCategories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyHoldCmd: false,
      keyHoldShift: false,
      selectParents: false,
      selectChildren: false,
      treeData: tree
    };
  }

  pressKey = event => {
    const { keyHoldCmd } = this.state;

    if (event.keyCode === 93) {
      this.setState({
        keyHoldCmd: true,
        selectChildren: true
      });
    } else if (event.keyCode === 16) {
      this.setState({
        keyHoldShift: true,
        selectParents: keyHoldCmd ? true : false
      });
    }
  }

  releaseKey = event => {
    if (event.keyCode === 93) {
      this.setState({
        keyHoldCmd: false,
        selectChildren: false,
        selectParents: false
      });
    } else if (event.keyCode === 16) {
      this.setState({
        keyHoldShift: false,
        selectParents: false
      });
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.pressKey, false);
    document.addEventListener("keyup", this.releaseKey, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.pressKey, false);
    document.addEventListener("keyup", this.releaseKey, false);
  }

  searchTree = (element, matchingSlug) => {
    if (element.slug == matchingSlug) {
      return element;
    } else if (element.children != null) {
      var i;
      var result = null;
      for (i=0; result == null && i < element.children.length; i++) {
        result = this.searchTree(element.children[i], matchingSlug);
      }
      return result;
    }
    return null;
  }

  toggleChildren = (item, newCheckValue) => {
    if (!item.children) return null;

    for (const index in item.children) {
      if (!item.children[index].explicitlyChecked) {
        item.children[index].checked = newCheckValue;
      }
      this.toggleChildren(item.children[index], newCheckValue)
    }
  }

  toggleParents = (item, treeData, newCheckValue) => {
    if (!item.parent) return null;

    const parent = this.searchTree(treeData, item.parent);

    parent.checked = newCheckValue;

    this.toggleParents(parent, treeData, newCheckValue);
  }

  toggleCheck = (event) => {
    const { treeData, selectChildren, selectParents } = this.state;

    const slug = event.currentTarget.value;

    let newTreeData = {...treeData};

    const item = this.searchTree(newTreeData, slug);

    const newCheckValue = item.checked ? false : true;
    item.checked = newCheckValue;

    if (selectParents) {
      this.toggleParents(item, newTreeData, newCheckValue);
    } else if (selectChildren) { 
      this.toggleChildren(item, newCheckValue);
    } 

    this.setState({ treeData: newTreeData });
  }

  toggleHoverChildren = (item, newHoverValue) => {
    if (!item.children) return null;

    for (const index in item.children) {
      if (!item.children[index].explicitlyChecked) {
        item.children[index].hover = newHoverValue;
      }
      this.toggleHoverChildren(item.children[index], newHoverValue)
    }
  }

  toggleHoverParents = (item, treeData, newHoverValue) => {
    if (!item.parent) return null;

    const parent = this.searchTree(treeData, item.parent);

    if (parent) {
      parent.hover = newHoverValue;

      this.toggleHoverParents(parent, treeData, newHoverValue);
    }
  }

  handleHoverOn = (data) => {
    const { treeData, selectChildren, selectParents } = this.state;

    let newTreeData = {...treeData};

    const item = this.searchTree(newTreeData, data.slug);

    const newHoverValue = item.checked ? true : true;
    item.hover = newHoverValue;

    if (selectParents) {
      this.toggleHoverParents(item, newTreeData, newHoverValue);
    } else if (selectChildren) { 
      this.toggleHoverChildren(item, newHoverValue);
    }

    this.setState({ treeData: newTreeData });
  }

  handleHoverOff = (data) => {
    const { treeData, selectChildren, selectParents } = this.state;

    let newTreeData = {...treeData};

    const item = this.searchTree(newTreeData, data.slug);

    const newHoverValue = undefined;
    item.hover = newHoverValue;

    // if (selectParents) {
      this.toggleHoverParents(item, newTreeData, newHoverValue);
    // } else if (selectChildren) { 
      this.toggleHoverChildren(item, newHoverValue);
    // }

    this.setState({ treeData: newTreeData });
  }

  recursiveRenderTree = (data) => {
    const { label, slug, checked, hover, children } = data;

    return (
      <TreeItem
        label={label}
        checkable
        expanded
        onMouseEnter={() => this.handleHoverOn(data)}
        onMouseLeave={() => this.handleHoverOff(data)}
        checkboxProps={{
          checked: checked ? true : false,
          color: "default",
          preview: hover,
          onChange: this.toggleCheck,
          value: slug
        }}
      >
        {children && children.map(child => this.recursiveRenderTree(child))}
      </TreeItem>
    )
  }

  renderKeyboardShortcut(name) {
    return (
      <Box component="kdb" display="inline" bgcolor="background.card.body" boxShadow={4} p={0.5} borderRadius={4}>
        {name}
      </Box>
    )
  }

  render() {
    const { treeData, selectChildren, selectParents } = this.state;

    const bannerMarkup = selectParents ? (
      <Banner alternate status="success" customIcon={<SubdirectoryArrowRightIcon fontSize="small" style={{ transform: "rotateX(180deg) rotateZ(90deg)" }} />}>
        Toggling all <Box component="strong" fontWeight="fontWeightBold">ancestors</Box>. Let go of <KeyboardShortcut>⇧ Shift</KeyboardShortcut> to toggle descendants.
      </Banner>
    ) : selectChildren ? (
      <Banner alternate status="success" customIcon={<SubdirectoryArrowRightIcon fontSize="small" />}>
        Toggling all <Box component="strong" fontWeight="fontWeightBold">descendants</Box>. Hold <KeyboardShortcut>⇧ Shift</KeyboardShortcut> to toggle all ancestors, or let go of <KeyboardShortcut>⌘ CMD</KeyboardShortcut> to toggle individuals.
      </Banner>
    ) : (
      <Banner alternate status="info">
        Hold <KeyboardShortcut>⌘ CMD</KeyboardShortcut> to toggle all descendants, or <KeyboardShortcut>⌘ CMD</KeyboardShortcut> + <KeyboardShortcut>⇧ Shift</KeyboardShortcut> to toggle all ancestors.
      </Banner>
    )

    return (
      <Fragment>
        <DialogTitle onClose={this.toggleOpenDrawer}>
          Edit Product Rules
        </DialogTitle>
        <DialogContent>
          {this.recursiveRenderTree(treeData)}
        </DialogContent>
        <DialogActions>
          <Box display="flex" flexDirection="column" alignItems="flex-start" width="100%">
            {bannerMarkup}
            <Box display="flex" alignSelf="flex-end" pt={2}>
              <Button onClick={this.toggleOpenDrawer}>
                Cancel
              </Button>
              <Box pl={1}>
                <Button onClick={this.toggleOpenDrawer} color="primary">
                  Save Changes
                </Button>
              </Box>
            </Box>
          </Box>
        </DialogActions>
      </Fragment>
    );
  }
}

export default EditProductCategories;
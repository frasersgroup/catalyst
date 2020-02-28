import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Container,
  Typography,
  Tabs,
  Tab,
  makeStyles
} from "@material-ui/core";
import clsx from "clsx";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from "../Button";
import Chip from "../Chip";
import Avatar from "../Avatar";

const useStyles = makeStyles((theme) => ({
  navBar: {
    color: theme.palette.text.primary,
    background: theme.palette.background.card.body,
    boxShadow: theme.shadows[4],
  },
  company: {
    display: "flex",
    alignItems: "center",
    paddingRight: theme.spacing(2),
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  companyName: {
    fontWeight: theme.typography.fontWeightBold,
    marginLeft: theme.spacing(1)
  },
  navItems: {
    display: "flex",
    alignItems: "center",

  },
  navItem: {
    marginLeft: theme.spacing(2),
    "&$active": {
      color: "blue"
    }
  },
  active: {},
  secondaryNavItems: {
    marginLeft: "auto"
  }
}));

const NavBar = React.forwardRef(function NavBar(props, ref) {
  const { company, navItems, secondaryNavItems } = props;
  const classes = useStyles();
  const [activeNavItem, setActiveNavItem] = React.useState(0);

  const renderNavItem = (navItem, index) => {
    const navItemClasses = clsx({
      [classes.navItem]: true,
      [classes.active]: index === activeNavItem
    });

    return (
      <Button variant="text" color={index === activeNavItem ? "primary" : "secondary"}>
        {navItem.label}
        {navItem.badge && <Badge badgeContent={navItem.badge} color="secondary" />}
      </Button>
    )
  }

  return (
    <AppBar position="static" className={classes.navBar}>
      <Container>
        <Toolbar>
          <div className={classes.company}>
            <Avatar src={company.logo} />
            <Typography className={classes.companyName}>{company.name}</Typography>
          </div>
          <div className={classes.navItems}>
            {navItems.map((navItem, index) => (
              renderNavItem(navItem, index)
            ))}
          </div>
          <div className={classes.secondaryNavItems}>
            {secondaryNavItems.map(secondaryNavItem => (
              <IconButton aria-label={secondaryNavItem.label}>
                {secondaryNavItem.icon}
              </IconButton>
            ))}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
});

export default NavBar;

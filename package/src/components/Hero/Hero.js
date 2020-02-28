import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Typography,
  Tabs,
  Tab,
  makeStyles
} from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ActionMenu from "../ActionMenu";
import Button from "../Button";
import Chip from "../Chip";
import Avatar from "../Avatar";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    background: theme.palette.background.card.header,
    boxShadow: theme.shadows[4],
    paddingTop: theme.spacing(2)
  },
  media: {
    display: "flex",
    marginTop: theme.spacing(2)
  },
  mediaImage: {
    marginRight: theme.spacing(2)
  },
  title: {
    marginTop: 6,
    marginBottom: 2
  },
  footer: {
    marginTop: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }
}));

const Hero = React.forwardRef(function Hero(props, ref) {
  const { backButton, image, chip, title, subtitle, tabs, action, moreActions } = props;
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container>
        {backButton && 
          <Button startIcon={<ArrowBackIcon />} variant="text" color="secondary">{backButton.label}</Button>
        }
        <div className={classes.media}>
          {image && <div className={classes.mediaImage}>
            <Avatar
              src={image}
              size="large"
            />
          </div>}
          <div className={classes.mediaText}>
            {chip && <Chip label={chip.label} status={chip.status} />}
            <Typography variant="h3" component="h1" className={classes.title}>{title}</Typography>
            <Typography color="textSecondary">{subtitle}</Typography>
          </div>
        </div>

        <div className={classes.footer}>
          {tabs && <Tabs value={0}>
            {tabs.map(tab => (
              <Tab label={tab} />
            ))}
          </Tabs>}
          <div>
            {action && <Button variant="text" startIcon={action.icon}>{action.label}</Button>}
            <ActionMenu
              options={moreActions}
              variant="text"
            />
          </div>
        </div>
      </Container>
    </div>
  );
});

export default Hero;

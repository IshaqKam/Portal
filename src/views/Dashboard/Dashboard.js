import React from "react";
// react plugin for creating charts
//import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
// @material-ui/icons
import DateRange from "@material-ui/icons/DateRange";
import GroupIcon from "@material-ui/icons/Group";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import ListAltIcon from "@material-ui/icons/ListAlt";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={15} sm={10} md={6}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <PeopleAltIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Crash Prepration Classes</p>
              <h3 className={classes.cardTitle}>
                150 <small>Students</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <div className={classes.stats}>
                    <ListAltIcon color="warning" />
                    Via Google Sheets
                  </div>
                </Danger>
              </div>
              <Link to={"crash-classes"} className={classes.link}>
                <Button color="warning">View Students</Button>
              </Link>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Card>
            <CardHeader color="primary" stats icon>
              <CardIcon color="danger">
                <GroupIcon />
              </CardIcon>
              <p className={classes.cardCategory}>
                Self Assessment Test Registrations
              </p>
              <h3 className={classes.cardTitle}>50</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats} color="warning">
                <DateRange />
                Last 24 Hours
              </div>
              <Link to={"self-assessment-test"} className={classes.link}>
                <Button color="danger">View SAT Data</Button>
              </Link>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

import { Paper, Grid, Typography, Switch } from "@material-ui/core";
import React from "react";

const Settings: React.FC = () => {
  return (
    <div className="settings-wrapper">
      <Typography variant="h2" align="center">
        Settings page
      </Typography>
      <Paper>
        <Grid container direction="column">
          <Typography variant="h5">Toggle Dark Mode: </Typography>
          <Switch></Switch>
        </Grid>
      </Paper>
    </div>
  );
};

export default Settings;

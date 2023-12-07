import React from "react";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";
import { Typography } from "@material-ui/core";

const Dashboard: React.FC = () => {
  const history = useHistory();

  return (
    <div className="dashboard-wrapper">
      <Typography variant="h2" align="center">
        Welcome to Dashboard
      </Typography>
      <Button
        title={"Go to ShoppingList"}
        onClick={() => history.push("/shoppinglist")}
      />
    </div>
  );
};

export default Dashboard;

import React, { useEffect } from "react";
import { DataGrid, GridColDef } from "@material-ui/data-grid";
import Button from "../../components/Button";
import { capitalize, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { RootState, RootDispatch } from "../../store";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Item",
    width: 150,
    valueFormatter: (params) => capitalize(params.row?.name),
  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 150,
  },
  {
    field: "date",
    headerName: "Date Added",
    width: 475,
    valueFormatter: (params) =>
      new Date(params.row?.date * 1000).toLocaleString(),
  },
];

const ShoppingList: React.FC = () => {
  const dbData = useSelector((state: RootState) => state.items);
  const dispatch = useDispatch<RootDispatch>();

  useEffect(() => {
    dispatch.items.loadAsync();
  }, [dispatch]);

  console.log(dbData);

  return (
    <div className="shoppinglist-wrapper">
      <Typography variant="h2" align="center">
        This is your Shopping List:
      </Typography>
      {/* hack here that renders the datagrid if theres data in it. It was the case before this, that the grid sometimes would render before recieving data from DB */}
      {dbData?.length > 0 && (
        <DataGrid
          rows={dbData}
          columns={columns}
          pageSize={10}
          autoHeight={true}
          autoPageSize={true}
          checkboxSelection
          disableSelectionOnClick
        />
      )}
      <Button
        title={"Add Item to ShoppingList"}
        onClick={() => {
          const name = prompt("Enter Item here:") as string;
          dispatch.items.addItem({ name, quantity: 1 });
        }}
      ></Button>
    </div>
  );
};

export default ShoppingList;

import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../Redux/actions';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { ordersColumns, ordersRows } from '../../dataHardcodeo/constants'


export default function DataGridDemo() {

  const orders = useSelector(state => state.orders);
  const dispatch = useDispatch();

  const restDataStorage = window.localStorage.getItem('RestData');
  const restData = JSON.parse(restDataStorage);
  const restoId = restData.restaurant.id;

  console.log("restDataId", restData.restaurant.id);
  console.log("RestDataStorage:", restDataStorage);

  React.useEffect(() => {
    dispatch(actions.getOrders(restoId));
  }, [dispatch, restoId]);

  const rows = ordersRows;
  const columns = ordersColumns;

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

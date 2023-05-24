import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { pedidosClienteColumns, pedidosClienteRows } from '../../dataHardcodeo/constants'


export default function PedidosCliente() {

  const rows = pedidosClienteRows;
  const columns  = pedidosClienteColumns;
  
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
      />
    </Box>
  );
};
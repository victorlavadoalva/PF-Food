import * as React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import * as actions from '../../Redux/actions';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { reservsRows, reservsColumns } from '../../dataHardcodeo/constants';


export default function DataGridDemo() {

    const reservs = useSelector(state => state.reservs);
    const dispatch = useDispatch();
    
    const restDataStorage = window.localStorage.getItem('RestData');
    const restData = JSON.parse(restDataStorage);
    const restoId = restData.restaurant.id;
    
    console.log("restDataId", restData.restaurant.id);
    console.log("RestDataStorage:", restDataStorage);
    
    React.useEffect(()=>{
        dispatch(actions.getReservs(restoId));
    }, [dispatch, restoId]);

    const rows = reservsRows;
    const columns = reservsColumns;

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

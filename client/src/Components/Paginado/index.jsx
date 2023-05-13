import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getRestorants } from "../../Redux/actions";
export default function PaginationRounded() {
  const amountPages = useSelector((state) => state.AmountPage)
  const dispatch = useDispatch()

const handleChange = (e,p) => {
  dispatch(getRestorants(p))
}

  return (
    <Stack spacing={2}>
      <Pagination count={amountPages} variant="outlined" onChange={handleChange} shape="rounded" />
    </Stack>
  );
}
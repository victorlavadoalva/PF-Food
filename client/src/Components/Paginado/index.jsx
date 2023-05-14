import Pagination from '@mui/material/Pagination';
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

      <Pagination count={Number(amountPages)} variant="outlined" onChange={handleChange} shape="rounded" />
 
  );
}
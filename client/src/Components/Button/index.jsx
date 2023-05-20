import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';

export default function BasicButtons() {
    const navigate = useNavigate();
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" sx={{ background: '#3A506B' }} onClick={() => navigate('/reservas')}>Reservas</Button>
      <Button variant="contained" sx={{ background: '#3A506B' }} onClick={() => navigate('/menu')}>Menú</Button>
    </Stack>
  );
}
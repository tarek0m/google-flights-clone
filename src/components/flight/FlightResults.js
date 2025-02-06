import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from '@mui/material';
import { formatDateWithDay } from '../../utils/dateUtils';

export const FlightResults = ({ itineraries, loading }) => {
  if (!itineraries || itineraries.length === 0) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 4,
          minHeight: 200,
        }}
      >
        <Typography variant='h5' color='text.secondary'>
          No flights found
        </Typography>
      </Box>
    );
  }

  return (
    <TableContainer
      elevation={0}
      sx={{
        bgcolor: 'background.paper',
        border: 1,
        borderColor: 'divider',
        mt: 2,
        pt: 0,
        maxHeight: 400, // Set the maximum height for scrolling
        overflowY: 'auto', // Enable vertical scrolling
      }}
    >
      <Table stickyHeader sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Airline</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Departure</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Arrival</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align='center'>
              Duration
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align='center'>
              Stops
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align='right'>
              Price
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {itineraries.map((itinerary, index) => (
            <TableRow
              key={index}
              hover
              sx={{
                '&:last-child td': { border: 0 },
                '&:hover': { backgroundColor: 'action.hover' },
              }}
            >
              <TableCell>
                <Box display='flex' alignItems='center'>
                  <img
                    src={itinerary.legs[0].carriers.marketing[0].logoUrl}
                    alt={itinerary.legs[0].carriers.marketing[0].name}
                    style={{ width: 20, height: 20, marginRight: 8 }}
                  />
                  <Typography variant='body2'>
                    {itinerary.legs[0].carriers.marketing[0].name}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant='body1' fontWeight='500'>
                  {formatDateWithDay(itinerary.legs[0].departure)}
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  {itinerary.legs[0].origin.displayCode}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='body1' fontWeight='500'>
                  {formatDateWithDay(itinerary.legs[0].arrival)}
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  {itinerary.legs[0].destination.displayCode}
                </Typography>
              </TableCell>
              <TableCell align='center'>
                {Math.floor(itinerary.legs[0].durationInMinutes / 60)}h{' '}
                {itinerary.legs[0].durationInMinutes % 60}m
              </TableCell>
              <TableCell align='center'>
                {itinerary.legs[0].stopCount === 0
                  ? 'Nonstop'
                  : `${itinerary.legs[0].stopCount} stop${
                      itinerary.legs[0].stopCount > 1 ? 's' : ''
                    }`}
              </TableCell>
              <TableCell align='right'>
                <Typography variant='body1' fontWeight='bold'>
                  {itinerary.price.formatted}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

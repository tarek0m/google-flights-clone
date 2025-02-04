import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { formatPrice } from '../../utils/formatters';
import { LoadingSpinner } from '../common/LoadingSpinner';

export const FlightResults = ({ flights, loading }) => {
  if (loading) return <LoadingSpinner />;

  return (
    <Grid container spacing={2}>
      {flights.map((flight) => (
        <Grid item xs={12} md={6} key={flight.id}>
          <Card>
            <CardContent>
              <Typography variant='h6'>{flight.airline}</Typography>
              <Typography>{formatPrice(flight.price)}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

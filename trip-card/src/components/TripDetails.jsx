import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getTripData from '../api/getTripData';
import { Box, Typography, Rating } from '@mui/material';

export default function TripDetails() {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    getTripData().then(data => {
      const found = data.find(t => t.id === Number(id));
      setTrip(found);
    });
  }, [id]);

  if (!trip) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ p: 4, maxWidth: 800, margin: '0 auto' }}>
      <img
        src={trip.image || '/placeholder.png'}
        alt={trip.name}
        style={{ width: '100%', borderRadius: '12px' }}
      />
      <Typography variant="h4" sx={{ mt: 2 }}>
        {trip.name}
      </Typography>
      <Rating value={trip.rating} readOnly />
      <Typography sx={{ mt: 2 }}>{trip.long_description}</Typography>
    </Box>
  );
}

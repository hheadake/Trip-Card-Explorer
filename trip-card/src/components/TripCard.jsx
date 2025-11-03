import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
  Button,
  Rating
} from '@mui/material';
import getTripData from '../api/getTripData';

export default function TripCard() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getTripData()
      .then(setItems)
      .catch(err => {
        console.error('Грешка:', err);
        setItems([]);
      });
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',   
        p: '40px 16px',
      }}
    >
      <ImageList
        cols={4}
        gap={16}
        sx={{
          width: '100%',
          maxWidth: 1200,           
          mx: 'auto',               
        }}
      >
        {items.map(trip => (
          <ImageListItem
            key={trip.id}
            sx={{
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: 2,
              p: 1,
            }}
          >
            <img
              src={trip.image || '/placeholder.png'}
              alt={trip.name}
              loading="lazy"
              style={{ borderRadius: '12px', width: '100%', display: 'block' }}
            />

            <ImageListItemBar
              position="below"
              title={
                <Typography
                  variant="h6"
                  sx={{ textAlign: 'center', mt: 1, fontWeight: 600 }}
                >
                  {trip.name || 'Без име'}
                </Typography>
              }
            />

            <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center' }}>
              <Rating value={trip.rating || 0} readOnly precision={0.5} />
            </Box>

            <Box sx={{ mt: 1, textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                {trip.description || 'Няма описание'}
              </Typography>
              <Button
                component={Link}
                to={`/trips/${trip.id}`}
                variant="contained"
                size="small"
                sx={{ mt: 1 }}
              >
                More Info
              </Button>
            </Box>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

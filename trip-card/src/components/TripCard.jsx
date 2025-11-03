
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
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
        maxWidth: 1200,
        margin: '0 auto',
        padding: '40px 16px',
      }}
    >
      <ImageList
        variant="masonry"
        cols={4}  
        gap={8}
      >
        {items.map(trip => (
          <ImageListItem key={trip.id}>
            <img
              src={trip.image}
              alt={trip.name}
              loading="lazy"
              style={{ borderRadius: '12px', width: '100%', display: 'block' }}
            />
            <ImageListItemBar
              position="below"
              title={trip.name || 'Без име'}
              subtitle={trip.rating != null ? `Рейтинг: ${trip.rating}` : ''}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

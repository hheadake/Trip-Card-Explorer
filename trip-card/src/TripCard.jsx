import React, { useState } from 'react';
import GalleryData from '../jsonData/GalleryData';
import { HashLink as Link } from 'react-router-hash-link';


// 🧩 MUI компоненти
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const Activities = () => {
  const [items] = useState(GalleryData);
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <>
     

      <Box
        sx={{
          width: '100%',
          maxWidth: 1200,
          margin: '0 auto',
          padding: '40px 16px',
        }}
        className="gallery-container"
      >
        <ImageList
          variant="masonry"
          cols={{ xs: 1, sm: 2, md: 3, lg: 4 }}
          gap={8}
        >
          {items.map((gallery) => (
            <ImageListItem key={gallery.id}>
              <img
                srcSet={`${gallery.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${gallery.image}?w=248&fit=crop&auto=format`}
                alt={gallery.title}
                loading="lazy"
                style={{ borderRadius: '12px' }}
              />
              <ImageListItemBar
                position="below"
                title={gallery.title || 'Без заглавие'}
                subtitle={gallery.author ? `Автор: ${gallery.author}` : ''}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

      {/* Ако искаш бутон за още */}
      {/* 
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Link to="/activities" className="gallery-load-more-btn">
          Вижте повече
        </Link>
      </div> 
      */}

  
    </>
  );
};

export default Activities;

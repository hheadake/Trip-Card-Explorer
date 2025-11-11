import { useEffect, useState } from 'react';
import {
  Box,
  ImageList,
  ImageListItem,
  Typography,
  Rating,
  Card,
  CardContent,
  Button
} from '@mui/material';

export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('/data/students.json')
      .then(res => res.json())
      .then(data => setStudents(data.students))
      .catch(err => {
        console.error('Грешка при зареждане:', err);
        setStudents([]);
      });
  }, []);

  const getLowestSubject = subjects => {
    let lowest = null;
    let lowestAvg = Infinity;
    for (const [subject, info] of Object.entries(subjects)) {
      if (info.avg < lowestAvg) {
        lowestAvg = info.avg;
        lowest = subject;
      }
    }
    return { subject: lowest, avg: lowestAvg };
  };

  const subjectName = key => {
    switch (key) {
      case 'math': return 'Математика';
      case 'history': return 'История';
      default: return key;
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: '40px 16px',
      }}
    >
      <ImageList
        cols={3}
        gap={16}
        sx={{
          width: '100%',
          maxWidth: 1000,
          mx: 'auto',
        }}
      >
        {students.map(student => {
          const weakest = getLowestSubject(student.subjects);

          return (
            <ImageListItem
              key={student.id}
              sx={{
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 3,
                bgcolor: 'background.paper',
              }}
            >
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <img
                  src={student.image || '/images/default.png'}
                  alt={student.name}
                  style={{
                    width: '100%',
                    height: 180,
                    objectFit: 'cover',
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8
                  }}
                />

                <CardContent>
                  <Typography variant="h6" align="center" fontWeight={600}>
                    {student.name}
                  </Typography>
                  <Typography variant="subtitle2" align="center" color="text.secondary">
                    Клас: {student.class}
                  </Typography>

                  <Box sx={{ mt: 2 }}>
                    {Object.entries(student.subjects).map(([subject, info]) => (
                      <Box key={subject} sx={{ mb: 1 }}>
                        <Typography variant="body2">
                          {subjectName(subject)}: <strong>{info.avg.toFixed(2)}</strong>
                        </Typography>
                        <Rating value={info.avg / 2} precision={0.5} readOnly />
                      </Box>
                    ))}
                  </Box>

                  <Box sx={{ mt: 2, textAlign: 'center' }}>
                    <Typography variant="body2" color="error">
                      ⚠️ Препоръчва се консултация по:{' '}
                      <strong>{subjectName(weakest.subject)}</strong> ({weakest.avg.toFixed(2)})
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </ImageListItem>
          );
        })}
      </ImageList>

      {/* 👉 Бутонът "Виж повече" под списъка */}
      <Box sx={{ mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => console.log('TODO: навигация или зареждане на още')}
        >
          Нужда от консултация
        </Button>
      </Box>
    </Box>
  );
}

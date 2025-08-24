import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Logos = [
    {
        src: '/image/him-gov.png',
        url: 'https://himachal.nic.in/en-IN/',
      },
  {
    src: '/image/digital-india.jpg',
    url: 'https://www.digitalindia.gov.in/',
  },
  {
    src: '/image/my-gov.png',
    url: 'https://www.mygov.in/',
  },
  {
    src: '/image/data-gov.png',
    url: 'https://data.gov.in/',
  },
  {
    src: '/image/india-gov.png',
    url: 'https://www.india.gov.in/',
  },
];

const logoStyle = {
  width: '100px',
  height: '80px',
  marginBottom: '8px',
  
};

export default function Usefullinks() {
  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography
        component="h5"
        variant="h4"
        align="center"
        color="text.primary"
        fontWeight={"Bold"}
        fontFamily='"Monito", sans-serif'
        sx={{ mb: 2 }}
      >
       Useful Links
      </Typography>
      <Grid container justifyContent="center" spacing={10}>
        {Logos.map((logo, index) => (
          <Grid
            item
            key={index}
            sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <a href={logo.url} target="_blank" rel="noopener noreferrer">
              <img
                src={logo.src}
                alt={`Logo ${index + 1}`}
                style={logoStyle}
              />
            </a>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

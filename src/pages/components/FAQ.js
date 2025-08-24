import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container
      id="faq"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        display: 'flex',
        backgroundColor:'#F0F3FF',
        backgroundSize:'cover',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'center', md: 'flex-start' },
        gap: { xs: 3, sm: 6 },
      }}
    >
    
      <Box sx={{ flex: 2, width: '100%' }}>
        <Typography
          component="h2"
          variant="h4"
          color="text.primary"
          sx={{
            textAlign: { xs: 'center', md: 'left' },
            fontFamily: '"Monito",sans-serif',
            fontSize: '2.3rem',
            fontWeight: 'bold',
            mb: 4,
          }}
        >
          Frequently asked questions
        </Typography>
        <Box>
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1d-content"
              id="panel1d-header"
              sx={{
                '&:hover': {
                  backgroundColor: '#4299e1',
                },
              }}
            >
              <Typography
                component="h3"
                variant="subtitle2"
                sx={{
                  fontFamily: '"Monito",sans-serif',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                }}
              >
            What is E-Kalyan?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{
                  maxWidth: { sm: '100%', md: '70%' },
                  fontFamily: 'montserratregular',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                }}
              >
                Single Sign-On is a centralized session and user authentication service in which a set of login credentials can be used to access multiple applications during the same session. The service helps in providing a seamless user experience by eliminating the need of proving the user identity to different applications.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1d-content"
              id="panel1d-header"
              sx={{
                '&:hover': {
                  backgroundColor: '#4299e1',
                },
              }}
            >
              <Typography
                component="h3"
                variant="subtitle2"
                sx={{
                  fontFamily: '"Monito",sans-serif',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                }}
              >
            What is E-Kalyan?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{
                  maxWidth: { sm: '100%', md: '70%' },
                  fontFamily: '"Monito",sans-serif',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                }}
              >
                Single Sign-On is a centralized session and user authentication service in which a set of login credentials can be used to access multiple applications during the same session. The service helps in providing a seamless user experience by eliminating the need of proving the user identity to different applications.
              </Typography>
            </AccordionDetails>
          </Accordion><Accordion
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1d-content"
              id="panel1d-header"
              sx={{
                '&:hover': {
                  backgroundColor: '#4299e1', 
                },
              }}
            >
              <Typography
                component="h3"
                variant="subtitle2"
                sx={{
                  fontFamily:'"Monito",sans-serif',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                }}
              >
            What is E-Kalyan?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{
                  maxWidth: { sm: '100%', md: '70%' },
                  fontFamily:'"Monito",sans-serif',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                }}
              >
                Single Sign-On is a centralized session and user authentication service in which a set of login credentials can be used to access multiple applications during the same session. The service helps in providing a seamless user experience by eliminating the need of proving the user identity to different applications.
              </Typography>
            </AccordionDetails>
          </Accordion><Accordion
            expanded={expanded === 'panel4'}
            onChange={handleChange('panel4')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1d-content"
              id="panel1d-header"
              sx={{
                '&:hover': {
                  backgroundColor: '#4299e1', 
                },
              }}
            >
              <Typography
                component="h3"
                variant="subtitle2"
                sx={{
                  fontFamily:'"Monito",sans-serif',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                }}
              >
            What is E-Kalyan?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{
                  maxWidth: { sm: '100%', md: '70%' },
                  fontFamily:'"Monito",sans-serif',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                }}
              >
                Single Sign-On is a centralized session and user authentication service in which a set of login credentials can be used to access multiple applications during the same session. The service helps in providing a seamless user experience by eliminating the need of proving the user identity to different applications.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Container>
  );
}
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useLanguage } from "../../context/LanguageContext";

const logoStyle = {
  width: "50px",
  height: "40px",
  cursor: "pointer",
};

export default function Footer() {
  const { language } = useLanguage();

  const footerContent = {
    English: {
      copyright:
        "© 2024 Department of Digital Technologies and Governance,Government of Himachal Pradesh",
      contactUs: "Contact Us",
      address: "DDTG Himachal Pradesh I.T. Bhawan, Mehli, Shimla-171013",
      phone: "0177 2628914",
      email: "dirit-hp@nic.in",
      state: "Himachal Pradesh",
    },
    Hindi: {
      copyright:
        "© 2024 डिजिटल प्रौद्योगिकी और शासन विभाग,हिमाचल प्रदेश सरकार",
      contactUs: "संपर्क करें",
      address: "डीडीटीजी हिमाचल प्रदेश आई.टी. भवन, मेहली, शिमला-171013",
      phone: "0177 2628914",
      email: "dirit-hp@nic.in",
      state: "हिमाचल प्रदेश",
    },
  };

  const content = footerContent[language];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#ffff",
        py: { xs: 4, sm: 6 },
        mt: "auto",
        textAlign: "center",
        fontFamily: '"Monito", sans-serif',
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              <img src="/image/HP-Govt-Logo.png" style={logoStyle} alt="logo" />
              <Box sx={{ ml: { xs: 0, sm: 2 }, mt: { xs: 2, sm: 0 } }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#1e3a8a",
                    fontWeight: "bold",
                    fontSize: { xs: "1.3rem", sm: "1.5rem" },
                  }}
                >
                  {content.state}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: { xs: "0.85rem", sm: "0.875rem" } }}
                >
                  {content.copyright}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
              sx={{ fontSize: { xs: "1.5rem", sm: "1.25rem" } }}
            >
              {content.contactUs}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: { xs: "0.85rem", sm: "0.875rem" } }}
            >
              {content.address}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: { xs: "0.85rem", sm: "0.875rem" } }}
            >
              {content.phone}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: { xs: "0.875rem", sm: "0.875rem" } }}
            >
              <Link href={`mailto:${content.email}`} color="inherit">
                {content.email}
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useLanguage } from "../../context/LanguageContext";

const Boxsection = () => {
  const { language } = useLanguage();

  const items = [
    {
      icon: (
        <img
          src="/image/icons8-file-100.png"
          style={{ width: "50px", height: "50px" }}
        />
      ),
      title:
        language === "English"
          ? "Support for Specially Abled"
          : "विकलांगों के लिए सहायता",
      description:
        language === "English"
          ? "Various schemes are in place to support the specially abled community, ensuring they receive equal opportunities and resources to improve their quality of life."
          : "विकलांग समुदाय का समर्थन करने के लिए विभिन्न योजनाएं लागू हैं, यह सुनिश्चित करने के लिए कि उन्हें जीवन की गुणवत्ता में सुधार के लिए समान अवसर और संसाधन प्राप्त हों।",
    },
    {
      icon: (
        <img
          src="/image/cmp.png"
          style={{ width: "60px", height: "60px" }}
        />
      ),
      title:
        language === "English"
          ? "Empowerment of Minorities"
          : "अल्पसंख्यकों का सशक्तिकरण",
      description:
        language === "English"
          ? "Programs and initiatives have been launched to empower minorities, focusing on their education, employment, and overall well-being."
          : "अल्पसंख्यकों को सशक्त बनाने के लिए कार्यक्रम और पहलें शुरू की गई हैं, जो उनकी शिक्षा, रोजगार और समग्र कल्याण पर केंद्रित हैं।",
    },
    {
      icon: (
        <img
          src="/image/icons8-file-100.png"
          style={{ width: "50px", height: "50px" }}
        />
      ),
      title:
        language === "English"
          ? "Upliftment of SCs and OBCs"
          : "एससी और ओबीसी का उत्थान",
      description:
        language === "English"
          ? "Dedicated schemes and policies are in place to uplift the socio-economic status of Scheduled Castes (SCs) and Other Backward Classes (OBCs), ensuring their integration into mainstream society."
          : "अनुसूचित जातियों (एससी) और अन्य पिछड़ा वर्ग (ओबीसी) की सामाजिक-आर्थिक स्थिति को ऊपर उठाने के लिए विशेष योजनाएं और नीतियां लागू हैं, यह सुनिश्चित करते हुए कि उन्हें मुख्यधारा के समाज में एकीकृत किया जाए।",
    },
  ];

  return (
    <Box
      id="about-section"
      sx={{
        bgcolor: "#1876D0",
        borderRadius: "8px",
        padding: "40px",
        marginTop: "10px",
        marginBottom: "40px",
        maxWidth: "1400px",
        maxHeight: "auto",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: "100%", // Full width
            textAlign: "center",
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            sx={{
              fontFamily: '"Monito", sans-serif',
              color: "#fff",
              maxWidth: "100%", // Ensures the title spans the full box width
              textAlign: "center", // Centers the text within the box
            }}
          >
            {language === "English"
              ? "Directorate for the Empowerment of SCs, OBCs, Minorities & the Specially Abled, Himachal Pradesh"
              : "अनुसूचित जाति, अन्य पिछड़ा वर्ग, अल्पसंख्यक और विशेष रूप से सक्षम सशक्तिकरण निदेशालय, हिमाचल प्रदेश"}
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: "100%",
                  backgroundColor: "transparent",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  {item.icon}
                  <Typography fontWeight="medium" sx={{ color: "#fff" }}>
                    {item.title}
                  </Typography>
                </Box>
                <div>
                  <Typography variant="body2" sx={{ color: "#fff" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Boxsection;

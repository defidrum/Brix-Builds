import * as React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  useTheme,
  alpha,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const GlassCard = styled(Card)(({ theme }) => ({
  background: alpha(theme.palette.background.paper, 0.9),
  borderRadius: 8,
  boxShadow: theme.shadows[3],
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',  // Ensures all cards have a consistent height
}));

const AboutPage = () => {
  const theme = useTheme();

  const values = [
    {
      title: 'Quality & Craftsmanship',
      description: 'At Brix Builds, quality is the cornerstone of every project. Our team of skilled professionals brings years of expertise and a meticulous eye for detail to ensure each build meets the highest standards.',
    },
    {
      title: 'Community Impact',
      description: 'We are committed to creating spaces that not only meet the needs of our clients but also enrich the communities around them. Our projects are designed to support local economies and foster lasting connections.',
    },
    {
      title: 'Sustainability',
      description: 'Brix Builds believes in sustainable development. We implement eco-friendly practices in our construction processes, striving to reduce our environmental footprint and create spaces that contribute to a sustainable future.',
    },
    {
      title: 'Client-Centered Approach',
      description: 'Our clients are at the heart of everything we do. From the initial consultation to the final walk-through, we work closely with each client to ensure their vision becomes a reality, exceeding expectations every step of the way.',
    },
  ];

  return (
    <Box sx={{ pt: 10, pb: 10, background: alpha(theme.palette.primary.light, 0.02) }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" sx={{ mb: 4, fontWeight: 700 }}>
          About Brix Builds
        </Typography>
        <Typography align="center" color="text.secondary" sx={{ mb: 6, maxWidth: 700, mx: 'auto' }}>
          At Brix Builds, we are more than builders; we are visionaries dedicated to creating spaces that transform communities, enhance lifestyles, and contribute to a sustainable future.
        </Typography>
        <Grid container spacing={4} alignItems="stretch">
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <GlassCard>
                <CardContent sx={{ p: 4, textAlign: 'center', height: '100%' }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    {value.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {value.description}
                  </Typography>
                </CardContent>
              </GlassCard>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            Our Mission
          </Typography>
          <Typography align="center" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
            To create meaningful, sustainable spaces that empower our clients, enhance communities, and leave a positive legacy for future generations. With every project, we strive to build not just structures, but futures.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;

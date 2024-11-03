import * as React from 'react';
import {
  Box,
  Container,
  Grid,
  Button,
  Typography,
  AppBar,
  Toolbar,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  alpha
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Menu as MenuIcon,
  Business as BusinessIcon,
  People as PeopleIcon,
  Email as EmailIcon,
  Phone as PhoneIcon
} from '@mui/icons-material';
import Logo from "../images/brixbuildsmainlogo.png";
import JordanHeadshot from "../images/jordanheadshot.png";
import TatyanaHeadshot from "../images/tatyanaheadshot.png";
import TerriHeadshot from "../images/terriheadshot.png";
import { GraduationCap } from 'lucide-react';

// Styled components
const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 8,
  padding: '8px 24px',
  fontSize: '0.9rem',
  fontWeight: 600,
  textTransform: 'capitalize',
  boxShadow: 'none',
  '&:hover': {
    boxShadow: 'none',
    backgroundColor: theme.palette.primary.dark,
  },
}));

const GlassCard = styled(Card)(({ theme }) => ({
  background: alpha(theme.palette.background.paper, 0.9),
  borderRadius: 8,
  boxShadow: theme.shadows[3],
  minHeight: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

// Handlers
const handleDevelopmentCourseClick = () => {
  window.open('https://www.brix-builds-s-school.teachable.com', '_blank');
};

const handleLearnMoreClick = () => { 
  window.open('/about', '_self');
};

const HomePage = () => {
  const theme = useTheme();

  const serviceItems = [
    { icon: <BusinessIcon sx={{ fontSize: 32 }} />, title: 'Development', description: 'Strategic real estate development with a focus on sustainability and community impact.' },
    { icon: <GraduationCap size={32} />, title: 'Development Course', description: 'Learn Real Estate Development from start to finish, from Brix Builds', onClick: handleDevelopmentCourseClick },
    { icon: <PeopleIcon sx={{ fontSize: 32 }} />, title: 'Consulting', description: 'Professional guidance to optimize your real estate investments and projects.' },
  ];

  const leadershipItems = [
    { name: 'Terri Drummond', title: 'CIO', image: TerriHeadshot },
    { name: 'Jordan Drummond', title: 'CFO', image: JordanHeadshot },
    { name: 'Tatyana Dorcinvil', title: 'CDO / Director of Sales & Marketing', image: TatyanaHeadshot },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ minHeight: '80vh', pt: 10, background: alpha(theme.palette.primary.light, 0.02), display: 'flex', alignItems: 'center' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography component="h1" sx={{ fontSize: { xs: '2.5rem', md: '3rem' }, fontWeight: 700, mb: 3 }}>
                  Building Dreams, Crafting Futures
                </Typography>
                <Typography variant="h5" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.6 }}>
                  Transform your vision into reality with our innovative building solutions and expert craftsmanship.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <StyledButton variant="contained">View Projects</StyledButton>
                  <StyledButton onClick={handleLearnMoreClick} variant="outlined">Learn More</StyledButton>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box component="img" src={Logo} alt="Brix Builds Hero" sx={{ width: '100%', maxWidth: 500, height: 'auto' }} />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Typography variant="h4" align="center" sx={{ mb: 2, fontWeight: 700 }}>
          Our Services
        </Typography>
        <Typography align="center" color="text.secondary" sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}>
          Comprehensive solutions tailored to your needs, delivered with excellence
        </Typography>
        <Grid container spacing={4}>
          {serviceItems.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <GlassCard onClick={service.onClick} sx={{ cursor: service.onClick ? 'pointer' : 'default' }}>
                <CardContent sx={{ p: 4, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <IconButton sx={{ color: 'primary.main', mb: 2, '&:hover': {backgroundColor: 'transparent', boxShadow: 'none'}}}>
                    {service.icon}
                  </IconButton>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    {service.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </GlassCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Leadership Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Typography variant="h4" align="center" sx={{ mb: 2, fontWeight: 700 }}>
          Meet Our Leadership
        </Typography>
        <Typography align="center" color="text.secondary" sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}>
          Get to know the experts driving our vision forward.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {leadershipItems.map((leader, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <GlassCard>
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <Avatar
                    src={leader.image} 
                    alt={leader.name} 
                    sx={{ width: 100, height: 150, mb: 2, mx: 'auto', marginTop: 4 }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>{leader.name}</Typography>
                  <Typography color="text.secondary">{leader.title}</Typography>
                </CardContent>
              </GlassCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Contact Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: theme.palette.grey[200] }}>
        <Container maxWidth="lg" style={{ textAlign: "center" }}>
          <Typography variant="h4" align="center" sx={{ mb: 2, fontWeight: 700 }}>
            Contact Us
          </Typography>
          <Typography align="center" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
            We’d love to hear from you! Reach out to discuss your project or any inquiries.
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', marginLeft: "300px", alignItems: 'center' }}>
                <PhoneIcon sx={{ fontSize: 32, mr: 2 }} />
                <Typography variant="h6">+ 1 (469) 466-1002</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', marginLeft: "30px", alignItems: 'center' }}>
                <EmailIcon sx={{ fontSize: 32, mr: 2 }} />
                <Typography variant="h6">info@brixbuilds.com</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;

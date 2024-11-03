import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Avatar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  styled
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../images/brixbuildsmainlogo.png";
import { Link } from 'react-router-dom';


const Header = () => {

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

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="fixed" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(8px)' }}>
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 4, md: 6 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar src={Logo} alt="Brix Builds Logo" sx={{ width: 48, height: 48, mr: 2 }} />
          <Typography variant="h6" sx={{ display: { xs: 'none', md: 'block' }, fontWeight: 700 }}>
            Brix Builds
          </Typography>
        </Box>
        {isMobile ? (
          <IconButton onClick={(e) => setAnchorEl(e.currentTarget)} sx={{ color: 'text.primary' }}>
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            {['Home', 'Services', 'About', 'Contact'].map((item) => (
              <Link to={item === 'Home' ? '/' : item.toLowerCase()} key={item} style={{ textDecoration: 'none' }}>
                <Button sx={{ color: 'text.primary', fontWeight: 600 }}>
                  {item}
                </Button>
              </Link>
            ))}
            <StyledButton onClick={() => window.open('https://linktr.ee/brixbuilds')} variant="contained">
              Connect with us
            </StyledButton>
          </Box>
        )}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          PaperProps={{ sx: { mt: 2 } }}
        >
          {['Home', 'Services', 'About', 'Contact'].map((item) => (
            <MenuItem key={item} onClick={() => setAnchorEl(null)}>
              <Link to={item === 'Home' ? '/' : item.toLowerCase()} style={{ textDecoration: 'none', color: 'inherit' }}>
                {item}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

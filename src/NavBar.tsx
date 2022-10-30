import MenuIcon from '@mui/icons-material/Menu';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <h1><RocketLaunchIcon/> SpaceX Launch</h1>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
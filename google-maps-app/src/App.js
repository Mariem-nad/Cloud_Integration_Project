import React from 'react';
import MapComponent from './components/MapComponent';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';




const App = () => {
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Google Maps Integration
          </Typography>
        </Toolbar>
      </AppBar>
      <MapComponent />
    </Container>
  );
};

export default App;




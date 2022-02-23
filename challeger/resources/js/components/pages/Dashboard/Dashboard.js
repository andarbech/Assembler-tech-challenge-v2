import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Button from '@mui/material/Button';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import Link from '@mui/material/Link'; 
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from '../../Footer';
import CardGif from '../../CardGif';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllGifs } from '../../../redux/gif/gif-actions';


const theme = createTheme();

export default function Dashboard() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(console.log("andresito"))
    dispatch(getAllGifs)
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {/* {cards.map((card) => (
            ))} */}
            <CardGif/>
          </Grid>
        </Container>
      </main>
      <Footer/>
    </ThemeProvider>
  );
}
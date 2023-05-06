import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Iconify from '../iconify/Iconify';

export default function FeatureCard({ title, path, colorTheme }) {
  FeatureCard.propTypes = {
    title: PropTypes.string,
    path: PropTypes.string,
    colorTheme: PropTypes.string,
  };

  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        width: { xs: 325, sm: '100%', md: '100%' },
        height: { xs: 300, sm: 250, md: 275 },
        maxWidth: { sm: 300, md: 325 },
        maxHeight: { sm: 275, md: 300 },
        position: 'relative',
        borderRadius: '10px',
        backgroundColor: theme.palette[colorTheme].lighter,
      }}
    >
      <Box
        onClick={() => navigate(path)}
        sx={{
          backgroundColor: theme.palette[colorTheme].darker,
          position: 'absolute',
          top: 10,
          right: 10,
          padding: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
          cursor: 'pointer',
        }}
      >
        <Iconify icon="material-symbols:arrow-outward-rounded" sx={{ color: 'white' }} />
      </Box>
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Typography
          variant="body2"
          component="div"
          sx={{
            color: theme.palette[colorTheme].dark,
            pb: 5,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Iconify
            icon="uil:arrow-growth"
            sx={{ color: theme.palette[colorTheme].darker, marginRight: 1 }}
          />
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

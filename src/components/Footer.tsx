import React from 'react';
import { Email, GitHub, LinkedIn, Description } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';

const Footer: React.FC = () => (
  <footer>
    <Box textAlign="center" py={3} bgcolor="primary.main" color="white">
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Matthew Smith
      </Typography>
      <Box mt={2}>
        <IconButton href="mailto:msmith1392@gmail.com" aria-label="Email" color="inherit">
          <Email />
        </IconButton>
        <IconButton href="https://github.com/msmith1392" target="_blank" rel="noopener noreferrer" aria-label="GitHub" color="inherit">
          <GitHub />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/matthew-smith-22310b111/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" color="inherit">
          <LinkedIn />
        </IconButton>
        <IconButton href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume" color="inherit">
          <Description />
        </IconButton>
      </Box>
    </Box>
  </footer>
);

export default Footer;
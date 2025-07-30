import React from 'react';
import { Card as MuiCard, CardContent, CardHeader, IconButton, Box } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type CardProps = {
  title?: React.ReactNode;
  expandable?: boolean;
  expanded?: boolean;
  onToggle?: () => void;
  children: React.ReactNode;
  className?: string;
  showBottomToggle?: boolean;
};

const Card: React.FC<CardProps> = ({
  title,
  expandable = false,
  expanded = true,
  onToggle,
  children,
  className = '',
  showBottomToggle = false,
}) => (
  <MuiCard className={className} sx={{ cursor: expandable ? 'pointer' : 'default', mb: 2 }}>
    {title && (
      <CardHeader
        title={title}
        action={
          expandable && (
            <IconButton onClick={onToggle} aria-label={expanded ? 'Collapse' : 'Expand'}>
              {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          )
        }
        sx={{ pb: 0 }}
      />
    )}
    {(expanded || !expandable) && (
      <CardContent>
        {children}
        {expandable && expanded && showBottomToggle && (
          <Box display="flex" justifyContent="center" mt={2}>
            <IconButton onClick={onToggle} aria-label="Collapse">
              <ExpandLessIcon />
            </IconButton>
          </Box>
        )}
      </CardContent>
    )}
  </MuiCard>
);

export default Card;
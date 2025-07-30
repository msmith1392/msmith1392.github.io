import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useTheme } from "@mui/material/styles";

type NavItem = {
  to: string;
  label: string;
  end?: boolean;
};

const navItems: NavItem[] = [
  { to: "/", label: "About", end: true },
  { to: "/work-experience", label: "Experience" },
  { to: "/skills", label: "Skills" },
  { to: "/education", label: "Education" },
  { to: "/contact", label: "Contact" },
];

const drawerWidth: number = 240;

const Header: React.FC = () => {
  const theme: import("@mui/material/styles").Theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(!isMobile);

  // Auto-collapse drawer when screen gets small
  React.useEffect(() => {
    setDrawerOpen(!isMobile);
  }, [isMobile]);

  const handleDrawerToggle: () => void = () => setDrawerOpen((open) => !open);

  return (
    <>
      <AppBar position="sticky" color="primary" sx={{ mb: 2 }}>
        <Toolbar>
          {/* Hamburger menu for mobile or collapsed sidebar */}
          {(isMobile || !drawerOpen) && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              textAlign: "center", // Center the text
              fontWeight: "bold",
            }}
          >
            Matthew Smith - Software Developer
          </Typography>
        </Toolbar>
      </AppBar>
      {/* Permanent drawer on desktop, temporary on mobile */}
      <Drawer
        variant={isMobile ? "temporary" : "persistent"}
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "primary.main", // Match AppBar color
            color: "primary.contrastText", // Match AppBar text color
          },
        }}
      >
        <Box
          sx={{ width: drawerWidth, mt: 2 }}
          role="presentation"
          onClick={isMobile ? handleDrawerToggle : undefined}
          onKeyDown={isMobile ? handleDrawerToggle : undefined}
        >
          {/* Collapse button for desktop */}
          {!isMobile && (
            <IconButton
              onClick={() => setDrawerOpen(false)}
              sx={{ mb: 1, ml: 1 }}
              aria-label="Close sidebar"
            >
              <ChevronLeftIcon />
            </IconButton>
          )}
          <List>
            {navItems.map(({ to, label, end }) => (
              <ListItem key={label} disablePadding>
                <NavLink
                  to={to}
                  end={end}
                  style={({ isActive }) => ({
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: isActive ? "underline" : "none",
                    color: "inherit",
                    display: "block",
                  })}
                >
                  <ListItemButton>
                    <ListItemText primary={label} />
                  </ListItemButton>
                </NavLink>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItemText primary="Resume" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      {/* Main content should have left margin on desktop */}
      <Box sx={{ ml: { md: drawerOpen ? `${drawerWidth}px` : 0 } }} />
    </>
  );
};

export default Header;
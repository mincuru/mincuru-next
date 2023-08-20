"use client";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface Props {
  handleDrawerToggle: Function;
}

export default function MincuruAppBar(props: Props) {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => props.handleDrawerToggle()}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          みんクル
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

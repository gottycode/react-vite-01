import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import MoreIcon from "@mui/icons-material/MoreVert";
import AccountCircle from "@mui/icons-material/AccountCircle";
const Header = () => {
  const handleMenu = () => {};
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton color="inherit" edge="start"></IconButton>
        <Typography variant="h6" noWrap>
          Advanced Material UI Styling
        </Typography>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>{" "}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

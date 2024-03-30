import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { orange } from "../../constants/color";
import { Menu as MenuIcon } from "@mui/icons-material";

const Header = () => {
  const handleMobile = () => {};
  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: orange,
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              Chat App
            </Typography>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
              }}
            />
            <Box>Final</Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;

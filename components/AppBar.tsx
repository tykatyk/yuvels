import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Logo from "./Logo";
import Link from "./Link";
import contacts from "../helpers/contacts";
import { css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";

const pages = [
  { href: "/accounting", description: "Бухгалтерські послуги" },
  { href: "/ecology", description: "Екологічні послуги" },
  { href: "/registration", description: "Реєстрація ФОП та ЮО" },
  { href: "/prices", description: "Ціни" },
  { href: "/contacts", description: "Контакти" },
];

function ResponsiveAppBar() {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="span"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Logo />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.description} onClick={handleCloseNavMenu}>
                  <Link
                    sx={{ color: "#fff", textDecoration: "none" }}
                    href={page.href}
                  >
                    {page.description}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              color: "#92eb34",
              display: { xs: "flex", md: "none" },
              mr: 1,
              flexGrow: 1,
            }}
          >
            <Logo />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              paddingRight: {
                md: "1rem",
                lg: "2rem",
              },
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Box
                component="span"
                key={page.description}
                onClick={handleCloseNavMenu}
                sx={{
                  display: "flex",
                  my: 2,
                  padding: "0.375rem 0.5rem",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  letterSpacing: "0.02857em",
                  color: "white",
                  alignItems: "center",
                }}
              >
                <Link
                  css={css({
                    textTransform: "uppercase",
                    color: "#fff",
                    textDecoration: "none",
                    display: "block",
                    textAlign: "center",
                    [theme.breakpoints.down("lg")]: {
                      fontSize: "0.75rem",
                    },
                    "&.active": {
                      borderBottom: "2px solid #fff",
                    },
                  })}
                  href={`${page.href}`}
                >
                  {page.description}
                </Link>
              </Box>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { md: "0.875rem", lg: "1.125rem" },
                letterSpacing: { lg: "0.05rem" },
                color: "#92eb34",
              }}
            >
              {contacts.phone}
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

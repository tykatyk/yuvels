import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { useTheme } from "@mui/material/styles";
import Logo from "./Logo";
import Link from "./Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import FacebookIcon from "@mui/icons-material/Facebook";
import contacts from "../helpers/contacts";

export default function Footer() {
  const theme = useTheme();
  return (
    <footer
      style={{
        minHeight: "6rem",
        background: "#262529",
        display: "flex",
        alignItems: "center",
        padding: "2rem 0",
      }}
    >
      <Container maxWidth="md">
        <Grid
          container
          sx={{
            [theme.breakpoints.down("md")]: {
              "& > *": {
                marginBottom: "1rem",
              },
            },
          }}
        >
          <Grid xs={12} sm={3}>
            <List dense={true}>
              <ListItem style={{ justifyContent: "flex-start" }}>
                <Logo />
              </ListItem>
              <ListItem style={{ justifyContent: "flex-start" }}>
                <Typography variant="body2" color="text.secondary">
                  ©{new Date().getFullYear()}
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid
            xs={12}
            sm={7}
            sx={{
              display: "flex",
              justifyContent: "center",
              [theme.breakpoints.down("md")]: {
                justifyContent: "flex-start",
              },
            }}
          >
            <List dense={true}>
              <ListItem>
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <LocationOnIcon sx={{ marginRight: "1rem" }} />
                  <Typography
                    component="div"
                    variant="body2"
                    color="text.secondary"
                  >
                    {contacts.address}
                  </Typography>
                </Box>
              </ListItem>
              <ListItem>
                <Box sx={{ display: "flex" }}>
                  <LocalPhoneIcon sx={{ marginRight: "1rem" }} />
                  <Link
                    variant="body2"
                    sx={{
                      textDecoration: "none",
                      color: theme.palette.text.secondary,
                    }}
                    href={`tel:${contacts.phone}`}
                  >
                    {contacts.phone}
                  </Link>
                </Box>
              </ListItem>
            </List>
          </Grid>
          <Grid xs={12} sm={2}>
            <List dense={true}>
              <ListItem
                sx={{
                  justifyContent: "flex-end",
                  [theme.breakpoints.down("md")]: {
                    justifyContent: "flex-start",
                  },
                }}
              >
                <Link
                  href="https://www.facebook.com/profile.php?id=100089295870178"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "#fff" }}
                >
                  <FacebookIcon style={{ fontSize: "2.5rem" }} />
                </Link>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Logo from "./Logo";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function Footer() {
  //ToDo: stick footer to the bottom
  //regardless of page's height
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
      <Container maxWidth="sm">
        <Grid container>
          <Grid xs={12} sm={6}>
            <List>
              <ListItem>
                <Logo />
              </ListItem>
              <ListItem>
                <Typography variant="body2" color="text.secondary">
                  ©{new Date().getFullYear()}
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid xs={12} sm={6}>
            <List>
              <ListItem>
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <LocationOnIcon sx={{ marginRight: "1rem" }} />
                  <div>
                    <Typography variant="body2" color="text.secondary">
                      м. Хмільник, вул. 1-го Травня 22, 3-й поверх, скляний
                      кабінет
                    </Typography>
                  </div>
                </Box>
              </ListItem>
              <ListItem>
                <Box sx={{ display: "flex" }}>
                  <LocalPhoneIcon sx={{ marginRight: "1rem" }} />
                  <div>
                    <Typography variant="body2" color="text.secondary">
                      тел. 093 941 90 80
                    </Typography>
                  </div>
                </Box>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

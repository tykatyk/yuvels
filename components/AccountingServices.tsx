import { Container, Box, Typography } from "@mui/material";
import { css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
import QuestionsRemain from "./QuestionsRemain";
import AccountingServicesList from "./AccountingServicesList";

export default function AccountingServices() {
  const theme = useTheme();
  return (
    <Container style={{ padding: 0, maxWidth: 1920, paddingBottom: "4rem" }}>
      <Box
        sx={{
          position: "relative",
          height: 650,
          overflow: "hidden",
          backgroundImage: "url(/accountingXXl.jpg)",
          [theme.breakpoints.down("xl")]: {
            backgroundImage: "url(/accountingLg.jpg)",
          },
          [theme.breakpoints.down("lg")]: {
            backgroundImage: "url(/accountingMd.jpg)",
          },
          [theme.breakpoints.down("md")]: {
            backgroundImage: "url(/accountingSm.jpg)",
          },
          [theme.breakpoints.down("sm")]: {
            backgroundImage: "url(/accountingXSm.jpg)",
          },
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            position: "absolute",
            bottom: 110,
            left: 150,
            color: "#3a253d",
            [theme.breakpoints.down("lg")]: {
              left: 50,
            },
            [theme.breakpoints.down("sm")]: {
              left: 0,
              right: 0,
              width: "100%",
              padding: "0 8px",
            },
          }}
        >
          <Typography
            component="h1"
            variant="h1"
            css={css({
              fontFamily: "Russo One, sans-serif",
              fontSize: "6rem",
              [theme.breakpoints.down("lg")]: {
                fontSize: "5rem",
              },
              [theme.breakpoints.down("md")]: {
                fontSize: "4rem",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "3.5rem",
              },
            })}
          >
            Бухгалтерські <br /> послуги
          </Typography>
        </Box>
      </Box>
      <Box sx={{ paddingBottom: "2rem" }}>
        <Container maxWidth="md">
          <Box sx={{ paddingTop: "3rem", paddingBottom: "0.5rem" }}>
            <Typography paragraph>
              Ми надаємо повних спектр бухгалтерських послуг для ФОП та
              юридичних осіб усіх організаційно-правових форм. Якщо вам потрібен
              надійний партнер для ведення бухгалтерії, тоді вам до нас. Ось
              дещо з того, що ми можемо вам запропонувати:
            </Typography>
          </Box>
          <AccountingServicesList />
        </Container>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <QuestionsRemain />
      </Box>
    </Container>
  );
}

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Layout from "./Layout";
import AccountingPrices from "./AccountingPrices";
import EcologyPriceList from "./EcologyPriceList";

export default function Prices() {
  return (
    <Layout title="Вартість послуг">
      <Container maxWidth="lg" style={{ paddingBottom: "4rem" }}>
        <Typography
          align="center"
          component="h1"
          variant="h2"
          sx={{
            fontFamily: "Russo One, sans-serif",
            fontWeight: "700",
            margin: "4rem 0",
            letterSpacing: "0.125rem",
          }}
        >
          Вартість послуг
        </Typography>
        <Box component="section" sx={{ marginBottom: "3rem" }}>
          <Typography
            align="center"
            component="h2"
            variant="h4"
            gutterBottom
            sx={{ fontFamily: "Russo One, sans-serif" }}
          >
            Бухгалтерські послуги
          </Typography>
          <AccountingPrices />
        </Box>
        <Box component="section">
          <Typography
            align="center"
            component="h2"
            variant="h4"
            gutterBottom
            sx={{ fontFamily: "Russo One, sans-serif" }}
          >
            Екологічні послуги
          </Typography>
          <EcologyPriceList />
        </Box>
      </Container>
    </Layout>
  );
}

import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import BuildIcon from "@mui/icons-material/Build";
import ScannerIcon from "@mui/icons-material/Scanner";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ServiceListCard from "./ServiceListCard";
import H2 from "./H2";

export default function ServiceList() {
  const iconStyles = {
    fontSize: "4rem",
    marginTop: "1.5rem",
    marginBottom: "2rem",
    color: "#92eb34",
  };

  return (
    <section>
      <H2 text="Що ми пропонуємо?" />
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={12} sm={6} md={4}>
              <ServiceListCard text="Бухгалтерський супровід юридичних осіб та ФОП">
                <SupervisedUserCircleIcon sx={iconStyles} />
              </ServiceListCard>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              <ServiceListCard text="Аудит стану обліку та фінансової звітності замовника">
                <AppRegistrationIcon sx={iconStyles} />
              </ServiceListCard>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              <ServiceListCard
                text="Реєстрація юридичних осіб та ФОП. Розробка статутних
                    документів"
              >
                <CheckCircleOutlineIcon sx={iconStyles} />
              </ServiceListCard>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              <ServiceListCard
                text="Налагодження автоматизованого робочого місця бухгалтера у
                замовника. Встановлення програмного забезпечення"
              >
                <BuildIcon sx={iconStyles} />
              </ServiceListCard>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              <ServiceListCard
                text="Підготовка документів для отримання дозволу на викиди
                забруднюючих речовин"
              >
                <ListAltIcon sx={iconStyles} />
              </ServiceListCard>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              <ServiceListCard text="Ксерокс та друк в офісі">
                <ScannerIcon sx={iconStyles} />
              </ServiceListCard>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}

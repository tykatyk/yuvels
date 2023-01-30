import { Box, Container, Typography } from "@mui/material";
import RegistrationRequirementsList from "./RegistrationRequirementsList";
import ServicesHeader from "./ServicesHeader";

export default function RegistrationServicesDescription() {
  return (
    <section>
      <ServicesHeader text="Реєстрація ФОП та ЮО" />
      <Container maxWidth="md">
        <Box>
          <Typography paragraph sx={{ fontWeight: "bold" }}>
            Не знаєте як розпочати бізнес?
          </Typography>
          <Typography paragraph>
            Будь який бізнес починається з реєстрації. Ми допоможемо підготувати
            та подати усі документи, які необхідні для здійснення реєстраційних
            дій, а також обрати систему оподаткування.
          </Typography>
          <RegistrationRequirementsList />
        </Box>
      </Container>
    </section>
  );
}

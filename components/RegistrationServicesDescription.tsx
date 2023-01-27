import { Box, Container, Typography } from "@mui/material";
import RegistrationRequirementsList from "./RegistrationRequirementsList";

export default function RegistrationServicesDescription() {
  return (
    <Box sx={{ paddingBottom: "2rem" }}>
      <Container maxWidth="md">
        <Box sx={{ paddingTop: "3rem", paddingBottom: "0.5rem" }}>
          <Typography paragraph>Не знаєте як розпочати бізнес?</Typography>
          <Typography paragraph>
            Будь який бізнес починається з реєстрації. Ми допоможемо підготувати
            та подати усі документи, які необхідні для здійснення реєстраційних
            дій, а також обрати систему оподаткування.
          </Typography>
          <RegistrationRequirementsList />
        </Box>
      </Container>
    </Box>
  );
}

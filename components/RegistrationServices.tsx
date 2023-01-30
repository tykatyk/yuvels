import { Container, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import QuestionsRemain from "./QuestionsRemain";
import RegistrationServicesDescription from "./RegistrationServicesDescription";

export default function RegistrationServices() {
  const theme = useTheme();
  return (
    <Container style={{ padding: 0, maxWidth: 1920, paddingBottom: "4rem" }}>
      <Box sx={{ maxHeight: 850, position: "relative", overflow: "hidden" }}>
        <img
          style={{
            display: "block",
            position: "relative",
            right: 0,
            bottom: 0,
          }}
          srcSet="/images/registration/registrationSm.jpg 600w, /images/registration/registrationMd.jpg 900w, /images/registration/registrationLg.jpg 1200w, /images/registration/registrationXl.jpg 1536w, /images/registration/registrationXXl.jpg 1920W"
          sizes="(max-width: 600px) 600px, (max-width: 900px) 900px, (max-width: 1200px) 1200px, (max-width: 1536px) 1536px, 1920px"
          src="/registrationXXl.jpg"
          width={"100%"}
          alt="Вид зверху на стіл, на якому стоїть вазон, клавіатура і письмова ручка"
        />
      </Box>
      <RegistrationServicesDescription />
      <QuestionsRemain />
    </Container>
  );
}

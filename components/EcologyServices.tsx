import { Container, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import QuestionsRemain from "./QuestionsRemain";
import EcologyServicesDescription from "./EcologyServicesDescription";

export default function EcologyServices() {
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
          srcSet="/images/ecology/ecologySm.jpg 600w, /images/ecology/ecologyMd.jpg 900w, /images/ecology/ecologyLg.jpg 1200w, /images/ecology/ecologyXl.jpg 1536w, /images/ecology/ecologyXXl.jpg 1920W"
          sizes="(max-width: 600px) 600px, (max-width: 900px) 900px, (max-width: 1200px) 1200px, (max-width: 1536px) 1536px, 1920px"
          src="/ecologyXXl.jpg"
          width={"100%"}
          alt="Труби промислових підприємств з яких іде дим на фоні неба"
        />
      </Box>
      <EcologyServicesDescription />
      <QuestionsRemain />
    </Container>
  );
}

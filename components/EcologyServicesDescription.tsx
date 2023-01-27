import { Box, Container, Typography } from "@mui/material";

export default function EcologyServicesDescription() {
  return (
    <Box sx={{ paddingBottom: "2rem" }}>
      <Container maxWidth="md">
        <Box sx={{ paddingTop: "3rem", paddingBottom: "0.5rem" }}>
          <Typography paragraph>
            Такі дозволи потрібні усім підприємствам, що здійснюють викиди
            забруднюючих речовин в атмосферне повітря стаціонарними джерелами
            викидів. Зокрема (але не виключно) це сільськогосподарські
            підприємства, автозаправні станції, деревообробні та металообробні
            підприємства та інші.
          </Typography>
          <Typography paragraph>
            Ми маємо більш ніж десятирічний досвід отримання таких дозволів і
            будемо раді допомогти отримати цей дозвіл і вашій компанії.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

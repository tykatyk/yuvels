import { Box, Container, Typography } from "@mui/material";
import EcologyServicesList from "./EcologyServicesList";
import PollutionLicenseDocumentsList from "./PollutionLicenseDocumentsList";
import ServicesHeader from "./ServicesHeader";

export default function EcologyServicesDescription() {
  return (
    <section>
      <ServicesHeader text="Екологічні послуги" />
      <Container maxWidth="md">
        <Box sx={{ paddingBottom: "0.5rem" }}>
          <Typography paragraph>
            <EcologyServicesList />
          </Typography>
          <Typography paragraph sx={{ fontWeight: "bold" }}>
            Що таке дозвіл на викиди забруднюючих речовин в атмосферне повітря?
          </Typography>
          <Typography paragraph>
            Це офіційний документ, який дає право суб'єктам господарювання, а
            саме: підприємствам, установам, організаціям та
            громадянам-підприємцям – експлуатувати об'єкти, з яких в атмосферне
            повітря надходять забруднюючі речовини або їх суміші, за умови
            дотримання встановлених відповідних нормативів граничнодопустимих
            викидів та вимог до технологічних процесів у частині обмеження
            викидів забруднюючих речовин протягом визначеного в дозволі терміну.
          </Typography>
          <Typography paragraph>
            Відповідно до статті 11 Закону України "Про охорону атмосферного
            повітря" викиди забруднюючих речовин в атмосферне повітря
            стаціонарними джерелами можуть здійснюватися після отримання дозволу
            на викиди, виданого суб’єкту господарювання. Порядок отримання
            дозволу передбачений постановою від 13.03.2002 № 302.
          </Typography>
          <Typography paragraph sx={{ fontWeight: "bold" }}>
            Кому потрібен дозвіл на викиди?
          </Typography>
          <Typography paragraph>
            Такі дозволи потрібні усім підприємствам, що здійснюють викиди
            забруднюючих речовин в атмосферне повітря стаціонарними джерелами
            викидів. Зокрема (але не виключно) це сільськогосподарські
            підприємства, автозаправні станції, деревообробні та металообробні
            підприємства та інші.
          </Typography>
          <Typography paragraph sx={{ fontWeight: "bold" }}>
            Що потрібно для отримання дозволу на викиди ЗР?
          </Typography>
          <Typography paragraph>
            <PollutionLicenseDocumentsList />
          </Typography>
          <Typography paragraph>
            Ми маємо більш ніж десятирічний досвід отримання таких дозволів і
            будемо раді допомогти отримати цей дозвіл і вашій компанії.
          </Typography>
        </Box>
      </Container>
    </section>
  );
}

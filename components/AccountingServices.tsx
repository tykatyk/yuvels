import { Container, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import QuestionsRemain from "./QuestionsRemain";
import AccountingServicesList from "./AccountingServicesList";
import ServicesHeader from "./ServicesHeader";

export default function AccountingServices() {
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
          srcSet="/images/accounting/accountingSm.jpg 600w, /images/accounting/accountingMd.jpg 900w, /images/accounting/accountingLg.jpg 1200w, /images/accounting/accountingXl.jpg 1536w, /images/accounting/accountingXXl.jpg 1920W"
          sizes="(max-width: 600px) 600px, (max-width: 900px) 900px, (max-width: 1200px) 1200px, (max-width: 1536px) 1536px, 1920px"
          src="/accountingXXl.jpg"
          width={"100%"}
          alt="Дівчина дивиться на полицю з бухгалтерськими папками"
        />
      </Box>

      <section>
        <ServicesHeader text="Бухгалтерські послуги" />
        <Container maxWidth="md">
          <Typography paragraph>
            Ми надаємо повних спектр бухгалтерських послуг для ФОП та юридичних
            осіб усіх організаційно-правових форм. Якщо вам потрібен надійний
            партнер для ведення бухгалтерії, тоді вам до нас. Ось дещо з того,
            що ми можемо вам запропонувати:
          </Typography>
          <AccountingServicesList />
        </Container>
      </section>
      <QuestionsRemain />
    </Container>
  );
}

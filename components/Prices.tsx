import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "./Link";
import Layout from "./Layout";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#554366",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

type RowData = { serviceName: string; servicePrice: string };

type Rows = {
  rows: RowData[];
};

function createData(serviceName: string, servicePrice: string) {
  return { serviceName, servicePrice };
}

const subscriptionRows = [
  createData("ФОП без найманих працівників", "500 грн."),
  createData("ФОП з найманими працівниками", "від 1200 грн."),
  createData("Юридичні особи", "від 5000 грн."),
  createData("Юридичні особи, що не ведуть діяльності", "1000 грн."),
];

const byDocumentRows = [
  createData(
    "Підготовка та подача щомісячної статистичної звітності",
    "400 грн. за кожен звіт"
  ),
  createData(
    "Підготовка та подача податкової звітності (крім декларації по ПДВ)",
    "400 грн. за кожен звіт"
  ),
  createData(
    "Підготовка та подача декларації по ПДВ",
    "100 грн. за кожен документ, що включений в декларацію, але не менше 1000 грн."
  ),
  createData(
    "Підготовка та подача пенсійної звітності",
    "100 грн. за кожну фізичну особу, що включена в звіт, але не менше 1200 грн."
  ),
  createData(
    "Підготовка та подача балансу та звіту про фінансові результати",
    "від 1200 грн."
  ),
  createData(
    "Підготовка платіжних доручень для сплати податків",
    "50 грн. за кожне платіжне доручення"
  ),
  createData(
    "Підготовка інших платіжних доручень (оплата рахунків), внесення платіжних доручень в облікову систему",
    "20 грн. за кожне платіжне доручення"
  ),
  createData(
    "Підготовка документів та подання повідомлення в податкову про прийом працівника на роботу",
    "200 грн."
  ),
  createData("Нарахування заробітної плати", "100 грн. за кожного працівника."),
  createData("Складання договорів", "400 грн."),
  createData(
    "Виписування рахунків, видаткових накладних, актів виконаних робіт, ТТН, податкових накладних, оформлення авансових звітів",
    "100 грн. документ"
  ),
  createData(
    "Встановлення та налаштування програмного забезпечення робочого місця бухгалтера в замовника, перенесення баз даних",
    "від 1200 грн."
  ),
  createData(
    "Аудит стану обліку та фінансової звітності",
    "2000 грн. в день, мінімум три дні."
  ),
];

function PricesTable(props: Rows) {
  const { rows } = props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="таблиця цін на послуги">
        <TableHead>
          <TableRow>
            <StyledTableCell>НАЗВА ПОСЛУГИ</StyledTableCell>
            <StyledTableCell align="right">ВАРТІСТЬ</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.serviceName}>
              <StyledTableCell component="th" scope="row">
                {row.serviceName}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.servicePrice}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default function Prices() {
  return (
    <Layout title="Вартість послуг">
      <Container maxWidth="lg" style={{ paddingBottom: "4rem" }}>
        <Typography
          align="center"
          variant="h2"
          sx={{
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "4rem",
            letterSpacing: "0.125rem",
          }}
        >
          Вартість послуг
        </Typography>
        <Typography style={{ marginBottom: "3rem" }}>
          Ми пропонуємо два види тарифів, щоб ви могли обрати оптимальний для
          себе – щомісячна{" "}
          <Link style={{ textDecoration: "none" }} href="#subscription_fees">
            абонплата
          </Link>{" "}
          та{" "}
          <Link style={{ textDecoration: "none" }} href="#by_document_fees">
            подокументне/разове
          </Link>{" "}
          обслуговування.
        </Typography>
        <section id="subscription_fees">
          <Typography
            align="center"
            variant="h6"
            style={{ textTransform: "uppercase", fontWeight: 700 }}
          >
            Тарифи на бухгалтерські послуги на абонплаті (за місяць)
          </Typography>
          <Typography paragraph>
            Дані тарифи включають ведення усіх операцій, що виникають в
            замовника протягом місяця, а також подачу статистичної та податкової
            звітності
          </Typography>
          <Box sx={{ marginBottom: "4rem" }}>
            <PricesTable rows={subscriptionRows} />
          </Box>
        </section>
        <section id="by_document_fees">
          <Typography
            align="center"
            variant="h6"
            gutterBottom
            style={{ textTransform: "uppercase", fontWeight: 700 }}
          >
            Тарифи на бухгалтерські послуги на подокументне/разове
            обслуговування
          </Typography>
          <PricesTable rows={byDocumentRows} />
        </section>
      </Container>
    </Layout>
  );
}

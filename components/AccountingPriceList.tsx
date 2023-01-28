import { Typography, Box } from "@mui/material";
import PricesTable from "./PricesTable";
import PriceListHeader from "./PriceListHeader";
import createPriceData from "../helpers/createPriceData";

const subscriptionRows = [
  createPriceData("ФОП без найманих працівників", "500 грн."),
  createPriceData("ФОП з найманими працівниками", "від 1200 грн."),
  createPriceData("Юридичні особи", "від 5000 грн."),
  createPriceData("Юридичні особи, що не ведуть діяльності", "1000 грн."),
];

const byDocumentRows = [
  createPriceData(
    "Підготовка та подача щомісячної статистичної звітності",
    "400 грн. за кожен звіт"
  ),
  createPriceData(
    "Підготовка та подача податкової звітності (крім декларації по ПДВ)",
    "400 грн. за кожен звіт"
  ),
  createPriceData(
    "Підготовка та подача декларації по ПДВ",
    "100 грн. за кожен документ, що включений в декларацію, але не менше 1000 грн."
  ),
  createPriceData(
    "Підготовка та подача пенсійної звітності",
    "100 грн. за кожну фізичну особу, що включена в звіт, але не менше 1200 грн."
  ),
  createPriceData(
    "Підготовка та подача балансу та звіту про фінансові результати",
    "від 1200 грн."
  ),
  createPriceData(
    "Підготовка платіжних доручень для сплати податків",
    "50 грн. за кожне платіжне доручення"
  ),
  createPriceData(
    "Підготовка інших платіжних доручень (оплата рахунків), внесення платіжних доручень в облікову систему",
    "20 грн. за кожне платіжне доручення"
  ),
  createPriceData(
    "Підготовка документів та подання повідомлення в податкову про прийом працівника на роботу",
    "200 грн."
  ),
  createPriceData(
    "Нарахування заробітної плати",
    "100 грн. за кожного працівника."
  ),
  createPriceData("Складання договорів", "400 грн."),
  createPriceData(
    "Виписування рахунків, видаткових накладних, актів виконаних робіт, ТТН, податкових накладних, оформлення авансових звітів",
    "100 грн. документ"
  ),
  createPriceData(
    "Встановлення та налаштування програмного забезпечення робочого місця бухгалтера в замовника, перенесення баз даних",
    "від 1200 грн."
  ),
  createPriceData(
    "Аудит стану обліку та фінансової звітності",
    "2000 грн. в день, мінімум три дні."
  ),
];

export default function AccountingPriceList() {
  return (
    <>
      <section id="subscriptionFees">
        <PriceListHeader text="Абонплата (за місяць)" />
        <Box sx={{ marginBottom: "2rem" }}>
          <Typography paragraph>
            Дані тарифи включають ведення усіх операцій, що виникають в
            замовника протягом місяця, а також подачу статистичної та податкової
            звітності
          </Typography>
          <PricesTable rows={subscriptionRows} />
        </Box>
      </section>
      <section id="byDocumentFees">
        <PriceListHeader text="Подокументне/разове обслуговування" />
        <PricesTable rows={byDocumentRows} />
      </section>
    </>
  );
}

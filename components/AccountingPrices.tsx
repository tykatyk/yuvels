import Typography from "@mui/material/Typography";
import Link from "./Link";
import AccountingPriceList from "./AccountingPriceList";

export default function AccountingPrices() {
  return (
    <>
      <Typography paragraph>
        Ми пропонуємо два види тарифів на бухгалтерські послуги, щоб ви могли
        обрати оптимальний для себе – щомісячна{" "}
        <Link style={{ textDecoration: "none" }} href="#subscriptionFees">
          абонплата
        </Link>{" "}
        та{" "}
        <Link style={{ textDecoration: "none" }} href="#byDocumentFees">
          подокументне/разове
        </Link>{" "}
        обслуговування.
      </Typography>
      <AccountingPriceList />
    </>
  );
}

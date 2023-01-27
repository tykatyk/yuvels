import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import styled from "@emotion/styled";

const StyledIcon = styled(BeenhereIcon)`
  color: #bfbf24;
`;

export default function AccountingServicesList() {
  return (
    <List aria-label="Перелік бухгалтерських послуг">
      <ListItem>
        <ListItemIcon>
          <StyledIcon />
        </ListItemIcon>
        <ListItemText primary="Бухгалтерське відображення поточної господарської діяльності – виписка рахунків, актів виконаних робіт, видаткових накладних, ТТН. Оприбуткування та списання товарів. Підготовка платіжних доручень та ін." />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <StyledIcon />
        </ListItemIcon>
        <ListItemText primary="Кадровий облік – підготовка документів на прийом та звільнення працівників, бронювання працівників від призову на військову службу під час мобілізації, нарахування заробітної плати та відпускних." />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <StyledIcon />
        </ListItemIcon>
        <ListItemText primary="Звітність – статистична, пенсійна та податкова. Декларація по ПДВ, звіт по ЄСВ, баланс та ін." />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <StyledIcon />
        </ListItemIcon>
        <ListItemText primary="РРО – реєстрація торгових точок, касових апаратів та ЕЦП касира в податковій" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <StyledIcon />
        </ListItemIcon>
        <ListItemText primary="Налаштування робочого місця бухгалтера в замовника – встановлення програмного забезпечення, перенесення баз даних, налаштування комп'ютерної мережі, віддаленого доступу та ін." />
      </ListItem>
    </List>
  );
}

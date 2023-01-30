import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import BeenhereIcon from "@mui/icons-material/Beenhere";
import styled from "@emotion/styled";

const StyledIcon = styled(BeenhereIcon)`
  color: #bfbf24;
`;

export default function RegistrationRequirementsList() {
  return (
    <>
      <Typography sx={{ fontWeight: "bold" }}>
        Для реєстрації ФОП вам знадобляться:
      </Typography>
      <List aria-label="Перелік документів, які потрібні для реєстрації ФОП">
        <ListItem>
          <ListItemIcon>
            <StyledIcon />
          </ListItemIcon>
          <ListItemText primary="Електронні ключі" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <StyledIcon />
          </ListItemIcon>
          <ListItemText primary="2.	Копію паспорта та коду" />
        </ListItem>
      </List>
      <Typography sx={{ fontWeight: "bold" }}>
        Що ж стосується реєстрації ТОВ, то тут вам будуть потрібні:
      </Typography>
      <List aria-label="Перелік документів, які потрібні для реєстрації ТОВ">
        <ListItem>
          <ListItemIcon>
            <StyledIcon />
          </ListItemIcon>
          <ListItemText primary="Завірений нотаріально статут" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <StyledIcon />
          </ListItemIcon>
          <ListItemText primary="Завірені нотаріально копії паспортів засновників" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <StyledIcon />
          </ListItemIcon>
          <ListItemText primary="Документ із схематичним зображенням структури власності" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <StyledIcon />
          </ListItemIcon>
          <ListItemText primary="Заява на реєстрацію юридичної особи" />
        </ListItem>
      </List>
    </>
  );
}

import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import styled from "@emotion/styled";

const StyledIcon = styled(BeenhereIcon)`
  color: #bfbf24;
`;

export default function AccountingServicesList() {
  return (
    <List aria-label="Перелік екологічних послуг">
      <ListItem>
        <ListItemIcon>
          <StyledIcon />
        </ListItemIcon>
        <ListItemText primary="Заява про видачу дозволу на викиди забруднюючих речовин в атмосферне повітря." />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <StyledIcon />
        </ListItemIcon>
        <ListItemText primary="Позитивний висновок ОВД для новостворених джерел викидів ЗР в атмосферне повітря." />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <StyledIcon />
        </ListItemIcon>
        <ListItemText primary="Документи, у яких обґрунтовуються обсяги викидів, для отримання дозволу на викиди забруднюючих речовин в атмосферне повітря стаціонарними джерелами для підприємств, установ, організацій та громадян-підприємців." />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <StyledIcon />
        </ListItemIcon>
        <ListItemText primary="Звіт з інвентаризації викидів забруднюючих речовин в атмосферне повітря." />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <StyledIcon />
        </ListItemIcon>
        <ListItemText primary="Повідомлення про намір отримати дозвіл." />
      </ListItem>
    </List>
  );
}

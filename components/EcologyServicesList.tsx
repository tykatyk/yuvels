import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import styled from "@emotion/styled";

const StyledIcon = styled(BeenhereIcon)`
  color: #bfbf24;
`;

export default function AccountingServicesList() {
  return (
    <List aria-label="Перелік екологічних послуг" sx={{ p: 0 }}>
      <ListItem>
        <ListItemIcon>
          <StyledIcon />
        </ListItemIcon>
        <ListItemText primary="Постановка на держоблік об'єктів, які справляють вплив на довкілля." />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <StyledIcon />
        </ListItemIcon>
        <ListItemText primary="Розрахунок та подання звітності по еклогічному податку." />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <StyledIcon />
        </ListItemIcon>
        <ListItemText primary="Інвентаризація викидів забруднюючих речовин на підприємстві." />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <StyledIcon />
        </ListItemIcon>
        <ListItemText primary="Розробка документів, у яких обґрунтовуються обсяги викидів, для отримання дозволу на викиди забруднюючих речовин в атмосферне повітря стаціонарними джерелами для підприємств, установ, організацій та громадян-підприємців." />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <StyledIcon />
        </ListItemIcon>
        <ListItemText primary="Визначення показників емісій (питомих викидів) забруднюючих речовин в атмосферне повітря." />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <StyledIcon />
        </ListItemIcon>
        <ListItemText primary="Інструментальні виміри викидів в атмосферу." />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <StyledIcon />
        </ListItemIcon>
        <ListItemText primary="Екологічний консалтинг." />
      </ListItem>
    </List>
  );
}

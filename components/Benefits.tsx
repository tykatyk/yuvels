import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import H2 from "./H2";

export default function SelectedListItem() {
  return (
    <section>
      <H2 text="Чому це вигідно?" />
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "2rem",
          }}
        >
          <List aria-label="Переваги аутсорсингу" sx={{ p: 0 }}>
            <ListItem>
              <ListItemIcon>
                <BeenhereIcon sx={{ color: "#bfbf24" }} />
              </ListItemIcon>
              <ListItemText primary="Нульові затрати часу на пошук та заміну штатного бухгалтера" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <BeenhereIcon sx={{ color: "#bfbf24" }} />
              </ListItemIcon>
              <ListItemText primary="Нульові витрати на облаштування робочого місця співробітників бухгалтерії" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <BeenhereIcon sx={{ color: "#bfbf24" }} />
              </ListItemIcon>
              <ListItemText primary="Рівень надання послуг аутсорсингової компанії, як правило, вищий ніж у штатного бухгалтера" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <BeenhereIcon sx={{ color: "#bfbf24" }} />
              </ListItemIcon>
              <ListItemText primary="Фінансова відповідальність аутсорсингової компанії за свою роботу" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <BeenhereIcon sx={{ color: "#bfbf24" }} />
              </ListItemIcon>
              <ListItemText primary="Пряма економія на заробітній платі та податках" />
            </ListItem>
          </List>
        </Box>
      </Container>
    </section>
  );
}

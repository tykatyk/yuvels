import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import Typography from "@mui/material/Typography";

export default function SelectedListItem() {
  return (
    <section>
      <Typography
        align="center"
        variant="h2"
        sx={{
          fontSize: "2.5rem",
          margin: "4rem 0 2rem 0",
          letterSpacing: "0.125rem",
        }}
      >
        Чому бухгалтерський аутсорсинг це вигідно?
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          bgcolor: "background.paper",
          paddingBottom: "2rem",
        }}
      >
        <List aria-label="Переваги аутсорсингу">
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
    </section>
  );
}

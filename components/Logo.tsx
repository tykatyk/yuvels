import Typography from "@mui/material/Typography";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

export default function Logo() {
  const theme = useTheme();

  return (
    <Box
      component="span"
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <TripOriginIcon
        sx={{
          color: "#92eb34",
          mr: 1,
        }}
      />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".2rem",
          color: "#92eb34",
          textDecoration: "none",
          fontSize: {
            md: "1.125rem",
            lg: "1.25rem",
          },
        }}
      >
        ЮВЕЛС
      </Typography>
    </Box>
  );
}

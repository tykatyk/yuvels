import Typography from "@mui/material/Typography";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import Box from "@mui/material/Box";

export default function Logo() {
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
          mr: 2,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "#92eb34",
          textDecoration: "none",
        }}
      >
        ЮВЕЛС
      </Typography>
    </Box>
  );
}

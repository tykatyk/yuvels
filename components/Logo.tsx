import TripOriginIcon from "@mui/icons-material/TripOrigin";
import { useTheme } from "@mui/material/styles";
import Link from "./Link";

export default function Logo() {
  const theme = useTheme();

  return (
    <Link
      variant="h6"
      noWrap
      href="/"
      sx={{
        display: "flex",
        alignItems: "center",
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
      <TripOriginIcon
        sx={{
          color: "#92eb34",
          mr: 1,
        }}
      />
      <span>ЮВЕЛС</span>
    </Link>
  );
}

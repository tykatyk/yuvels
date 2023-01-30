import { Button, Box } from "@mui/material";
import Link from "./Link";
import H2 from "./H2";

export default function QuestionsRemain() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <H2 text="Залишились питання?" />

      <Button
        fullWidth
        style={{
          background: "#ceb019",
          fontWeight: 700,
          maxWidth: 250,
        }}
        variant="contained"
        type="submit"
      >
        <Link
          sx={{
            color: "#000",
            textDecoration: "none",
          }}
          href="/contacts#contactUs"
        >
          Написати
        </Link>
      </Button>
    </Box>
  );
}

import { Typography, Button } from "@mui/material";
import Link from "./Link";

export default function QuestionsRemain() {
  return (
    <>
      <Typography
        component="div"
        variant="h4"
        align="center"
        sx={{ fontFamily: "Russo One, sans-serif", paddingBottom: "2rem" }}
      >
        Залишились питання?
      </Typography>
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
    </>
  );
}

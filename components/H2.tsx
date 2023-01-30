import { Typography } from "@mui/material";

export default function H2(props: { text: string }) {
  return (
    <Typography
      align="center"
      variant="h2"
      sx={{
        fontFamily: "Russo One, sans-serif",
        fontSize: {
          xs: "1.5rem",
          sm: "2rem",
          md: "2.5rem",
        },
        fontWeight: "700",
        paddingTop: {
          xs: "2.5rem",
          md: "3rem",
        },
        paddingBottom: {
          xs: "2.5rem",
          md: "3rem",
        },
      }}
    >
      {props.text}
    </Typography>
  );
}

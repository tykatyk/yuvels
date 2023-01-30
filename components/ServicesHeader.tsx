import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { css } from "@emotion/react";

export default function ServicesHeader(props: { text: string }) {
  const theme = useTheme();
  const { text } = props;
  return (
    <Typography
      component="h1"
      variant="h1"
      align="center"
      css={css({
        padding: "1rem 0",
        marginBottom: "3rem",
        background: "#fff",
        color: "#3a253d",
        fontFamily: "Russo One, sans-serif",
        fontSize: "4rem",
        [theme.breakpoints.down("lg")]: {
          fontSize: "3rem",
        },
        [theme.breakpoints.down("md")]: {
          marginBottom: 0,
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "2rem",
        },
      })}
    >
      {text}
    </Typography>
  );
}

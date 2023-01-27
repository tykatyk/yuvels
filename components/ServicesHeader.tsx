import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { css } from "@emotion/react";

export default function ServicesHeader(props: { text: string }) {
  const theme = useTheme();
  const { text } = props;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "1rem 0",
        background: "#fff",
        color: "#3a253d",
      }}
    >
      <Typography
        component="h1"
        variant="h1"
        align="center"
        css={css({
          fontFamily: "Russo One, sans-serif",
          fontSize: "4rem",
          [theme.breakpoints.down("lg")]: {
            fontSize: "3rem",
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: "2rem",
          },
        })}
      >
        {text}
      </Typography>
    </Box>
  );
}

import { Typography } from "@mui/material";

export default function PriceListHeader(props: { text: string }) {
  const { text } = props;

  return (
    <Typography
      align="center"
      component="h3"
      variant="h6"
      gutterBottom
      style={{ textTransform: "uppercase" }}
    >
      {text}
    </Typography>
  );
}

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function ServiceListCard(props: any) {
  return (
    <Card sx={{ minWidth: 275, minHeight: 262 }} raised={true}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {props.children}
        <Typography
          color="text.secondary"
          gutterBottom
          align="center"
          sx={{ fontWeight: "700" }}
        >
          {props.text}
        </Typography>
      </CardContent>
    </Card>
  );
}

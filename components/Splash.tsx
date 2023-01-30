import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Splash() {
  return (
    <Container style={{ padding: 0, maxWidth: 1920 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          alignItems: "center",
          height: "650px",
          background:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/office.jpg') no-repeat center top",
          backgroundSize: "cover",
        }}
      >
        <Typography
          variant="h1"
          align="center"
          sx={{
            fontFamily: "Russo One, sans-serif",
            fontSize: {
              xs: "2rem",
              sm: "3rem",
              md: "4rem",
              lg: "5rem",
            },
            letterSpacing: "0.1rem",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        >
          Бухгалтерський
          <br />
          аутсорсинг
        </Typography>
      </div>
      <div
        style={{
          height: "0.5rem",
          background: "#92eb34",
        }}
      ></div>
    </Container>
  );
}

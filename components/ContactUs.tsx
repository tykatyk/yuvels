import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ContactUsForm from "./ContactUsForm";

export default function ContactUs() {
  return (
    <section>
      <div style={{ padding: "2rem 0 4rem 0", background: "#392b5a" }}>
        <Typography
          align="center"
          variant="h2"
          sx={{
            fontFamily: "Russo One, sans-serif",
            fontSize: "2.5rem",
            marginBottom: "2rem",
            fontWeight: 700,
          }}
        >
          Залишились питання?
        </Typography>
        <Container maxWidth={"sm"}>
          <ContactUsForm />
        </Container>
      </div>
    </section>
  );
}

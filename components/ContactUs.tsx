import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ContactForm from "./ContactForm";

export default function ContactUs() {
  return (
    <section>
      <div style={{ padding: "2rem 0 4rem 0", background: "#4f358c" }}>
        <Typography
          align="center"
          variant="h2"
          sx={{
            fontSize: "2.5rem",
            marginBottom: "2rem",
            letterSpacing: "0.125rem",
            fontWeight: 700,
          }}
        >
          Залишились питання?
        </Typography>
        <Container maxWidth={"sm"}>
          <ContactForm />
        </Container>
      </div>
    </section>
  );
}

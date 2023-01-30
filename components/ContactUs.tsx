import Container from "@mui/material/Container";
import ContactUsForm from "./ContactUsForm";
import H2 from "./H2";

export default function ContactUs() {
  return (
    <section style={{ background: "#392b5a" }}>
      <H2 text="Залишились питання?" />
      <Container maxWidth={"sm"} style={{ paddingBottom: "4rem" }}>
        <ContactUsForm />
      </Container>
    </section>
  );
}

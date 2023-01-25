import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import contacts from "../helpers/contacts";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ContactForm from "./ContactUsForm";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import { css } from "@emotion/react";

export default function Contacts() {
  const styles = {
    box: css({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: "0.5rem",
    }),
    icon: css({ fontSize: "1.4rem", color: "#227b76", marginRight: "0.4rem" }),
  };
  return (
    <>
      <Box component="section">
        <div
          style={{
            background: "linear-gradient(#e5f2bb, #cfd4cf)",
            color: "#262529",
          }}
        >
          <div
            style={{
              paddingBottom: "3rem",
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              align="center"
              sx={{
                paddingTop: "2rem",
                paddingBottom: "1.2rem",
                fontFamily: "Russo One, sans-serif",
              }}
            >
              Наші контакти
            </Typography>
            <Box
              css={css`
                ${styles.box}
              `}
            >
              <LocationOnIcon
                css={css`
                  ${styles.icon}
                `}
              />
              <Typography align="center">{contacts.address}</Typography>
            </Box>
            <Box
              css={css`
                ${styles.box}
              `}
            >
              <LocalPhoneIcon
                css={css`
                  ${styles.icon}
                `}
              />
              <Typography align="center">{`${contacts.phone}`}</Typography>
            </Box>
            <Box
              css={css`
                ${styles.box};
              `}
            >
              <EmailIcon
                css={css`
                  ${styles.icon}
                `}
              />
              <Typography align="center">{`${contacts.email}`}</Typography>
            </Box>
          </div>

          <div style={{ paddingBottom: "2rem" }}>
            <Typography
              component="h2"
              variant="h5"
              align="center"
              sx={{
                fontWeight: "bold",
                paddingBottom: "0.5rem",
                fontFamily: "Russo One, sans-serif",
              }}
            >
              Графік роботи
            </Typography>
            <Typography align="center">Пн - Пт</Typography>
            <Typography align="center">9:00 - 18:00</Typography>
            <Typography align="center">Сб - Нд</Typography>
            <Typography align="center">Вихідний</Typography>
          </div>
        </div>
      </Box>
      <Box id="box" sx={{ display: "flex", height: 500 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2103.832878490392!2d27.940263121221054!3d49.55163109758546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d9f3ae8e8c55b%3A0x697a410df6d0bf74!2z0YPQuy4gMS3Qs9C-INCc0LDRjywgMjIsINCl0LzQtdC70YzQvdC40LosINCS0LjQvdC90LjRhtC60LDRjyDQvtCx0LvQsNGB0YLRjCwgMjIwMDE!5e1!3m2!1sru!2sua!4v1674552103998!5m2!1sru!2sua"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
      <div style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <Typography
          component="div"
          variant="h3"
          align="center"
          paragraph
          sx={{ fontFamily: "Russo One, sans-serif" }}
        >
          Напишіть нам
        </Typography>
        <Container maxWidth="sm" id="contactUs">
          <ContactForm />
        </Container>
      </div>
    </>
  );
}

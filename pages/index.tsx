import Head from "next/head";
import AppBar from "../components/AppBar";
import Splash from "../components/Splash";
import ServiceList from "../components/ServiceList";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <>
      <Head>
        <title>Головна | Ювелс</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Бухгалтерський супровід" />
      </Head>
      <main>
        <AppBar />
        <Splash />
        <div
          style={{
            maxWidth: 1920,
            height: "0.5rem",
            background: "#92eb34",
          }}
        ></div>
        <Container maxWidth="lg">
          <ServiceList />
          <Benefits />
        </Container>
        <Footer />
      </main>
    </>
  );
}

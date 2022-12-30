import Head from "next/head";
import AppBar from "../components/AppBar";
import Splash from "../components/Splash";
import ContactForm from "../components/ContactUs";
import ServiceList from "../components/ServiceList";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";

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
        <ServiceList />
        <Benefits />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}

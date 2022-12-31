import Layout from "../components/Layout";
import Splash from "../components/Splash";
import ContactForm from "../components/ContactUs";
import ServiceList from "../components/ServiceList";
import Benefits from "../components/Benefits";

export default function Home() {
  return (
    <>
      <Layout title="Головна">
        <Splash />
        <ServiceList />
        <Benefits />
        <ContactForm />
      </Layout>
    </>
  );
}

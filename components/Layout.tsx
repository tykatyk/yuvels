import Head from "next/head";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import { styled } from "@mui/material/styles";

const StyledFooter = styled(Footer)({
  flex: "0 0 auto",
});

export default function Layout(props: any) {
  const { title, children } = props;
  return (
    <>
      <Head>
        <title>{title ? `${title} | Ювелс` : "Ювелс"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Бухгалтерський супровід" />
      </Head>
      <main>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100%",
          }}
        >
          <div style={{ flex: "1 0 auto" }}>
            <AppBar />
            {children}
          </div>
          <StyledFooter />
        </div>
      </main>
    </>
  );
}

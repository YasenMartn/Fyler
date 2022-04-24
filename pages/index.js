import Head from "next/head";
import Info from "../components/Info";
import Main from "../components/Main"; 
import Services from "../components/Services";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Filer - Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Main/>
        <Services/>
        <Info/>
      </div>
        
    </div>
  );
}

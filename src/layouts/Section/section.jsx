import Head from "next/head";

import { Navbar } from "../Navbar/index";
import { Footer } from "../Footer/index";

const Section = ({ title, component }) => {
  return (
    <div className="container">
      <Head>
        <title>{title ? `${title} | groyyo-ecom` : "groyyo-ecom"} </title>
        <meta name="description" content="groyyo-ecom" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div>
          <Navbar />
        </div>

        <div>{component}</div>

        <Footer />
      </main>
    </div>
  );
};

export default Section;

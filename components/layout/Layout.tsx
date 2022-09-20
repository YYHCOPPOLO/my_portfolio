import Head from "next/head";
import Navbar from "../Common/Navbar";
import Plum from "./PlumTree";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <meta name="desc" content="My Portolio website" key="desc" />
      </Head>
      <main>
        <Navbar />
        {children}
        <Plum />
      </main>
    </div>
  );
}

export default Layout;

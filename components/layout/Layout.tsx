import Head from "next/head";
import { useEffect, useState } from "react";
import Navbar from "../Common/Navbar";
import Plum from "./PlumTree";

function Layout({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<string>("light");
  useEffect(() => {
    if (localStorage.getItem("mode")) {
      setMode(localStorage.getItem("mode")!);
    }
  }, []);
  return (
    <div className="h-full dark:bg-[#3c3c3c] text-black dark:text-gray-100">
      <Head>
        <meta name="desc" content="My Portolio website" key="desc" />
      </Head>
      <main className="h-full">
        <Plum />
        <Navbar setMode={setMode} mode={mode} />
        {children}
      </main>
    </div>
  );
}

export default Layout;

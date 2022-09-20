import type { NextPage } from "next";
import Head from "next/head";
import Plum from "../components/layout/PlumTree";
import Wrapper from "../components/layout/Wrapper";
import Feed from "../components/home/Feed";
import Header from "../components/layout/Header";
import Avatar from "../components/home/Avatar";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center py-2">
      <Head>
        <title>Coppolo Portfolio</title>
      </Head>
      <Header />
      <Wrapper>
        <Avatar />
        <div className="mt-8">
          <Feed />
        </div>
      </Wrapper>
      <Plum />
    </div>
  );
};

export default Home;

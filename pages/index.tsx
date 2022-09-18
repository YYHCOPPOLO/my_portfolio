import type { NextPage } from "next";
import Head from "next/head";
import Plum from "../components/layout/PlumTree";
import Wrapper from "../components/layout/Wrapper";
import Avatar from "../components/home/Avatar";
import Feed from "../components/home/Feed";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center py-2">
      <Head>
        <title>Coppolo Portfolio</title>
      </Head>
      <Wrapper>
        <Avatar />
        <Feed />
      </Wrapper>
      <Plum />
    </div>
  );
};

export default Home;

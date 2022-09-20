import type { NextPage } from "next";
import Head from "next/head";
import Wrapper from "../components/Layout/Wrapper";
import Feed from "../components/Home/Feed";
import Avatar from "../components/Home/Avatar";

const Home: NextPage = () => {
  return (
    <div className="h-full flex min-h-screen flex-col items-center py-2">
      <Head>
        <title>Coppolo Portfolio</title>
      </Head>
      <Wrapper>
        <Avatar />
        <div className="mt-8">
          <Feed />
        </div>
      </Wrapper>
    </div>
  );
};

export default Home;

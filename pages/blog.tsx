import Head from "next/head";
import { getSortedPosts } from "../utils/posts";
import Content from "../components/Blog/Content";
import Wrapper from "../components/Layout/Wrapper";

function blog({ posts }: { posts: any }) {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Head>
        <title>Coppolo&apos;s Blog</title>
      </Head>
      <Wrapper>
        <Content posts={posts} />
      </Wrapper>
    </div>
  );
}

export default blog;

export const getStaticProps = async () => {
  const posts = await getSortedPosts();
  return {
    props: {
      posts,
    },
  };
};

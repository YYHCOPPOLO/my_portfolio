import Head from "next/head";
import Cd from "../../components/Layout/Cd";
import Wrapper from "../../components/Layout/Wrapper";
import { getAllIds, getPostById } from "../../utils/posts";

function PostPage({ data }: any) {
  return (
    <Wrapper>
      <Head>{data.title}</Head>
      <p>{data.title}</p>
      <p>{data.date}</p>
      <article className="md">
        <div dangerouslySetInnerHTML={{ __html: data.htmlContent }} />
      </article>
      <Cd />
    </Wrapper>
  );
}

export default PostPage;

export const getStaticPaths = async () => {
  const paths = await getAllIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const data = await getPostById(params.id);
  console.log(data);

  return {
    props: {
      data,
    },
  };
};

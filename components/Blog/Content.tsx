import Wrapper from "../Layout/Wrapper";
import Post from "./Post";

function Blog({ posts }: { posts: PostProps[] }) {
  return (
    <Wrapper>
      <p className="font-bold text-2xl text-blue-500">2022</p>
      <div className="flex flex-col items-center justify-content border-2 border-sky-500 rounded-full p-4 m-3 transition-transform duration-75 ease-in-out hover:scale-110">
        {posts
          .filter((post: PostProps) => post.date.includes("2022"))
          .map((post: PostProps) => (
            <Post
              title={post.title}
              date={post.date}
              id={post.id}
              key={post.id}
            />
          ))}
      </div>
    </Wrapper>
  );
}

export default Blog;

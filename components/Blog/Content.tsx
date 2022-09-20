import Wrapper from "../Layout/Wrapper";
import Post from "./Post";

function Blog({ posts }: { posts: any }) {
  return (
    <div className="h-full flex-auto">
      <p className="font-bold text-2xl text-blue-500">2022</p>
      <div className="flex flex-col justify-content">
        {posts
          .filter((post: any) => post.date.includes("2022"))
          .map((post: any) => (
            <Post
              title={post.title}
              date={post.date}
              id={post.id}
              key={post.id}
            />
          ))}
      </div>
    </div>
  );
}

export default Blog;

import Link from "next/link";

function Post({ title, date, id }: PostProps) {
  return (
    <div className="cursor-pointer">
      <Link href={`/blog/${id}`}>
        <div>
          <p>{title}</p>
          <p className=" text-sm text-gray-400">{date}</p>
        </div>
      </Link>
    </div>
  );
}

export default Post;

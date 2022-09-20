import Link from "next/link";

function Post({ title, date, id }: PostProps) {
  return (
    <div className="cursor-pointer w-200 hover:border-b-2 border-sky-500 m-3 transition-transform duration-75 ease-in-out hover:scale-110">
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

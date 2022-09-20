import Link from "next/link";
function Cd() {
  return (
    <div className="mt-5">
      <Link href="/blog">
        <a className=" text-sky-500 decoration-solid decoration-sky-500">
          cd..
        </a>
      </Link>
    </div>
  );
}

export default Cd;

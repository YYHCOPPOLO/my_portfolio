import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { useWindowScroll } from "react-use";
import { AiFillGithub } from "react-icons/ai";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";

const nav = [
  {
    name: "Me",
    link: "/",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Projects",
    link: "/projects",
  },
];

function Navbar() {
  const isScroll = useWindowScroll();
  const isPageHover = useMemo(() => {
    if (isScroll) return !!isScroll.y;
  }, [isScroll]);

  return (
    <header className={`sticky top-0 z-50 w-100vh py-1 px-20 `}>
      <section className="flex w-full justify-between items-center">
        <Image
          src="/Signature.png"
          width={80}
          height={80}
          className="cursor-pointer"
        />
        <div>
          <nav className="flex items-center gap-6">
            {nav.map((item) => {
              return (
                <Link key={item.name} href={item.link}>
                  <span className="cursor-pointer hover:text-[#0066ff]">
                    {item.name}
                  </span>
                </Link>
              );
            })}
            <a
              href="https://github.com/YYHCOPPOLO"
              className={`cursor-pointer text-2xl`}
            >
              <AiFillGithub />
            </a>
            <a
              href="https://github.com/YYHCOPPOLO"
              className="cursor-pointer text-2xl transition-all duration-500 ease-out hover:rotate-180"
            >
              <BsFillBrightnessHighFill />
            </a>
          </nav>
        </div>
      </section>
    </header>
  );
}

export default Navbar;

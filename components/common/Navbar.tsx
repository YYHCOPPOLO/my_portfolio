import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo } from "react";
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

function Navbar({ mode, setMode }: { mode: string; setMode: any }) {
  // TODO: scroll glass effect
  const isScroll = useWindowScroll();
  const isPageHover = useMemo(() => {
    if (isScroll) return !!isScroll.y;
  }, [isScroll]);

  useEffect(() => {
    if (mode === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [mode]);

  const toggleTheme = () => {
    setMode((prev: string) => (prev === "light" ? "dark" : "light"));
    localStorage.setItem("mode", mode === "light" ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-50 w-100vw py-1 px-20">
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
            {mode === "light" ? (
              <span
                className="cursor-pointer text-2xl transition-all duration-500 ease-out hover:rotate-180"
                onClick={toggleTheme}
              >
                <BsFillBrightnessHighFill />
              </span>
            ) : (
              <span
                className="cursor-pointer text-2xl transition-all duration-500 ease-out hover:rotate-180"
                onClick={toggleTheme}
              >
                <BsFillMoonFill />
              </span>
            )}
          </nav>
        </div>
      </section>
    </header>
  );
}

export default Navbar;

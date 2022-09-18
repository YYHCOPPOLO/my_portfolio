import Image from "next/image";
import { useRef, useState } from "react";

function Avatar() {
  const [index, setIndex] = useState<number>(0);
  return (
    <div className="flex items-center">
      <Image
        src="/Jieni.jpg"
        width={85}
        height={85}
        priority
        className="rounded-full"
      />
      <div className="flex flex-col items-center jusitfy-center ml-3">
        <span className=" text-4xl mb-3">Coppolo</span>
        <h1>Font-end ? / Rookie</h1>
      </div>
    </div>
  );
}

export default Avatar;

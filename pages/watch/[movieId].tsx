import { AiOutlineArrowLeft } from "react-icons/ai";

import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/router";

const Watch = () => {
  const router = useRouter();
  const { movieId } = router.query;

  const { data } = useMovie(movieId as string);

  return (
    <div className="w-screen h-screen bg-black">
      <nav className="fixed z-10 flex flex-row items-center w-full gap-8 p-4 bg-black bg-opacity-70">
        <AiOutlineArrowLeft
          className="cursor-pointer"
          onClick={() => router.push("/")}
          size={40}
          color="white"
        />
        <p className="text-xl font-bold text-white md:text-3xl">
          <span className="font-light">Watching: </span>
          {data?.title}
        </p>
      </nav>
      <video
        autoPlay
        controls
        className="w-full h-full"
        src={data?.videoUrl}
      ></video>
    </div>
  );
};

export default Watch;

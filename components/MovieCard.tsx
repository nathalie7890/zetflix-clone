import useInfoModal from "@/hooks/useInfoModal";
import FavouriteButton from "./FavouriteButton";

import { useRouter } from "next/router";

import { BsFillPlayFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const router = useRouter();
  const { openModal } = useInfoModal();

  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
      <img
        className="object-cover w-full transition delay-300 rounded-md shadow-xl cursor-pointer duration group-hover:opacity-90 sm:group-hover:opacity-0 h-[12vw]"
        src={data.thumbnailUrl}
        alt="Thumbnail"
      />
      <div className="absolute top-0 z-10 invisible w-full transition duration-200 delay-300 scale-0 opacity-0 sm:visible group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
        <img
          src={data.thumbnailUrl}
          alt="Thumbnail"
          className="object-cover w-full transition shadow-xl cursor-pointer duration rounded-t-md h-[12vw]"
        />
        <div className="absolute z-10 w-full p-2 transition shadow-md bg-zinc-800 lg:p-4 rounded-b-md">
          <div className="flex flex-row items-center gap-3">
            <div
              onClick={() => {}}
              className="flex items-center justify-center w-6 h-6 transition bg-white rounded-full cursor-pointer lg:w-10 lg:h-10 hover:bg-neutral-300"
            >
              <BsFillPlayFill
                onClick={() => router.push(`/watch/${data?.id}`)}
                size={30}
              />
            </div>
            <FavouriteButton movieId={data?.id} />
            <div
              onClick={() => openModal(data?.id)}
              className="flex items-center w-6 h-6 ml-auto transition border-2 rounded-full cursor-pointer group/item lg:w-10 lg:h-10 jusitfy-center hover:border-neutral-300"
            >
              <BiChevronDown
                className="group-hover/item:text-neutral-200"
                color="white"
                size={30}
              />
            </div>
            <div
              onClick={() => openModal(data?.id)}
              className="flex items-center w-6 h-6 ml-auto transition border-2 border-white rounded-full cursor-pointer group/item lg:w-10 lg:h-10 jusitfy-center hover:border-neutral-300"
            >
              <BiChevronDown
                size={30}
                className="text-white group-hover/item:text-neutral-300"
              />
            </div>
          </div>
          <p className="mt-4 font-semibold text-green-400">
            New <span className="text-white">2023</span>
          </p>
          <div className="flex flex-row items-center gap-3 mt-4">
            <p className="text-white text-[10px] lg:text-sm">{data.duration}</p>
          </div>
          <div className="flex flex-row items-center gap-3 mt-4">
            <p className="text-white text-[10px] lg:text-sm">{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

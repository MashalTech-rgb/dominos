import { Footer } from "@/app/components/footer/pages";
import { Header } from "@/app/components/header/pages";
import pizza from "../../../../public/assets/images/pizza.webp";
import Image from "next/image";
import { GiChiliPepper } from "react-icons/gi";
import { FaThumbsUp } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Span } from "next/dist/trace";
export default function Home() {
  const card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      <Header />
      <div className="flex flex-wrap gap-5 m-5 ">
        {card.map((item, index) => {
          return (
            <div
              key={index}
              class="max-w-sm relative bg-white border  border-gray-200  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="bg-blue-500 absolute -right-1 -top-4  rounded-full w-10 h-10 p-1 text-white font-bold">
                30% <sub className="-top-3 pl-2">off</sub>
              </div>
              <div className="bg-red-600 absolute right-8 bottom-2/4  rounded-full w-5 h-5  text-white ">
                <GiChiliPepper />
              </div>
              <div className="bg-white absolute right-1 bottom-2/4  rounded-full w-5 h-5  text-blue-400 ">
                <FaThumbsUp />
              </div>
              <a href="#">
                <Image
                  className="rounded-t-lg w-full"
                  src={pizza}
                  alt=""
                  width={100}
                  height={100}
                />
              </a>
              <div class="p-5">
                <a href="#" className="flex flex-wrap justify-between">
                  <h5 class="mb-1 text-lg tracking-tight text-gray-900 dark:text-white">
                    Chicken Seekh Kebab
                  </h5>
                  <FaRegHeart className="text-red-500 mt-1 text-xl" />
                </a>
                <p class="mb-2 font-medium text-gray-400">
                  Grilled Chicken Seekh Kebab, Green Chilies & Onions Topped
                  with Ranch
                </p>
                <p className="m-1"> From<span className="text-blue-600"> Rs. 420 </span><span className="text-red-500 line-through"> Rs. 599</span></p>
                <a
                  href="#"
                  class="flex flex-col items-center justify-center h-full p-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

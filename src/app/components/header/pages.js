import Image from "next/image";
import logo from "../../../../public/assets/images/dominos-logo.png";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";

export const Header = () => {
  return (
    <>
      <div className="grid grid-cols-3 bg-white">
        <div className="">
          <Image className="" src={logo} with={50} height={50} />
        </div>
        <div className="flex flex-wrap">
          <ul className="flex flex-wrap gap-4 justify-center place-content-center m-2 font-bold">
            <Link href="#">
              <li>MENU</li>
            </Link>
            <Link href="#">
              <li>DEALS</li>
            </Link>
            <Link href="#">
              <li>STORES</li>
            </Link>
            <Link href="#">
              <li>ALLIANCES</li>
            </Link>
          </ul>
        </div>
        <div className="flex">
        <div className=" justify-around">
        <IoCartOutline className="h-10 w-10 justify-center place-content-center m-2 text-blue-500 " />
        </div>
        <div className="flex ml-24">
        <MdOutlineAccountCircle  className="h-10 w-10 justify-center place-content-center m-2"/>
        <h1 className="justify-center place-content-center m-2 font-bold">MY ACCOUNT</h1>
        </div>
        </div>
      </div>
      <div className="bg-black h-28 flex items-center justify-center">
  <div className="flex flex-col items-center ">
    <h1 className="bg-blue-600  p-4 text-white font-extrabold text-6xl">DELIVERY</h1>
  </div>
  <div className="flex flex-col items-center ">
    <h1 className="bg-red-600  px-8 py-4 text-white font-extrabold text-6xl">PICK UP</h1>
  </div>
</div>
    </>
  );
};

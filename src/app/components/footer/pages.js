import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import Image from "next/image";
import iphone from "../../../../public/assets/images/iphone-app.e4cef1bd296205b2e6d5.webp";
import android from "../../../../public/assets/images/androide-app.c60b7a78e20c2c0f5b63.webp";

export const Footer = () => {
  return (
    <div className="relative bg-white">
      {/* Top Shadow Element */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-white shadow-md"></div>
      
      <div className="grid grid-cols-3 px-10 pt-10 border-t border-gray-300">
        <div>
          <h1 className="font-bold text-lg">Domino’s Pizza</h1>
          <ul>
            <Link href="#">
              <li className="hover:text-blue-900 font-medium">About Us</li>
            </Link>
            <Link href="#">
              <li className="hover:text-blue-900 font-medium">Privacy Policy</li>
            </Link>
            <Link href="#">
              <li className="hover:text-blue-900 font-medium">Terms & Conditions</li>
            </Link>
            <Link href="#">
              <li className="hover:text-blue-900 font-medium">Nutritional Info</li>
            </Link>
            <Link href="#">
              <li className="hover:text-blue-900 font-medium">Download Menu</li>
            </Link>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-lg">CONTACT</h1>
          <ul>
            <Link href="#">
              <li className="hover:text-blue-900 font-medium mt-1">Call 111 366 466</li>
            </Link>
            <Link href="#">
              <li className="hover:text-blue-900 font-medium mt-1">Privacy Policy</li>
            </Link>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-lg">HELP</h1>
          <ul>
            <Link href="#">
              <li className="hover:text-blue-900 font-medium mt-1">Track Order</li>
            </Link>
            <Link href="#">
              <li className="hover:text-blue-900 font-medium mt-1">Store Finder</li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <ul className="flex space-x-4">
          <li>
            <Link href="https://www.facebook.com/dominospakistan">
              <FaFacebook className="text-blue-600 h-12 w-12" />
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/channel/UCsHUR9AyjKUTtWWoLmpUd-A">
              <BsYoutube className="h-12 w-12 rounded-full bg-rose-600 text-white hover:bg-white text-rose-600" />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/dominos_pk/?hl=en">
              <FaInstagram className="text-white h-12 w-12 bg-pink-500 rounded-full" />
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/dominospakistan">
              <FaTwitter className="bg-white h-12 w-12 text-blue-400 rounded-full" />
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-wrap justify-center items-center">
        <Link href="https://apps.apple.com/pk/app/dominos-pakistan/id1453983132">
          <Image className="m-8" src={iphone} width={140} height={140} />
        </Link>
        <Link href="https://play.google.com/store/apps/details?id=pk.com.dominos&pli=1">
          <Image src={android} width={140} height={140} />
        </Link>
      </div>

      <div className="flex-col-2 flex flex-wrap justify-between mx-20 pb-5">
        <p>2024 Dominos. All rights reserved</p>
        <span>
          Powered By<br />
          <Link href="https://simplexts.net/" className="text-blue-400">SimpleX Technology Solutions</Link>
        </span>
      </div>
    </div>
  );
};

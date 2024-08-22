import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import NavLeftContent from "../../molecules/navLeftContent";

const Footer = () => {
  return (
    <footer className="bg-white flex flex-col items-center justify-between py-8 px-0 xs-400:items-start">
      <NavLeftContent title="Men's Wear" />
      <ul className="list-none flex items-center flex-wrap gap-x-8 p-0 my-4">
        <li className="cursor-pointer">Company</li>
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Offices</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <div className="flex items-center gap-x-8 p-0">
        <FaInstagram size="2rem" className="cursor-pointer" />
        <CiFacebook size="2rem" className="cursor-pointer" />
        <FiTwitter size="2rem" className="cursor-pointer" />
        <FiYoutube size="2rem" className="cursor-pointer" />
      </div>
    </footer>
  );
};

export default Footer;

import Image from "next/image";
import logo from "@/assets/logosaas.png";
import X from "@/assets/social-x.svg";
import Insta from "@/assets/social-insta.svg";
import LinkedIn from "@/assets/social-linkedin.svg";
import Pin from "@/assets/social-pin.svg";
import Youtube from "@/assets/social-youtube.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:h-full before:w-full before:blur before:top-2 before:bottom-0 before:absolute before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)]">
          <Image
            src={logo}
            height={40}
            width={40}
            alt="Logo"
            className="relative"
          />
        </div>

        <nav className="flex flex-col md:flex-row md:justify-center   gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex gap-6 justify-center mt-6">
          <X />
          <Insta />
          <LinkedIn />
          <Pin />
          <Youtube />
        </div>
        <p className="mt-6">
          &copy; {new Date().getFullYear()} . Created by Kathiravan Vellaisamy
        </p>
      </div>
    </footer>
  );
};

export default Footer;

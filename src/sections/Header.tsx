import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";
import SaasLogo from "@/assets/logosaas.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-50">
      <div className="flex justify-center items-center py-3 gap-3 bg-black text-white text-sm">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity!
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 justify-center items-center inline-flex" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image
              src={SaasLogo}
              alt="Saas Logo"
              height={40}
              width={40}
              className="rotate-0 hover:rotate-180 transition-transform duration-1000"
            />
            <HiOutlineMenuAlt3 size={25} className="md:hidden" />
            <nav className="hidden md:flex items-center gap-6 text-black/60">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="btn btn-primary hover:bg-slate-800  transition-all duration-1000">
                Get for free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

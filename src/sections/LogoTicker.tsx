import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import echoLogo from "@/assets/logo-echo.png";
import pulseLogo from "@/assets/logo-pulse.png";
import quantumLogo from "@/assets/logo-quantum.png";
import Image from "next/image";

const logoImages = [
  {
    id: 1,
    name: acmeLogo,
  },
  {
    id: 2,
    name: apexLogo,
  },
  {
    id: 3,
    name: celestialLogo,
  },
  {
    id: 4,
    name: echoLogo,
  },
  {
    id: 5,
    name: pulseLogo,
  },
  {
    id: 6,
    name: quantumLogo,
  },
];

const LogoTicker = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 flex-none">
            {logoImages.map((logo, index) => (
              <Image
                key={logo.id}
                src={logo.name}
                alt="logo"
                className="h-8 w-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;

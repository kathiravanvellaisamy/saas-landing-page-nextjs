import ArrowIcon from "@/assets/arrow-right.svg";
import Image from "next/image";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";

const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Version 3.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Effortless Solutions Endless Possibilities
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Provide a brief overview of your SaaS product, explaining what it
              does and how it can benefit the user. Strong management and
              security for powerful features.
            </p>
            <div className="flex gap-2 items-center mt-7">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1 ">
                <span>Learn More</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 md:relative">
            <Image
              src={cogImage}
              alt="Hero image"
              className="md:absolute md:w-auto md:h-full md:max-w-none md:-left-6 lg:left-0"
            />
            <Image
              src={cylinderImage}
              alt="CylinderImage"
              width={220}
              height={220}
              className="hidden md:block -top-8 -left-32 md:absolute"
            />
            <Image
              src={noodleImage}
              height={220}
              width={220}
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
              alt="Noodle Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

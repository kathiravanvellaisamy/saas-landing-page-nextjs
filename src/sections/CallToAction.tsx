import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#9AA3C6] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Start your journey with us!</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment when an app designed to track
            your progress and motivate your efforts
          </p>
          <Image
            src={starImage}
            alt="Star Image"
            width={330}
            className="absolute -left-[350px] -top-[137px]"
          />
          <Image
            src={springImage}
            alt="Spring Image"
            width={330}
            className="absolute -right-[331px] -top-[20px]"
          />
        </div>
        <div className="flex gap-2 justify-center mt-10">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

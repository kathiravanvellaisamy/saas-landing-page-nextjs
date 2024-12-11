import Image from "next/image";
import productImage from "@/assets/product-image.png";
import tubeImage from "@/assets/tube.png";
import pramyidImage from "@/assets/pyramid.png";

const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#9AA3C6] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            Powerful and easy to use saas platform
          </h2>
          <p className="section-description mt-5">
            Provide information about the customer support options available to
            users, such as email support, phone support, live chat, help
            documentation, etc. Assure users that help is available if they
            encounter any issues or have questions.
          </p>
        </div>

        <div className="relative">
          <Image src={productImage} alt="Product Image" className="mt-10" />
          <Image
            src={pramyidImage}
            alt="pramyidImage"
            height={242}
            width={242}
            className="hidden md:block absolute -right-36 -top-28"
          />
          <Image
            src={tubeImage}
            alt="Tube Image"
            height={248}
            className="hidden md:block absolute bottom-24 -left-36"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

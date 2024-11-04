import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionOne = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
            
            {/* About Text Section */}
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
              <SectionTitle
                title="About Us"
                paragraph="At GetApp, we’re dedicated to revolutionizing the delivery service industry by providing convenient, reliable, and efficient solutions tailored to meet the needs of our customers. With a focus on innovation and customer satisfaction, we strive to make everyday tasks easier and more enjoyable, ensuring that you can always rely on us for all your delivery needs."
                mb="44px"
              />

              <div className="max-w-[570px]">
                <div className="mb-5">
                  <h3 className="text-3xl font-semibold text-primary mb-3">
                    Our Mission
                  </h3>
                  <p className="text-lg font-medium text-body-color">
                    Our mission is to provide reliable, hassle-free local delivery solutions that positively impact the community we serve while empowering individuals and businesses.
                  </p>
                </div>
                &nbsp;
                <div className="mb-5">
                  <h3 className="text-3xl font-semibold text-primary mb-3">
                    Our Values
                  </h3>
                  <p className="text-lg font-medium text-body-color">
                    We prioritize reliability, customer-centricity, innovation, integrity, community engagement, teamwork, adaptability, and sustainability in our operations, ensuring trust, satisfaction, and environmental responsibility.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 px-4">
              <div className="relative w-full h-0 pb-[142.25%]">  
                <Image
                  src="/images/about/about-image.png"
                  alt="about-image"
                  fill
                  quality={90}
                  className="object-cover drop-shadow-three dark:hidden dark:drop-shadow-none"
                />
                <Image
                  src="/images/about/about-image-dark.png"
                  alt="about-image"
                  fill
                  quality={90}
                  className="hidden object-cover drop-shadow-three dark:block dark:drop-shadow-none"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;

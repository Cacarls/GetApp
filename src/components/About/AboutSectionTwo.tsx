import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <h2 className="text-center text-5xl font-bold text-black dark:text-white mb-6">
          Our Services
        </h2>
        <p className="text-center mb-10 text-lg font-medium text-body-color">
          At GetApp, we provide tailored delivery services to meet your needs. Whether it’s your favorite dish
          from a local restaurant, groceries from the store, or urgent document delivery, we’ve got you covered. Explore our services below.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        

          <div className="rounded-lg border border-gray-200 bg-white shadow-lg p-6 dark:bg-gray-800 dark:border-gray-700">
            <div className="relative aspect-[4/3] w-full mb-6">
              <Image
                src="/images/services/food-delivery.png"
                alt="Food Delivery"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">
              Food Delivery
            </h3>
            <p className="text-base text-body-color mb-4">
              Hungry for your favorite meal but don’t feel like leaving the house? Let us handle it! Our food delivery service brings your preferred dishes straight to your doorstep.
            </p>
          </div>


          <div className="rounded-lg border border-gray-200 bg-white shadow-lg p-6 dark:bg-gray-800 dark:border-gray-700">
            <div className="relative aspect-[4/3] w-full mb-6">
              <Image
                src="/images/services/pabili.png"
                alt="Pabili"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">
              Pabili
            </h3>
            <p className="text-base text-body-color mb-4">
              Need to stock up on essentials but can’t find the time? Our Pabili service is here to help. We’ll shop on your behalf and deliver everything you need to your doorstep.
            </p>
          </div>


          <div className="rounded-lg border border-gray-200 bg-white shadow-lg p-6 dark:bg-gray-800 dark:border-gray-700">
            <div className="relative aspect-[4/3] w-full mb-6">
              <Image
                src="/images/services/express.png"
                alt="Express Delivery"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">
              Express
            </h3>
            <p className="text-base text-body-color mb-4">
              When it absolutely has to be there on time, count on our Express delivery service. We ensure that your items reach their destination safely and swiftly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;

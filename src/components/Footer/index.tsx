"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <>
     <footer className="relative z-10 bg-gray-100 pt-16 dark:bg-gray-dark md:pt-20 lg:pt-4">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-between items-center">
            {/* Get Started Section */}
            <div className="w-full px-4 md:w-1/3 flex justify-start mt-12 md:mt-12"> 
              <div className="mb-12 max-w-[360px] lg:mb-16" style={{ marginLeft: "-30px" }}>
                <span className="mb-5 inline-block text-4xl font-bold">
                  Get Started Today!
                </span>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Ready to experience the convenience of our delivery services? Simply place your order online or get in touch with us to learn more. At GetApp, we’re committed to making your life easier, one delivery at a time.
                </p>
              </div>
            </div>

            {/* Social Media Icons Section (Center) */}
            <div className="w-full px-4 md:w-1/3 flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold mb-4 text-center">Our Social Media</h2>
              <div className="flex justify-center space-x-7 mb-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/getfoodph"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                >
                  <svg width="55" height="55" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 4.84 3.66 8.83 8.38 9.76v-6.9h-2.54v-2.86h2.54v-2.18c0-2.49 1.5-3.86 3.74-3.86 1.06 0 1.96.08 2.22.11v2.57h-1.52c-1.19 0-1.42.56-1.42 1.39v1.82h2.84l-.37 2.86h-2.47v6.91C18.35 20.84 22 16.84 22 12z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/getapp_ph"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-color duration-300 hover:text-violet-500 dark:text-body-color-dark dark:hover:text-violet-500"
                >
                  <svg width="55" height="55" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7ZM4 7C4 5.34315 5.34315 4 7 4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7ZM12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7ZM6 11C6 7.68629 8.68629 5 12 5C15.3137 5 18 7.68629 18 11C18 14.3137 15.3137 17 12 17C8.68629 17 6 14.3137 6 11ZM18.5 7.5C18.5 7.77614 18.2761 8 18 8C17.7239 8 17.5 7.77614 17.5 7.5C17.5 7.22386 17.7239 7 18 7C18.2761 7 18.5 7.22386 18.5 7.5Z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@getapptv"
                  aria-label="YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-color duration-300 hover:text-red-500 dark:text-body-color-dark dark:hover:text-red-500"
                >
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.571 6.94856C20.0163 7.08472 20.4044 7.38594 20.6804 7.80356C21.0232 8.35355 21.2 9.06576 21.2 9.8V14.2C21.2 14.9342 21.0232 15.6464 20.6804 16.1964C20.4044 16.6141 20.0163 16.9153 19.571 17.0514C18.5093 17.3847 12 17.3847 12 17.3847C12 17.3847 5.49066 17.3847 4.42899 17.0514C3.98369 16.9153 3.59561 16.6141 3.3196 16.1964C2.97682 15.6464 2.8 14.9342 2.8 14.2V9.8C2.8 9.06576 2.97682 8.35355 3.3196 7.80356C3.59561 7.38594 3.98369 7.08472 4.42899 6.94856C5.49066 6.61534 12 6.61534 12 6.61534C12 6.61534 18.5093 6.61534 19.571 6.94856ZM15.0075 12L10.9963 9.84861V14.1514L15.0075 12Z" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@getappofficial"
                  aria-label="TikTok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                >
                  <svg
                    className="e-font-icon-svg e-fab-tiktok"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"  
                    height="50" 
                    fill="currentColor" 
                  >
                    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,1,0,241.83Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Download Links Section */}
            <div className="w-full px-4 md:w-1/3 flex justify-end">
              <div className="flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-4">Get Us On</h2>
                <div className="flex flex-col items-center space-y-4">
                <style jsx>{`
                    /* Define bounce animation */
                    @keyframes bounce {
                      0%, 100% {
                        transform: translateY(0);
                      }
                      50% {
                        transform: translateY(-10px);
                      }
                    }

                    /* Apply bounce animation on hover */
                    .bounce:hover {
                      animation: bounce 0.5s ease-in-out infinite;
                    }
                    `}</style>
                <Link 
                      href="https://apps.apple.com/ph/app/get-food-local-food-delivery/id1559911286" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center"
                    >
                      <img
                        src="/images/footer/appstore.png"
                        alt="Download on the App Store"
                        className="w-45 h-20 bounce"
                      />
                    </Link>

                    <Link 
                      href="https://play.google.com/store/search?q=getfood&c=apps&hl=en" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center"
                    >
                      <img
                        src="/images/footer/googleplay.png"
                        alt="Get it on Google Play"
                        className="w-45 h-20 bounce"
                      />
                    </Link>
                </div>
              </div>
            </div>
          </div>
                    {/* Copyright Section */}
              <div className="border-t border-gray-500 py-5 mt-1 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Copyright © 2024 GetApp.
                </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

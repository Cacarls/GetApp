import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Smooth scroll to top functionality
  const scrollToTop = () => {
    // This scrolls smoothly to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll behavior
    });
  };

  useEffect(() => {
    // Show or hide button depending on scroll position
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add event listener on scroll
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-red-500 text-white shadow-md transition duration-300 ease-in-out hover:bg-red-600 hover:shadow-lg"
        >
          {/* Arrow icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7-7m0 0l-7 7m7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

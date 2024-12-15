"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactDetails = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure that the component doesn't render until after the client-side theme has been determined
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent rendering on the server-side

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className={`relative z-10 rounded-sm p-8 shadow-three sm:p-11 lg:p-8 xl:p-11 ${
          theme === "light" ? "border-2 border-gray-400" : ""
        } dark:bg-gray-dark dark:border-transparent`}
      >
        <div className="space-y-4">
          {/* Phone Number Icon */}
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon
              icon={faPhone} 
              size="2x" 
              className={`text-${theme === 'light' ? 'red-500' : 'white'}`}
              aria-label="Phone"
            />
            <div className={`text-2xl font-bold ${theme === 'light' ? 'text-red-500' : 'text-white'}`}>
              Office Phone Number
            </div>
          </div>
          <div className={`ml-8 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
            <p>+63 35 422 7503 <br/> +63 906 599 9634</p>
          </div>
          &nbsp;
          
          {/* Email Icon */}
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon
              icon={faEnvelope} 
              size="2x" 
              className={`text-${theme === 'light' ? 'red-500' : 'white'}`}
              aria-label="Email"
            />
            <div className={`text-2xl font-bold ${theme === 'light' ? 'text-red-500' : 'text-white'}`}>
              Email
            </div>
          </div>
          <div className={`ml-8 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
            <p>getappph@gmail.com</p>
          </div>
          &nbsp;

          {/* Location Icon */}
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon
              icon={faMapMarkerAlt} 
              size="2x"
              className={`text-${theme === 'light' ? 'red-500' : 'white'}`}
              aria-label="Location"
            />
            <div className={`text-2xl font-bold ${theme === 'light' ? 'text-red-500' : 'text-white'}`}>
              Our Office Address
            </div>
          </div>
          <div className={`ml-8 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
            <p>
              Door 7, G/F, Angel's Apartment, Capitol Area Taclobo, Dumaguete
              City Negros Oriental, Philippines 6200
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;

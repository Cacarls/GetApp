"use client";

import { useTheme } from "next-themes";

const ContactDetails = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`relative z-10 rounded-sm p-8 shadow-three sm:p-11 lg:p-8 xl:p-11 ${
        theme === "light" ? "border-2 border-gray-400" : "" 
      } dark:bg-gray-dark dark:border-transparent`}
    >
      <div className="space-y-4">
        {/* Phone Number Icon - Telephone */}
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`text-${theme === 'light' ? 'red-500' : 'white'}`}
            aria-label="Phone"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6.62 10.79C7.58 9.83 9.02 9.6 10.03 10.06L11.67 11.42C13.04 11.42 14.56 12.22 14.9 13.58L15.33 15.29C15.42 15.74 15.08 16.17 14.63 16.26L13.38 16.58C13.02 16.69 12.58 16.47 12.46 16.12L11.9 14.86C11.7 14.12 10.95 13.61 10.21 13.8C9.47 13.99 9.05 14.72 9.24 15.46L9.88 17.01C9.98 17.22 9.79 17.46 9.58 17.51L8.46 17.67C7.85 17.83 7.19 17.51 6.97 16.89L6.4 15.29C5.92 13.72 4.36 13.16 3.07 13.8L2.26 14.61C2.1 14.81 1.8 14.87 1.62 14.72L0.97 13.69C0.89 13.45 1.07 13.18 1.33 13.1L3.18 12.82C4.15 12.56 4.65 11.34 4.1 10.79L6.62 10.79Z"
            />
          </svg>
          <div className="text-lg font-medium">Office Phone Number</div>
        </div>
        <div className="ml-8">
          <p>+63 35 422 7503 / +63 906 599 9634</p>
        </div>

        {/* Email Icon */}
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`text-${theme === 'light' ? 'red-500' : 'white'}`}
            aria-label="Email"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M2 3h16c1.104 0 2 .896 2 2v14c0 1.104-.896 2-2 2H2c-1.104 0-2-.896-2-2V5c0-1.104.896-2 2-2z"
            />
          </svg>
          <div className="text-lg font-medium">Email</div>
        </div>
        <div className="ml-8">
          <p>getappph@gmail.com</p>
        </div>

        {/* Location Icon */}
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`text-${theme === 'light' ? 'red-500' : 'white'}`}
            aria-label="Location"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 2C8.686 2 6 4.686 6 8c0 4 6 10 6 10s6-6 6-10c0-3.314-2.686-6-6-6zm0 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2z"
            />
          </svg>
          <div className="text-lg font-medium">Our Office Address</div>
        </div>
        <div className="ml-8">
          <p>
            Door 7, G/F, Angel's Apartment, Capitol Area Taclob, Dumaguete
            City Negros Oriental, Philippines 6200
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;

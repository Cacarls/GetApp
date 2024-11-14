import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <img src="/images/features/delivery.png" alt="The Best Courier" width="100" height="100" />,
    title: "The Best Courier",
    paragraph:
      "Our platform selects the most reliable couriers to ensure your deliveries are handled with care and efficiency, giving you peace of mind knowing your items are in good hands.",
  },
  {
    id: 2,
    icon: <img src="/images/features/easy.png" alt="Easy To Use" width="100" height="100" />,
    title: "Easy To Use",
    paragraph:
      "Our user-friendly interface and streamlined process make it effortless for you to place orders, track deliveries, and manage your account, saving you time and hassle.",
  },
  {
    id: 3,
    icon: <img src="/images/features/support.png" alt="24/7 Support" width="100" height="100" />,
    title: "24/7 Support",
    paragraph:
      "Have questions or need assistance at any hour? Our dedicated support team is available around the clock to provide prompt and helpful assistance whenever you need it.",
  },
];

export default featuresData;

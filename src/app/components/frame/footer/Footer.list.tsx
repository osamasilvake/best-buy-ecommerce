import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTwitter, 
  FaYoutube, 
  FaCameraRetro 
} from "react-icons/fa";


interface Section {
    heading: string;
    links: string[];
  }
  
  export const supportData: Section[] = [
    {
      heading: "Customer Support",
      links: [
        "Contact Us",
        "Help Centre",
        "Returns & Exchanges",
        "Best Buy Gift Cards",
        "About Best Buy Marketplace"
      ],
    },
    {
      heading: "About Best Buy Marketplace",
      links: [
        "My Best Buy Account",
        "Order Status",
        "Manage Account",
        "Preference Centre",
        "Personal Information Request",
      ],
    },
    {
      heading: "Services",
      links: [
        "Geek Squad",
        "Best Buy Membership",
        "Monthly Subscription",
        "Best Buy Financing",
        "Trade-In Program",
        "Best Buy Health",
      ],
    },
    {
      heading: "About Us",
      links: [
        "Careers",
        "Company Information",
        "In the Community",
        "Newsroom",
        "Our Commitment to the Environment",
        "Best Buy US",
      ],
    },
    {
      heading: "Partner With Us",
      links: [
        "Advertise with Best Buy",
        "Become a Best Buy Affiliate",
        "Sell on Best Buy Marketplace",
      ],
    },
    {
      heading: "Mobile Apps",
      links: [
        "Android App",
        "iOS App",
      ],
    },
  ];
  
  export const socialIcons = [
    { title: "Facebook", icon: FaFacebookF },
    { title: "Instagram", icon: FaInstagram },
    { title: "LinkedIn", icon: FaLinkedinIn },
    { title: "PicsArt", icon: FaCameraRetro }, // Placeholder for PicsArt
    { title: "Twitter", icon: FaTwitter },
    { title: "YouTube", icon: FaYoutube },
  ];
  
  export default socialIcons;
  
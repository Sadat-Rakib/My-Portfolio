import { IoMdMail } from "react-icons/io";
import { FaLocationDot, FaMedium } from "react-icons/fa6";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa";

export const homeData = {
  myImage: "/assets/Profile Pic.webp",
  contactInfo: [
    {
      Icon: IoMdMail,
      Label: "mirsadatbinrakib01@gmail.com",
      Link: "/contact", 
    },
    {
      Icon: FaLocationDot,
      Label: "Canada",
      Link: "https://www.google.com/maps/place/Canada", 
    },
    {
      Icon: FaPhoneAlt,
      Label: "+1 263 881 0363",
      Link: "tel:+12638810363",
    },
  ],
  education: [
    {
      Icon: FaUniversity,
      Label: "University of Alberta",
      Link: "https://www.ualberta.ca/",
    },
    {
      Icon: FaGraduationCap,
      Label: "Bachelor's Degree in Computing Science & Mathematics",
      Link: "https://www.ualberta.ca/",
    },
  ],
  social: [
    {
      Icon: FaGithub,
      Label: "GitHub",
      Link: "https://github.com/Sadat-Rakib",
    },
    {
      Icon: FaLinkedin,
      Label: "LinkedIn",
      Link: "https://www.linkedin.com/in/mir-sadat-bin-rakib/",
    },
    {
      Icon: FaMedium,
      Label: "Medium",
      Link: "https://medium.com/@mirsadatbinrakib01",
    },
  ],
};
// import images
import Logo from "../src/img/header/logo.svg";
import GalleryImg1 from "../src/img/gallery/1.png";
import GalleryImg2 from "../src/img/gallery/2.png";
import GalleryImg3 from "../src/img/gallery/3.png";
import GalleryImg4 from "../src/img/gallery/4.png";
import GalleryImg5 from "../src/img/gallery/5.png";
import GalleryImg6 from "../src/img/gallery/6.png";
import GalleryImg7 from "../src/img/gallery/7.png";
import GalleryImg8 from "../src/img/gallery/8.png";
import QuoteImg from "../src/img/testimonial/quote.svg";
// import icons
import { GrFacebookOption } from "react-icons/gr";
import { IoMdArrowForward } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import {
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io";

// NAVBAR & HEADER SECTION 

export const headerData = {
  logo: Logo,
};

export const navData = {
  items: [
    { href: "/", name: "Home"},
    { href: "/about", name: "About" },
    { href: "/gallery", name: "Gallery" },
    { href: "/contact", name: "Contact" },
  ],
};

export const socialData = [
  { href: "https://facebook.com/", icon: <GrFacebookOption /> },
  { href: "https://instagram.com/", icon: <IoLogoInstagram /> },
  { href: "https://pinterest.com/", icon: <IoLogoPinterest /> },
  { href: "https://twitter.com/", icon: <IoLogoTwitter /> },
  { href: "https://youtube.com/", icon: <IoLogoYoutube /> },
];

// NAVBAR & HEADER SECTION END
////////////////////////////////////
// HERO SECTION

export const heroData = {
  title: "Who are we?",
  subtitle:
    "Tattoos have their own unique power and magic. They not only beautify the body but also the psyche.",
  btnText: "read more",
  btnIcon: <IoMdArrowForward />,
};

// HERO SECTION END
///////////////////////////////////
// ABOUT SECTION
export const aboutData = {
  title: "Our Story",
  subtitle1:
    "In velit arcu posuere integer. Dolor sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus hac vel ante sit sed scelerisque praesent duis volutpat laoreet.",
  subtitle2:
    "Nisl, sit molestie commodo congue. Etiam lectus risus in amet. Commodo molestie fames etiam aenean sed. Pellentesque et venenatis amet, tellus hac vel adipiscing sit. Placerat vitae nisl viverra faucibus tincidunt habitasse amet. Nunc, velit nunc, scelerisque imperdiet nunc.",
  btnText: "Know more",
  btnIcon: <IoMdArrowForward />,
};
// ABOUT SECTION END
/////////////////////////////////////////////////
// GALLERY SECTION
export const galleryData = {
  title: "Gallery",
  btnText: "View all",
  href: "/gallery",
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 464,
      height: 412,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      width: 465,
      height: 412,
    },
  ],
};
// GALLERY SECTION END
////////////////////////////////////////////////////////////////
// INTERVIEW SECTION
export const interviewData = {
  title:
    "“Consider what you desire. Your tattoo artist will never tell you what tattoo to have.”",
  btnText: "Watch it now",
  btnIcon: <FaPlay />,
};
// INTERVIEW SECTION END
////////////////////////////////////////////////////////////////
// TESTIMONIAL SECTION
export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      "The entire team is extremely kind and friendly. They're fantastic. They're great at what they do! And it's unique.They will properly consult with you.",
    name: "John Doe",
    occupation: "Tattoo Artist",
  },
  {
    quoteImg: QuoteImg,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa asperiores officia natus dignissimos autem possimus molestias aperiam?",
    name: "Harold Wren",
    occupation: "Tattoo Artist",
  },
];
// TESTIMONIAL SECTION END
////////////////////////////////////////////////////////////////////////
// CONTACT SECTION
export const contactData = {
  title: "Get in touch with us",
  info: [
    {
      title: "Ankara Studio",
      subtitle:
        "In velit arcu posuere integer sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus",
      address: {
        icon: <FaMapMarkerAlt />,
        name: "784.Cd 145.Sk 4/A 06200, Çankaya, Ankara",
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: "+90 (555) 555 55-55",
      },
      email: {
        icon: <FaEnvelope />,
        address: "contact@yourcompany.com",
      },
      link: "Get location",
    },    
  ],
  form: {
    name: "Your name",
    email: "Your email address",
    message: "Your messages",
    btnText: "Send",
  },
};
// CONTACT SECTION END
////////////////////////////////////////////////////////////////////////
// FOOTER SECTION
export const footerData = {
  about: {
    title: "About Us",
    subtitle:
      "Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus",
    address: {
      icon: <FaMapMarkerAlt />,
      name: "784.Cd 145.Sk 4/A 06200, Çankaya, Ankara",
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: "+90 (555) 555 55-55",
    },
    email: {
      icon: <FaEnvelope />,
      address: "contact@yourcompany.com",
    },
  },
  links: {
    title: "Useful links",
    items: [
      { href: "/about", name: "About us" },
      { href: "/gallery", name: "Gallery" },
      { href: "/contact", name: "Contact" },
    ],
  },
  program: {
    title: "Working Time",
    items: [
      { name: "Mon - Tue / Appointment" },
      { name: "Wed - Fri / 10:00 - 9:00pm" },
      { name: "Sat / 10:00 - 6:00pm" },
      { name: "Sun / no work on this day" },
    ],
  },
  newsletter: {
    title: "Newsletter",
    subtitle:
      "Elit duis porttitor massa tellus nun in velit arcu posuere integer.",
    form: {
      placeholder: "Your email address",
      icon: <FiSend />,
    },
  },
};
// FOOTER SECTION END
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [contact] = useState([
    { icon: "icon-phone.svg", text: "+2010000000100" },
    { icon: "icon-email.svg", text: "ayhaga@ayhaga.com" },
  ]);
  const [links] = useState([
    "About us",
    "Contact us",
    "Jobs",
    "terms",
    "Press",
    "Privacy",
    "Blog",
  ]);

  const [socialIcon] = useState(["Facebook", "Twitter", "Instgram"]);
  return (
    <section className="bg-[#1c2230] pt-[320px] md:pt-[200px] pb-[100px] text-white ">
      <div className="container ">
        <a href="/">
          <img
            src="/src/assets/images/logo.svg"
            alt="logo"
            className="w-[175px] h-[66px] object-contain"
          />
        </a>
        <div className="mt-[30px] flex justify-between flex-wrap flex-col md:flex-row gap-[30px]">
          <div className="flex items-start gap-[15px] w-[340px] max-w-full ">
            <img
              src="/src/assets/images/icon-location.svg"
              alt="icon"
              className="w-[18px] h-[18px] object-contain"
            />
            <p className="font-normal text-sm tracking-[0.8px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              placeat laudantium quidem? Temporibus, illo debitis.
            </p>
          </div>
          <div>
            {contact.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-[15px] mb-[15px] last-of-type:mb-0"
              >
                <img
                  src={`/src/assets/images/${item.icon}`}
                  alt={item.text}
                  className="w-[18px] h-[18px] object-contain"
                />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`/${link.toLowerCase()}`}
                  className="hover:text-primary text-base"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex gap-[15px] w-full justify-center md:w-auto ">
            {socialIcon.map((item) => (
              <li key={item}>
                <a href="#" className="group">
                  <div className="w-[40px] h-[40px] element-center border border-white rounded-full">
                    {item === "Facebook" ? (
                      <FaFacebookF className="group-hover:text-primary transition-all duration-200" />
                    ) : item === "Twitter" ? (
                      <FaTwitter className="group-hover:text-primary transition-all duration-200" />
                    ) : (
                      <FaInstagram className="group-hover:text-primary transition-all duration-200" />
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;

import Link from "next/link";
import Image from "next/image";

// Components
import Width from "./width";
import WaveComponent from "./wave";

// Icons
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center bg-dark_blue mt-10 pb-10">
      <WaveComponent>
        <Width classnames="lg:flex lg:items-center pt-10 lg:justify-between grid sm:grid-cols-2 lg:gap-0 gap-10">
          <div className="flex">
            <div className="flex flex-col gap-4">
              <Image
                alt="logo"
                width={300}
                height={300}
                loading="lazy"
                className="w-[200px]"
                src={"/logo_white.svg"}
              />
              <p className="text-white">
                Let’s bridge the digital gap in Africa
              </p>
              <div className="flex items-center gap-4 text-white">
                <Link
                  target="_blank"
                  href={
                    "https://www.linkedin.com/company/digital-umuganda/posts/?feedView=all"
                  }
                >
                  <AiOutlineLinkedin className="text-3xl cursor-pointer" />
                </Link>
                <Link
                  href={"https://www.youtube.com/@digitalumuganda9408"}
                  target="_blank"
                >
                  <FaYoutube className="text-4xl cursor-pointer" />
                </Link>
                <Link href={"https://x.com/DUmuganda"} target="_blank">
                  <BsTwitterX className="text-2xl cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-4xl font-bold text-white">About</p>
            <div className="flex flex-col gap-4 text-white">
              <Link href={"/company"}>Home</Link>
              <Link href={"/company"}>About Us</Link>
              <Link href={"/privacy"}>Data Privacy</Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-4xl font-bold text-white">Works</p>
            <div className="flex flex-col gap-4 text-white">
              <Link href={"/projects"}>Our Projects</Link>
              <Link href={"/services"}>Our Services</Link>
              <Link href={"/careers"}>Careers</Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-4xl font-bold text-white">Contact Us</p>
            <div className="flex flex-col gap-4 text-white">
              <div className="flex items-center gap-2">
                <Mail className="w-6 text-green" />{" "}
                <p>info@digitalumuganda.com</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-6 text-green" /> <p>+250788498484</p>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-6 text-green" />{" "}
                <p>Kigali Heights 5th Floor</p>
              </div>
            </div>
          </div>
        </Width>
      </WaveComponent>
    </div>
  );
};

export default Footer;

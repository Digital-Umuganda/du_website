"use client";

import Link from "next/link";
import Image from "next/image";

// Components
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Nav from "@/components/nav";
import Width from "@/components/width";
import Footer from "@/components/footer";
import Member from "@/components/member";

const team = [
  {
    name: "Audace Niyonkuru",
    position: "Founder & CEO",
    image: "/images/DSC06962.JPG",
    about: `
      <p>
      Audace is the founder and C.E.O of Digital Umuganda. He is currently spearheading the vision of the company. He has an ambitious goal of using AI backed voice interaction technologies  to bridge  the digital divide gap in Africa. To reach that goal he is overseeing the process of having the first open voice data-set in Kinyarwanda  as one of the under represented language.
      </p>`,
    linkedin: "https://www.linkedin.com/in/audace-niyonkuru-25571b83/",
  },
  {
    name: "Samuel Rutunda",
    position: "Chief Technology Officer",
    image: "/images/DSC06873.JPG",
    about: `
      <p>
      Samuel is the CTO of Digital Umuganda. Samuel is currently in charge of the Digital Umuganda infrastructure. Samuel interest lies in understanding the world around him, and using technology to improve the quality of life.  specific interest include NLP and Programming automation.
      </p>
    `,
    linkedin: "https://www.linkedin.com/in/samuel-rutunda-07bb818a/",
  },
  {
    name: "Kwaku Agbesi",
    position: "Chief Commercial Officer",
    image: "/images/DSC08947.JPG",
    about: `
      <p>
        Kwaku Agbesi is a seasoned technology executive with over 20 years of experience in digital transformation, strategic partnerships, and project management across Africa. As the newly appointed Chief Commercial Officer at Digital Umuganda, Kwaku brings a wealth of expertise in driving innovation and fostering collaboration. <br /> <br />
        Kwak’us career highlights include leading strategic partnerships for Google Inc. in Africa, where he secured over $5 million in joint research projects and expanded the company’s research network by 20%. He also served as the CEO of Jobberman Ghana, achieving 75% year-on-year revenue growth and securing significant partnerships with Mastercard Foundation and USAID. <br /> <br />
        His previous roles include heading Sales & Marketing for Google’s Project Link, managing a $220 million street lighting project at Pell Frischmann Consultants, and contributing to cost-saving initiatives at Apple Inc. and White Young Green Consulting. <br /> <br />
        Kwaku holds an MBA from Kellogg School of Management, a Master’s in Actuarial Science from Cass Business School, and a Bachelor’s in Civil Engineering from Kwame Nkrumah University of Science and Technology. He is a Chartered Engineer and a Project Management Professional (PMP). His commitment to leveraging technology for sustainable development and empowering communities aligns perfectly with Digital Umuganda’s mission.
      </p>
    `,
    linkedin: "",
  },
  {
    name: "Michel Patrick Mivumbi",
    position: "Head of Operations",
    image: "/images/DSC06952.JPG",
    about: `
      <p>
      Mivumbi Michael Patrick is the Head of Operations at Digital Umuganda, with a strong background in project and program management. He oversees daily operations, ensuring the company runs efficiently and continues to grow. With more than 5 years experience in leading teams and managing projects, Michael brings valuable skills to streamline processes and deliver results. Passionate about emerging technologies, including AI, he is committed to driving the adoption of these innovations in Africa, aligning closely with Digital Umuganda’s mission and vision.
      </p>
    `,
    linkedin: "https://www.linkedin.com/in/mivumbi-michael-patrick-87b925118/",
  },
  {
    name: "Jean Luc Nshimiyimana",
    position: "Finance Lead",
    image: "/images/DSC06888.JPG",
    about: `
      <p>
        Jean-Luc is an experienced finance professional with a track record of over 7 years in corporate finance, he specializes in financial management, financial planning & analysis (FP&A) as well as strategy development, and business performance management. <br /> <br />
        Prior to joining Digital Umuganda, Jean-Luc worked with various organizations in different sectors, including Start-ups & SMEs, Non-profits, community benefit companies (CBCs) known as social enterprises as well as large corporates. This has given him a diverse perspective on a bunch of financial aspects. His expertise in financial analysis, coupled with his keen eye for identifying risks and opportunities, has been paramount in guiding organizations toward successful business decisions and enhancing their overall financial performance. <br /> <br />
        As the Finance Lead, Jean-Luc oversees the management of Digital Umuganda’s financial strategy, planning and other finance functions to ensure the company’s financial stability, compliance and growth. <br /> <br />
        Jean-Luc holds a Bachelor’s degree of Business Administration in Economics from Bugema University and is currently pursuing a Master’s of Business Administration (MBA) in Finance at the Adventist University of Central Africa (AUCA). <br /> <br />
        Jean-Luc is a mathematical star who keeps a pragmatic approach to his work. 
      </p>
    `,
    linkedin: "https://www.linkedin.com/in/jean-luc-n-a332b8238/",
  },
  {
    name: "Ishimwe Mugisha Boris",
    position: "Data and Community Engagement Strategist",
    image: "/images/DSC06941.JPG",
    about: "",
    linkedin: "",
  },
  {
    name: "Francis Nkurunziza",
    position: "Data and Community Engagement Strategist",
    image: "/images/DSC06939.JPG",
    about: "",
    linkedin: "https://www.linkedin.com/in/francisnkurunziza/",
  },

  {
    name: "Saad Byiringiro",
    position: "Product Designer",
    image: "/images/DSC06849.JPG",
    about: "",
    linkedin: "https://www.linkedin.com/in/byiringiro-saad/",
  },

  {
    name: "Kleber Kabanda",
    position: "Machine Learning Engineer",
    image: "/images/DSC06975.JPG",
    about: "",
    linkedin: "https://www.linkedin.com/in/kleber-kabanda-72047b161/",
  },

  {
    name: "Celestin Niyindagiriye",
    position: "Software Developer",
    image: "/images/DSC06898.JPG",
    about: `
      <p>
        Driven Full-Stack Engineer with 4+ years of experience building scalable web applications. Proven ability to deliver innovative solutions. Eager to contribute to a team that values collaboration and continuous learning.
      </p>
    `,
    linkedin: "https://www.linkedin.com/in/nicelestin/",
  },

  {
    name: "Elvis Peace NDAHAYO RUGERO",
    position: "Software Developer",
    image: "/images/DSC06915.JPG",
    about: "",
    linkedin:
      "https://www.linkedin.com/in/elvis-peace-ndahayo-rugero-2a12a9139/",
  },

  {
    name: "Ali NENGO",
    position: "Software Developer",
    image: "/images/DSC06921.JPG",
    about: `
      <p>
        Ally is passionate about positive changes in the community, he vehemently believes that one of the things that can make this world a better place we can count in the use of technology moderately and smartly, without forgetting to spend some valuable moments with the loved one, he always preach that its a shared responsibility.
      </p>
    `,
    linkedin: "",
  },

  {
    name: "Irakoze Mugisha Cedric",
    position: "Software Developer",
    image: "/images/DSC06870.JPG",
    about: "",
    linkedin: "https://www.linkedin.com/in/irakoze-mugisha-cedric-7a7a661a5/",
  },
];

const Company = () => {
  return (
    <main className="w-full h-auto flex flex-col items-center">
      <div className="w-full h-[300px] flex flex-col items-center justify-between bg-gradient-to-b from-white to-[#f4f4f4]">
        <Nav />
        <div className="flex flex-col items-center gap-4 pb-10">
          <p className="text-4xl font-bold text-dark_blue">About the company</p>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <Link href={"/"}>Digital Umuganda</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <p className="text-green">About us</p>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <Width classnames="h-auto flex md:flex-row flex-col items-center mt-10 md:gap-0 gap-6">
        <div className="md:w-[40%] w-full h-full flex flex-col items-center overflow-hidden rounded-lg">
          <Image
            alt="One"
            width={600}
            height={500}
            loading="lazy"
            src={"/images/three.JPG"}
            className="w-full h-[300px] object-cover"
          />
        </div>
        <div className="md:w-[60%] w-[100%] h-full flex flex-col justify-center gap-4 md:px-10">
          <p className="text-2xl font-bold text-dark_blue">Who we are</p>
          <p className="text-justify">
            Digital Umuganda was established in 2018 with a bold vision: to
            leverage digital technologies to create a lasting societal impact
            across Africa. From the beginning, we set out to address one of the
            continent’s most pressing challenges—the digital exclusion of
            African languages.
          </p>
          <p className="text-justify">
            Headquartered in Kigali, Rwanda, our work spans multiple African
            countries, reflecting our commitment to empowering communities
            across the continent. Our team is made up of passionate experts with
            a deep understanding of both the African market and global best
            practices. This unique combination allows us to design solutions
            that are not only innovative but also culturally relevant and
            impactful.
          </p>
        </div>
      </Width>
      <Width classnames="h-auto flex flex-col items-center mt-20 mb-10">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-4xl font-bold text-dark_blue">Our Objectives</p>
          <p>What we want to achieve</p>
        </div>
        <div className="w-[100%] h-auto grid sm:grid-cols-2 gap-10 mt-10 justify-center items-center">
          <div className="flex gap-4 w-[90%]">
            <div className="flex-shrink-0 w-10 h-10  bg-green flex items-center justify-center rounded-full">
              <p className="text-white">1</p>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <p className="text-xl font-bold text-dark_blue">
                Democratizing Access to Information
              </p>
              <p>
                Digital Umuganda aims to reduce the digital divide by making
                information accessible in local languages. This initiative seeks
                to empower communities that traditionally lack access to digital
                resources, thereby fostering inclusivity in technology use.
              </p>
            </div>
          </div>
          <div className="flex gap-4 w-[90%]">
            <div className="flex-shrink-0 w-10 h-10  bg-green flex items-center justify-center rounded-full">
              <p className="text-white">2</p>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <p className="text-xl font-bold text-dark_blue">
                Building Open Data Infrastructure
              </p>
              <p>
                The organization is dedicated to creating open-source datasets
                and tools that facilitate the development of voice technologies.
                This infrastructure supports local developers and entrepreneurs
                in building applications tailored to their communities,
                promoting local innovation.
              </p>
            </div>
          </div>
          <div className="flex gap-4 w-[90%]">
            <div className="flex-shrink-0 w-10 h-10  bg-green flex items-center justify-center rounded-full">
              <p className="text-white">3</p>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <p className="text-xl font-bold text-dark_blue">
                Enhancing Language Technology
              </p>
              <p>
                By focusing on undeserved languages, Digital Umuganda works to
                improve natural language processing (NLP) capabilities. This
                includes collecting and curating voice data that can be used to
                train AI models, ultimately leading to better digital services
                for undeserved languages.
              </p>
            </div>
          </div>
          <div className="flex gap-4 w-[90%]">
            <div className="flex-shrink-0 w-10 h-10  bg-green flex items-center justify-center rounded-full">
              <p className="text-white">4</p>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <p className="text-xl font-bold text-dark_blue">
                Supporting Sustainable Development Initiatives
              </p>
              <p>
                Digital Umuganda aligns its projects with national digital
                strategies aimed at sustainable development. The organization
                collaborates with partners like GIZ and Mozilla to ensure that
                its initiatives not only advance technology but also contribute
                positively to the community&apos;s socio-economic landscape
              </p>
            </div>
          </div>
        </div>
      </Width>
      <div className="w-full h-auto flex flex-col items-center bg-gray py-10">
        <Width classnames="h-full flex md:flex-row flex-col items-center justify-between md:gap-0 gap-10">
          <p className="text-4xl font-bold text-dark_blue">Our Mission</p>
          <p className="md:w-2/3 flex-full text-justify">
            We believe that language should never be a barrier to opportunity.
            our mission is to enhance access to information and services in
            underserved languages by creating tools that bridge linguistic gaps,
            and empower individuals and organizations with digital solutions
            that are accessible, relevant, and transformative. By preserving
            Africa’s linguistic diversity, we are shaping a future where
            everyone has equal access to knowledge and opportunities.
          </p>
        </Width>
      </div>
      <Width classnames="h-auto flex flex-col items-center my-10">
        <div className="flex flex-col items-center gap-2 mt-2 mb-10">
          <p className="text-4xl font-bold text-dark_blue">Meet the Team</p>
          <p>Meet Digital Umuganda Team</p>
        </div>
        <div className="w-full h-auto grid md:grid-cols-3 sm:grid-cols-2 gap-10 overflow-hidden">
          {team.map((member, index) => (
            <Member key={index} member={member} />
          ))}
        </div>
      </Width>
      <Footer />
    </main>
  );
};

export default Company;

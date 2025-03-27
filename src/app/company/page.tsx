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
                  <p className="text-green">About the company</p>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <Width classnames="h-auto flex md:flex-row flex-col items-center mt-10 md:gap-0 gap-6">
        <div className="md:w-[40%] w-full h-full flex flex-col items-center overflow-hidden rounded-lg gap-4">
          <Image
            alt="One"
            width={600}
            height={500}
            loading="lazy"
            src={"/images/three.JPG"}
            className="w-full h-[250px] object-cover"
          />
        </div>
        <div className="md:w-[60%] w-[100%] h-full flex flex-col justify-center gap-4 md:px-10">
          <p className="text-2xl font-bold text-dark_blue">Who we are</p>
          <p className="text-justify">
            In 2018, Digital Umuganda emerged from a powerful vision: to
            catalyze Africa&apos;s vast potential by harnessing the
            transformative power of digital technology. We recognized that true
            progress hinged on bridging a fundamental gap – the language divide,
            a critical barrier that excluded millions from the digital world.
            From our strategic hub in the vibrant city of Kigali, Rwanda, we
            launched a determined journey to dismantle this barrier, empowering
            communities across the continent. This wasn&apos;t just about
            technology; it was about ensuring access to information, education,
            and opportunity in the languages people understood and spoke daily.
          </p>
        </div>
      </Width>
      <Width classnames="h-full flex  flex-col items-center justify-between gap-8 mt-8">
        <p className="text-justify">
          Our team is more than just a collection of professionals; we are a
          passionate confluence of African market experts and global innovators.
          We bring a deep, nuanced understanding of the unique challenges and
          opportunities within diverse African communities, coupled with the
          cutting-edge knowledge and best practices gleaned from the global tech
          landscape. This unique blend allows us to craft solutions that are not
          only technologically advanced but also deeply resonant with the
          cultural context of the communities we serve. We understand that
          technology must be tailored, not imposed, to truly make a lasting
          impact.
        </p>
        <p className="text-justify">
          Our work extends beyond mere translation or localization. We strive to
          create intelligent, adaptable systems that understand the subtleties
          of local languages, enabling richer, more meaningful interactions with
          digital tools. We are building the infrastructure for a future where
          African languages thrive in the digital sphere, fostering innovation,
          entrepreneurship, and inclusive growth. We believe that by empowering
          individuals with information in their own languages, we are unlocking
          a wealth of untapped potential, contributing to a more equitable and
          prosperous Africa.
        </p>
      </Width>
      <div className="w-full h-auto flex flex-col items-center bg-gray py-10 mt-14">
        <Width classnames="h-full flex md:flex-row flex-col items-center justify-between md:gap-0 gap-10">
          <p className="text-4xl font-bold text-dark_blue">Our Mission</p>
          <p className="md:w-2/3 flex-full text-justify">
            We envision a future where language is never an obstacle to
            opportunity. To realize this, we are dedicated to expanding access
            to information and services in underserved languages through the
            development of impactful digital tools. By bridging linguistic gaps
            and preserving Africa&apos;s rich linguistic diversity, we are
            empowering individuals and organizations and creating a more
            equitable future for all.
          </p>
        </Width>
      </div>
      <Width classnames="h-auto flex flex-col items-center mt-14 mb-10">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-4xl font-bold text-dark_blue">Our Objectives</p>
          <p>What we want to achieve</p>
        </div>
        <div className="w-[100%] h-auto grid gap-10 mt-10 justify-center items-center">
          <div className="flex gap-4 w-[95%]">
            <div className="flex-shrink-0 w-10 h-10  bg-green flex items-center justify-center rounded-full">
              <p className="text-white">1</p>
            </div>
            <div className="flex flex-col gap-4 mt-2">
              <p className="text-xl font-bold text-dark_blue">
                Democratizing Access to Information
              </p>
              <p className="text-justify">
                This objective goes beyond mere translation. It&apos;s about
                ensuring that vital information—health advice, educational
                resources, government services, and economic opportunities—are
                accessible to populations who have historically been excluded
                from the digital sphere due to language barriers.
              </p>
              <p className="text-justify">
                It involves creating user-friendly interfaces, developing
                voice-enabled applications, and building content repositories
                that cater to the linguistic nuances and cultural contexts of
                diverse African communities.
              </p>
              <p className="text-justify">
                The impact is profound: increased literacy, improved health
                outcomes, enhanced economic participation, and greater civic
                engagement. By breaking down language barriers, Digital Umuganda
                empowers individuals to become active participants in the
                digital economy and knowledge society.
              </p>
              <p className="text-justify">
                This also helps to preserve the languages that are being used,
                and ensures that they continue to thrive in an ever digital
                world.
              </p>
            </div>
          </div>
          <div className="flex gap-4 w-[95%]">
            <div className="flex-shrink-0 w-10 h-10  bg-green flex items-center justify-center rounded-full">
              <p className="text-white">2</p>
            </div>
            <div className="flex flex-col gap-4 mt-2">
              <p className="text-xl font-bold text-dark_blue">
                Building Open Data Infrastructure
              </p>
              <p className="text-justify">
                This objective recognizes that data is the lifeblood of AI and
                language technology. By creating open-source datasets and tools,
                Digital Umuganda is laying the foundation for a vibrant
                ecosystem of innovation.
              </p>
              <p className="text-justify">
                This infrastructure empowers local developers, researchers, and
                entrepreneurs to build applications that address the specific
                needs of their communities. It fosters a culture of
                collaboration and knowledge sharing, accelerating the
                development of culturally relevant solutions.
              </p>
              <p className="text-justify">
                For example, open-source voice datasets enable the training of
                AI models for voice recognition and synthesis in local
                languages, opening up possibilities for voice-activated
                services, language learning tools, and assistive technologies.
              </p>
              <p className="text-justify">
                This also allows for greater transparency, and allows for more
                people to be able to contribute to the growth of language
                technology within Africa.
              </p>
            </div>
          </div>
          <div className="flex gap-4 w-[95%]">
            <div className="flex-shrink-0 w-10 h-10  bg-green flex items-center justify-center rounded-full">
              <p className="text-white">3</p>
            </div>
            <div className="flex flex-col gap-4 mt-2">
              <p className="text-xl font-bold text-dark_blue">
                Enhancing Language Technology
              </p>
              <p className="text-justify">
                This objective focuses on advancing the state-of-the-art in
                natural language processing (NLP) for underserved languages.
                This involves overcoming the challenges of limited data,
                linguistic complexity, and the lack of standardized resources.
              </p>
              <p className="text-justify">
                Digital Umuganda&apos;s work in collecting and curating voice
                data is crucial for training AI models that can accurately
                understand and process local languages. This leads to the
                development of more effective and intuitive digital services.
              </p>
              <p className="text-justify">
                The impact is transformative: improved machine translation, more
                accurate voice recognition, and the development of intelligent
                chatbots and virtual assistants that can communicate in local
                languages. This enhances the user experience and makes digital
                technologies more accessible and relevant.
              </p>
              <p className="text-justify">
                This also allows for the languages to be used in new and
                innovative ways that were previously impossible.
              </p>
            </div>
          </div>
          <div className="flex gap-4 w-[95%]">
            <div className="flex-shrink-0 w-10 h-10  bg-green flex items-center justify-center rounded-full">
              <p className="text-white">4</p>
            </div>
            <div className="flex flex-col gap-4 mt-2">
              <p className="text-xl font-bold text-dark_blue">
                Supporting Sustainable Development Initiatives
              </p>
              <p className="text-justify">
                This objective recognizes that technology is not an end in
                itself, but a tool for achieving broader societal goals. By
                aligning its projects with national digital strategies and
                partnering with organizations like GIZ and Mozilla, Digital
                Umuganda ensures that its work contributes to sustainable
                development.
              </p>
              <p className="text-justify">
                This involves addressing issues such as digital literacy, gender
                equality, and environmental sustainability. For example, Digital
                Umuganda&apos;s work on language technology can be used to
                create educational resources for girls, provide agricultural
                information to farmers, or disseminate public health messages in
                local languages.
              </p>
              <p className="text-justify">
                By integrating its work into broader development frameworks,
                Digital Umuganda maximizes its impact and contributes to a more
                equitable and prosperous future for Africa.
              </p>
              <p className="text-justify">
                This allows for Digital Umuganda to have more of a positive
                impact on the communities that they are working within.
              </p>
            </div>
          </div>
        </div>
      </Width>

      <Footer />
    </main>
  );
};

export default Company;

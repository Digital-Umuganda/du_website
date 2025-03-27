"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
import { Button } from "@/components/ui/button";

// Icons
import { Info } from "lucide-react";

const Projects = () => {
  const router = useRouter();

  return (
    <main className="w-full h-auto flex flex-col items-center">
      <div className="w-full h-[300px] flex flex-col items-center justify-between bg-gradient-to-b from-white to-[#f4f4f4]">
        <Nav />
        <div className="flex flex-col gap-4 pb-10 items-center">
          <p className="text-4xl font-bold text-dark_blue">Our Projects</p>
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
                  <p className="text-green">Our Projects</p>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <Width classnames="h-auto flex lg:flex-row flex-col items-center mt-10">
        <div className="w-[45%] h-full lg:flex hidden flex-col items-center overflow-hidden rounded-lg">
          <Image
            alt="One"
            width={600}
            height={500}
            loading="lazy"
            src={"/images/First.jpeg"}
            className="w-full h-[300px] object-cover"
          />
        </div>
        <div className="lg:w-[55%] w-full h-full flex flex-col justify-center gap-4 lg:px-10">
          <p className="text-2xl font-bold text-dark_blue">
            <span className="text-green">Open Data For All (OD4A)</span>:
            Building the Foundation for Accessible African Language Technology.
          </p>
          <Image
            alt="One"
            width={600}
            height={500}
            loading="lazy"
            src={"/images/First.jpeg"}
            className="w-full h-[250px] object-cover lg:hidden rounded"
          />
          <p className="text-justify">
            OD4A is more than just a data collection initiative; it&apos;s a
            strategic effort to build the bedrock upon which a new era of
            inclusive language technology for African communities can thrive. We
            recognize that the lack of robust, publicly available datasets is a
            significant bottleneck in the development of tools that truly serve
            the diverse linguistic landscape of Africa. Therefore, we are
            actively constructing a vital open data infrastructure. This
            infrastructure is not merely a repository; it&apos;s a dynamic
            resource designed to empower developers, researchers, and innovators
            across the continent.
          </p>
          <Button
            className="gap-2 sm:w-1/3 w-2/4 bg-green"
            onClick={() => router.push("/projects/od4a")}
          >
            <Info className="w-4" /> Learn More
          </Button>
        </div>
      </Width>
      <div className="w-full h-auto flex flex-col items-center bg-gray mt-10 py-10">
        <Width classnames="h-auto flex items-center">
          <div className="lg:w-[55%] w-full h-full flex flex-col justify-center gap-4 lg:px-10">
            <p className="text-2xl font-bold text-dark_blue">
              <span className="text-green">Mbaza</span>: Our Innovation Forge
              for Real-World Solutions.
            </p>
            <Image
              alt="One"
              width={600}
              height={500}
              loading="lazy"
              src={"/images/_AUR0756.jpeg"}
              className="w-full h-[250px] object-cover lg:hidden rounded"
            />
            <p className="text-justify">
              We transform pressing challenges into tangible impact at Mbaza,
              our dedicated innovation hub. By actively engaging with
              governments, the private sector, and NGOs, we gain deep insights
              into their unique needs and co-create tailored tools and
              applications.
            </p>
            <p className="text-justify">
              Mbaza transcends traditional service provision; it&apos;s a
              dynamic bridge connecting technological potential with real
              societal impact. We prioritize co-creation, ensuring our solutions
              are practical, scalable, and deeply aligned with the needs of
              end-users. Our collaborative efforts have led to the development
              of:
            </p>
            <Button
              className="gap-2 sm:w-1/3 w-2/4 bg-green"
              onClick={() => router.push("/projects/mbaza")}
            >
              <Info className="w-4" /> View Projects
            </Button>
          </div>
          <div className="w-[45%] h-full lg:flex hidden flex-col items-center overflow-hidden rounded-lg">
            <Image
              alt="One"
              width={600}
              height={500}
              loading="lazy"
              src={"/images/_AUR0756.jpeg"}
              className="w-full h-[300px] object-cover"
            />
          </div>
        </Width>
      </div>
      {/* <Width classnames="h-auto flex items-center my-10">
        <div className="w-[45%] h-[300px] lg:flex bg-gradient-to-b from-white to-[#f4f4f4] hidden items-center justify-center rounded-lg">
          <p className="text-3xl font-bold">Explico</p>
        </div>
        <div className="lg:w-[55%] w-full h-full flex flex-col justify-center gap-4 lg:px-10">
          <p className="text-2xl font-bold">Explico</p>
          <div className="w-full h-[250px] object-cover lg:hidden bg-gradient-to-b from-white to-[#f4f4f4] flex items-center justify-center rounded-lg">
            <p className="text-3xl font-bold">Explico</p>
          </div>
          <p className="text-justify">
            Explico is an all-in-one platform that is designed to empower
            developers, businesses, and communities to harness the potential of
            African language technologies easily and effectively. Through
            Explico, users will be able to use our pre-trained language models
            for various tasks, such as speech recognition, translation, or text
            generation, and access APIs to integrate these tools into their own
            apps and projects.
          </p>
          <Button className="gap-2 sm:w-1/3 w-2/4 bg-green">
            <a target="_blank" className="flex items-center gap-2" href="">
              <Info className="w-4" /> Visit Explico
            </a>
          </Button>
        </div>
      </Width> */}
      <Footer />
    </main>
  );
};

export default Projects;

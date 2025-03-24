/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

// Components
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Width from "@/components/width";
import Footer from "@/components/footer";
import Counter from "@/components/counter";
import Contact from "@/components/contact";
import GrayscaleImage from "@/components/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Icons
import { Info } from "lucide-react";

// Utils
// import { Bloger } from "@/lib/types";
// import axiosInstance from "@/lib/axios";

export default function Home() {
  const router = useRouter();
  // const [data, setData] = useState<Bloger[]>();

  // useEffect(() => {
  //   axiosInstance.get("/wp/v2/posts?categories=19").then((res) => {
  //     setData(res.data);
  //   });
  // }, []);

  return (
    <main className="w-full h-full flex flex-col items-center">
      <Nav />
      <Hero />
      <Width classnames="h-auto flex lg:flex-row flex-col justify-between mt-14 gap-10">
        <div className="lg:w-1/2 w-full flex flex-col lg:items-start items-center gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-4xl font-bold lg:text-left text-center text-dark_blue">
              What we do
            </p>
            <p className="lg:text-left text-center">
              At Digital Umuganda, we are passionate about using technology to
              make African languages accessible to everyone. Our work is focused
              on three main areas:
            </p>
          </div>
          <Image
            alt="One"
            width={600}
            height={500}
            loading="lazy"
            src={"/images/DSC01505.JPG"}
            className="w-full h-[200px] object-cover object-center rounded lg:hidden"
          />
          <div className="lg:flex lg:flex-col grid sm:grid-cols-2 lg:gap-2 gap-6">
            <div className="lg:w-auto w-[90%] flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-green flex items-center justify-center rounded-full">
                <p className="text-white">1</p>
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <p className="text-xl font-bold text-dark_blue">
                  Data Collection
                </p>
                <p className="text-justify">
                  We gather and create large-scale datasets to support the
                  development of tools for African languages. This includes
                  collecting voice recordings, text samples, and translations to
                  build models.
                </p>
              </div>
            </div>
            <div className="lg:w-auto w-[90%] flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-green flex items-center justify-center rounded-full">
                <p className="text-white">2</p>
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <p className="text-xl font-bold text-dark_blue">Mbaza</p>
                <p className="text-justify">
                  We actively engage with governments, private sector and NGOs
                  to understand their unique needs and develop tailored tools
                  and applications.
                </p>
              </div>
            </div>
          </div>
          <Button
            className="gap-2 sm:w-1/3 w-2/4 bg-green"
            onClick={() => router?.push("/projects")}
          >
            <Info className="w-4" /> Learn More
          </Button>
        </div>
        <div className="w-1/2 lg:flex hidden flex-col items-center">
          <Image
            alt="One"
            width={600}
            height={500}
            loading="lazy"
            src={"/images/DSC01505.JPG"}
            className="w-[450px] h-full object-cover object-left rounded"
          />
        </div>
      </Width>
      <div className="w-full h-auto flex flex-col items-center justify-center mt-10 py-10 bg-gray">
        <Width classnames="h-auto lg:flex items-center lg:justify-between grid sm:grid-cols-2 grid-cols-1 gap-10">
          <div className="flex flex-col items-center">
            <p className="text-5xl text-green font-bold flex items-center">
              <Counter from={0} to={20} dec={0} />+
            </p>
            <p>Projects executed</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-5xl text-green font-bold flex items-center">
              <Counter from={0} to={17} dec={0} />+
            </p>
            <p>African languages digitized</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-5xl text-green font-bold flex items-center">
              <Counter from={0} to={4500} dec={0} />+
            </p>
            <p>Audio hours recorded</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-5xl text-green font-bold flex items-center">
              <Counter from={0} to={3000000} dec={0} />+
            </p>
            <p>Text collected / annotated</p>
          </div>
        </Width>
      </div>
      <Width classnames="h-auto flex flex-col items-center justify-between mt-10">
        <p className="text-4xl font-bold mb-10 text-dark_blue">Who we are</p>
        <div className="w-full h-auto flex lg:flex-row flex-col items-center gap-10">
          <div className="w-1/2 lg:flex flex-col hidden h-[500px] object-cover object-center rounded bg-green items-center justify-center">
            <Image
              alt="logo"
              width={400}
              height={400}
              loading="lazy"
              src={"/images/three.JPG"}
              className="w-full h-full object-cover object-center rounded"
            />
          </div>
          <div className="w-full h-[200px] rounded lg:hidden bg-green flex items-center justify-center">
            <Image
              alt="logo"
              width={400}
              height={400}
              loading="lazy"
              src={"/images/three.JPG"}
              className="w-full h-full rounded object-cover object-center"
            />
          </div>
          <div className="lg:w-1/2 w-full h-full flex flex-col lg:items-start items-center justify-center gap-10">
            <div className="flex lg:flex-row flex-col items-center gap-6">
              <div className="lg:flex hidden items-center">
                <Image
                  alt="One"
                  width={600}
                  height={500}
                  loading="lazy"
                  src={"/about.svg"}
                  className="w-[100px]"
                />
              </div>
              <div className="w-full flex items-center justify-center gap-2 lg:hidden">
                <Separator className="sm:w-[40%] w-[20%]" />
                <p className="text-nowrap font-bold">About Us</p>
                <Separator className="sm:w-[40%] w-[20%]" />
              </div>
              <p className="text-justify">
                African languages are the foundation of a rich cultural
                heritage, preserving identity, traditions, and indigenous
                knowledge, yet many are underrepresented in the digital world.
                At Digital Umuganda, we are dedicated to changing this
                narrative. By leveraging AI and open data, we create
                high-quality language datasets, and develop innovative AI
                solutions to ensure that every voice is heard and no language is
                left behind in the digital age.
              </p>
            </div>
            <div className="flex lg:flex-row flex-col items-center gap-6">
              <div className="lg:flex hidden items-center">
                <Image
                  alt="One"
                  width={600}
                  height={500}
                  loading="lazy"
                  src={"/mission.svg"}
                  className="w-[100px]"
                />
              </div>
              <div className="w-full flex items-center justify-center gap-2 lg:hidden">
                <Separator className="sm:w-[40%] w-[20%]" />
                <p className="text-nowrap font-bold">Our Mission</p>
                <Separator className="sm:w-[40%] w-[20%]" />
              </div>
              <p className="text-justify">
                We believe that language should never be a barrier to
                opportunity. Our mission is to enhance access to information and
                services in underserved languages by creating tools that bridge
                linguistic gaps, and empower individuals and organizations with
                digital solutions that are accessible, relevant, and
                transformative. By preserving Africa&apos;s linguistic
                diversity, we are shaping a future where everyone has equal
                access to knowledge and opportunities.
              </p>
            </div>
            <Button
              onClick={() => router?.push("/company")}
              className="gap-2 sm:w-1/3 w-2/4 bg-green"
            >
              <Info className="w-4" /> Learn More
            </Button>
          </div>
        </div>
      </Width>
      <Width classnames="w-full flex flex-col lg:flex-row items-center gap-10 mt-10">
        <p className="lg:w-1/2 w-full text-4xl font-bold text-dark_blue lg:text-start text-center">
          Our commitment to <span className="text-green">privacy</span> and{" "}
          <span className="text-green">transparency</span> in every step of Data
          collection.
        </p>
        <div className="lg:w-1/2 w-full flex flex-col gap-6">
          <p className="text-justify">
            We&apos;re dedicated to preserving knowledge and advancing
            technology through responsible data collection. From digitizing
            languages to building large datasets, we prioritize transparency,
            security, and respect for the communities behind the data.
          </p>
          <Button
            onClick={() => router?.push("/privacy")}
            className="gap-2 sm:w-1/3 w-2/4 bg-green"
          >
            <Info className="w-4" /> Learn More
          </Button>
        </div>
      </Width>
      <div className="w-full h-auto flex flex-col items-center mt-16 py-10 bg-gray">
        <Width classnames="flex flex-col items-center relative">
          <div className="flex flex-row gap-2">
            <span className="text-5xl text-green">&ldquo;</span>
            <p className="text-xl font-bold text-dark_blue mb-2 text-center">
              Language is more than just words; it&apos;s{" "}
              <span className="text-green font-bold">identity</span> ,{" "}
              <span className="text-green font-bold">culture</span>, and{" "}
              <span className="text-green font-bold">heritage</span>.
            </p>
            <span className="text-5xl text-green">&rdquo;</span>
          </div>
          <p className="text-center text-black">
            At Digital Umuganda, We are using AI to bridge linguistic gaps and
            create opportunities for all. Together, we can shape an inclusive
            digital future.
          </p>
        </Width>
      </div>
      <Width classnames="h-auto flex flex-col items-center mt-10">
        <p className="text-4xl font-bold mb-4 text-dark_blue">Our Partners</p>
        <p className="text-center">
          Our work is possible through the support of our Partners
        </p>
        <div className="w-full flex items-center justify-center gap-20 mt-10 flex-wrap">
          <GrayscaleImage
            alt="One"
            width={250}
            height={250}
            src="/logos/one.png"
          />
          <GrayscaleImage
            alt="One"
            width={250}
            height={250}
            src="/logos/two.png"
          />
          <GrayscaleImage
            alt="One"
            width={250}
            height={250}
            src="/logos/three.png"
          />
          <GrayscaleImage
            alt="One"
            width={250}
            height={250}
            src="/logos/four.png"
          />
          <GrayscaleImage
            alt="One"
            width={250}
            height={250}
            src="/logos/five.svg"
          />
          <GrayscaleImage
            alt="One"
            width={250}
            height={250}
            src="/logos/six.png"
          />
          {/* <GrayscaleImage
            alt="One"
            width={250}
            height={250}
            src="/logos/seven.png"
          /> */}
          <GrayscaleImage
            alt="One"
            width={250}
            height={250}
            src="/logos/eight.png"
          />
          <GrayscaleImage
            alt="One"
            width={250}
            height={250}
            src="/logos/nine.svg"
          />
        </div>
      </Width>
      <Separator className="my-16" />
      {/* <Testimonials /> */}
      <Width classnames="h-auto flex flex-col justify-start" id="contact">
        <Contact />
      </Width>
      <Footer />
    </main>
  );
}

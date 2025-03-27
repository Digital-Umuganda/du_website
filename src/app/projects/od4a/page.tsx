import Link from "next/link";

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
import Counter from "@/components/counter";
import { Button } from "@/components/ui/button";
import AfricanMap from "../../../components/map";

// Icons
import { Info } from "lucide-react";

const DataCollection = () => {
  return (
    <main className="w-full h-auto flex flex-col items-center">
      <div className="w-full h-[300px] flex flex-col items-center justify-between bg-gradient-to-b from-white to-[#f4f4f4]">
        <Nav />
        <div className="flex flex-col gap-4 pb-10 items-center">
          <p className="text-4xl font-bold text-dark_blue">Open Data For All</p>
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
                  <Link href={"/projects"}>Our Projects</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <p className="text-green">Open Data For All</p>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <Width classnames="h-[auto] flex lg:flex-row flex-col items-center my-10 gap-10">
        <AfricanMap />
        <div className="lg:w-1/2 w-full flex flex-col gap-6">
          <p className="text-justify">
            At the core of OD4A is the meticulous process of gathering and
            generating extensive datasets. This encompasses a wide range of
            linguistic data, including carefully curated voice recordings that
            capture the nuances of pronunciation and intonation, text samples
            that represent the written forms of various languages, and
            translations that facilitate cross-lingual understanding.
          </p>
          <p className="text-justify">
            These datasets are not simply collected; they are meticulously
            processed and annotated to ensure their quality and usability. This
            level of detail is crucial for developing effective Speech-to-Text,
            Text-to-Speech, and Machine Translation functionalities – the
            cornerstones of accessible language technology.
          </p>
          <div className="w-full grid lg:grid-cols-2 gap-4">
            <div className="flex flex-col items-center gap-2 border border-border py-5 rounded border-dashed w-full">
              <p className="text-xl font-bold text-green">
                <Counter dec={0} from={0} to={17} />
              </p>
              <p>Languages Digitalized</p>
            </div>
            <div className="flex flex-col items-center gap-2 border border-border py-5 rounded border-dashed w-full">
              <p className="text-xl font-bold text-green">
                <Counter dec={0} from={0} to={552800000} />
              </p>
              <p>Languages&apos; Speakers</p>
            </div>
            <div className="flex flex-col items-center gap-2 border border-border py-5 rounded border-dashed w-full">
              <p className="text-xl font-bold text-green">
                <Counter dec={0} from={0} to={14} />
              </p>
              <p>Countries</p>
            </div>
            <div className="flex flex-col items-center gap-2 border border-border py-5 rounded border-dashed w-full">
              <p className="text-xl font-bold text-green">
                <Counter dec={0} from={0} to={4500} />
              </p>
              <p>Audio Hours Recorded</p>
            </div>
          </div>
          <p className="text-justify">
            What sets OD4A apart is its collaborative methodology. We understand
            that language is intrinsically tied to culture and community.
            Therefore, we don&apos;t operate in isolation. Instead, we forge
            strong partnerships with local communities to ensure that the
            collected data is not only technically accurate but also culturally
            relevant. This collaborative approach guarantees that the data is
            representative and accurate, reflecting the true diversity and
            richness of African languages. It ensures that the datasets are not
            just large, but also meaningful and applicable to the real-world
            needs of African language speakers. By prioritizing community
            engagement, we are not only building datasets; we are building trust
            and fostering a sense of ownership, which is essential for the
            long-term sustainability of our efforts.
          </p>
          <p className="text-justify">
            Ultimately, OD4A is about enabling greater accessibility to
            technology. By providing open access to high-quality language data,
            we are lowering the barriers to entry for developers and
            researchers. This empowers them to create innovative solutions that
            address the specific needs of their communities. We envision a
            future where language is no longer a barrier to digital inclusion,
            where African languages are fully supported by cutting-edge
            technology, and where everyone has the opportunity to participate in
            the digital economy. OD4A is a crucial step towards realizing that
            vision.
          </p>
          <a href="https://huggingface.co/DigitalUmuganda" target="_blank">
            <Button className="gap-2 lg:w-1/2 w-full bg-green">
              {" "}
              <Info className="w-4" /> Open-source Datasets
            </Button>
          </a>
        </div>
      </Width>
      <Footer />
    </main>
  );
};

export default DataCollection;

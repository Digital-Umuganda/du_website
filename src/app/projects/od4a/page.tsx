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
            At Digital Umuganda, we&apos;re at the forefront of preserving and
            digitalizing African languages through comprehensive data collection
            initiatives. Working closely with local communities, we gather
            high-quality voice recordings, text samples, and linguistic
            resources that form the foundation of our digital language
            preservation efforts. This process not only documents these
            languages but also prepares them for integration into modern digital
            technologies.
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
            We firmly believe that democratizing access to African language
            datasets accelerates technological innovation and inclusion. By
            making the datasets openly available through Hugging Face,
            we&apos;ve created a valuable resource for researchers, developers,
            and organizations worldwide, and established a foundation for
            sustainable, community-driven technological advancement that bridges
            the digital divide.
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

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

const Privacy = () => {
  return (
    <main className="w-full h-auto flex flex-col items-center">
      <div className="w-full h-[300px] flex flex-col items-center justify-between bg-gradient-to-b from-white to-[#f4f4f4]">
        <Nav />
        <div className="flex flex-col gap-4 pb-10 items-center">
          <p className="text-4xl font-bold text-dark_blue">Data Privacy</p>
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
                  <p className="text-green">Data Privacy</p>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <Width classnames="mt-10 h-auto flex flex-col items-center gap-4">
        <p className="text-4xl font-bold mb-6 text-center text-dark_blue">
          Data Privacy and Protection Policy
        </p>
        <p className="text-justify">
          At Digital Umuganda, we recognize that the data you entrust to us is
          not just information—it&apos;s the voice of our community, the
          foundation of our mission, and a testament to your trust. We are
          deeply committed to upholding the highest data privacy and protection
          standards, ensuring your contributions are handled with the utmost
          care and respect. This policy outlines our unwavering commitment to
          safeguarding your personal data, empowering you to contribute with
          confidence, and fostering a secure, inclusive digital ecosystem.
        </p>
      </Width>
      <Width>
        <div className="w-full lg:h-[350px] h-[200px] object-cover rounded my-10 bg-green flex items-center justify-center">
          <Image alt="logo" width={200} height={200} src={"/logo_white.svg"} />
        </div>
      </Width>
      <Width classnames="h-auto flex flex-col gap-4">
        <p className="text-xl font-bold text-dark_blue">
          <span className="text-green">Our Pledge</span>: Transparent and Secure
          Data Handling
        </p>
        <p className="text-justify">
          We collect data to advance critical initiatives, but never at the
          expense of your privacy. We adhere to stringent protocols and ethical
          guidelines, ensuring your information is used responsibly and
          transparently.
        </p>
      </Width>
      <Width classnames="mt-10 h-auto flex flex-col gap-4">
        <p className="text-xl font-bold text-dark_blue">
          <span className="text-green">Data We Collect</span>: Purpose-Driven
          and Minimally Invasive
        </p>
        <div className="w-full flex flex-col gap-2">
          <p className="text-lg font-bold">Voice Data</p>
          <p className="text-justify">
            Audio recordings and transcriptions, vital for building robust
            language models.
          </p>
          <p className="text-lg font-bold">Images</p>
          <p className="text-justify">
            Visual data that enriches our understanding and fosters inclusivity.
          </p>
          <p className="text-lg font-bold">Personal Information</p>
          <p className="text-justify">
            (Name, Contacts, Age Group, Gender): Collected solely for essential
            administrative functions, such as secure payment processing, and to
            ensure program inclusivity.
          </p>
        </div>
      </Width>
      <Width classnames="h-auto flex flex-col gap-4 mt-10">
        <p className="text-xl font-bold text-dark_blue">
          <span className="text-green">How We Use Your Data</span>: Empowering
          Progress, Preserving Privacy
        </p>
        <p className="text-justify">
          Internal Use: Names and phone numbers are exclusively used for secure
          payment processing, ensuring efficiency and confidentiality.
        </p>
        <p className="text-justify">
          Partner Collaboration: Aggregated, anonymized data (age groups and
          gender) is shared with trusted partners for analytical purposes,
          driving program effectiveness and inclusivity without compromising
          individual privacy.
        </p>
        <p className="text-justify">
          Open Source Contribution: Voice datasets, images, and transcriptions
          are made openly available on Hugging Face, democratizing access to
          vital resources and fueling innovation.
        </p>
        <p className="text-justify">
          However, no personal identifiable information will be released in
          these open-source datasets.e on the Hugging Face platform under the
          Digital Umuganda account.
        </p>
      </Width>
      <Width classnames="h-auto flex flex-col gap-4 mt-10">
        <p className="text-xl font-bold text-dark_blue">
          <span className="text-green">Image Data Collection</span>: Respect and
          Responsibility
        </p>
        <ul className="w-full flex flex-col gap-2 list-disc list-inside">
          <li>
            We strictly prohibit capturing images of minors (under 18) without
            explicit parental or guardian consent.
          </li>
          <li>
            All images of individuals are taken with their informed consent.
          </li>
          <li>
            We respect intellectual property rights, using copyrighted images
            only with explicit permission.
          </li>
          <li>
            We adhere to all local laws and regulations regarding image capture.
          </li>
          <li>
            We enforce a strict policy against including any personal
            identifiable information, such as names or phone numbers, within
            images.
          </li>
        </ul>
      </Width>
      <Width classnames="h-auto flex flex-col gap-4 mt-10">
        <p className="text-xl font-bold text-dark_blue">
          <span className="text-green">Voice Data Collection</span>: Ethical and
          Secure
        </p>
        <ul className="w-full flex flex-col gap-2 list-disc list-inside">
          <li>
            No voice recording is made without the explicit consent of the
            owner.
          </li>
          <li>
            Participants are fully informed about how their data will be used,
            stored, and shared.
          </li>
          <li>
            All recorded data is stored and secured with the highest level of
            protection.
          </li>
          <li>
            All data collection activities are conducted in strict compliance
            with Rwanda’s Data Protection Law.
          </li>
        </ul>
      </Width>
      <Width classnames="h-auto flex flex-col gap-4 mt-10">
        <p className="text-xl font-bold text-dark_blue">
          <span className="text-green">Open Source</span>: Democratizing Data,
          Driving Innovation
        </p>
        <p className="text-justify">
          Digital Umuganda champions open access to African language datasets.
          By sharing our resources on Hugging Face, we empower researchers,
          developers, and organizations worldwide, fostering a collaborative
          ecosystem that bridges the digital divide and accelerates
          technological advancement. This fosters sustainable, community-driven
          technological advancement.{" "}
          <span className="text-green font-bold">
            We ensure that all open-source data is depersonalized.
          </span>
        </p>
      </Width>
      <Width classnames="h-auto flex flex-col gap-4 mt-10">
        <p className="text-xl font-bold text-dark_blue">
          <span className="text-green">Certification</span>
        </p>
        <div className="w-ful flex lg:flex-row flex-col items-center">
          <p className="text-justify w-full lg:w-2/3 mb-10 lg:mb-0">
            Digital Umuganda champions open access to African language datasets.
            By sharing our resources on Hugging Face, we empower researchers,
            developers, and organizations worldwide, fostering a collaborative
            ecosystem that bridges the digital divide and accelerates
            technological advancement. This fosters sustainable,
            community-driven technological advancement.{" "}
          </p>
          <div className="flex items-center justify-center lg:w-1/3 w-full">
            <Image alt="logo" width={200} height={200} src={"/logos/dpo.jpg"} />
          </div>
        </div>
      </Width>
      <Width classnames="h-auto flex flex-col gap-4 mt-10">
        <p className="text-xl font-bold text-dark_blue">
          <span className="text-green">Data Security</span>: Fortifying Your
          Trust
        </p>
        <p className="text-justify">
          We employ robust security measures to protect your data from
          unauthorized access, alteration, disclosure, or destruction. These
          measures include advanced encryption, stringent access controls, and
          secure data storage protocols, ensuring your data&apos;s integrity and
          confidentiality.
        </p>
      </Width>
      <Width classnames="h-auto flex flex-col gap-4 mt-10">
        <p className="text-xl font-bold text-dark_blue">
          <span className="text-green">Your Trust</span>, Our Responsibility
        </p>
        <p className="text-justify">
          Digital Umuganda is committed to building a digital future where
          innovation and privacy coexist. We pledge to continuously improve our
          data protection practices, ensuring that your contributions are
          valued, protected, and used to create a more inclusive and equitable
          world.
        </p>
        <p className="text-xl font-bold text-dark_blue">Contact Us</p>
        <p>For any privacy and data-related inquiries, please contact us at:</p>
        <div className="w-full p-8 border border-border flex flex-row rounded sm:gap-20 gap-10">
          <div className="flex flex-col gap-4">
            <p>Phone:</p>
            <p>Email</p>
          </div>
          <div className="flex flex-col gap-4">
            <p>+250781268904</p>
            <p className="text-green">info@digitalumuganda.com</p>
          </div>
        </div>
      </Width>
      <Footer />
    </main>
  );
};

export default Privacy;

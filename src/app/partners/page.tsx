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

const Partners = () => {
  return (
    <main className="w-full h-auto flex flex-col items-center">
      <div className="w-full h-[300px] flex flex-col items-center justify-between bg-gradient-to-b from-white to-[#f4f4f4]">
        <Nav />
        <div className="flex flex-col gap-4 pb-10 items-center">
          <p className="text-4xl font-bold text-center">
            Partners Information Sheet
          </p>
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
                  <p className="text-green">Partners Information</p>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <Width classnames="mt-10 h-auto flex flex-col items-center gap-4">
        <p className="text-4xl font-bold mb-6 text-center">
          Technology Innovation with Open Voice Data
        </p>
        <p className="text-justify">
          Speech is becoming a preferred way to interact with personal
          electronics and the future of human-machine interaction lies in voice
          control. However, developers, researchers and startups around the
          globe working on voice-recognition technology face one problem alike:
          A lack of freely available voice data in their respective language to
          train speech-to-text engines. Although machine-learning algorithms
          like Mozilla’s Deep Speech are in the public domain, training data is
          limited.{" "}
        </p>
        <p className="text-justify">
          Most of the voice data used by large corporations is not available to
          the majority of people, expensive to obtain or simply non-existent for
          languages not globally spread. The innovative potential of this
          technology is widely untapped. This particularly true for Africa,
          despite being home to a rich diversity of languages.{" "}
        </p>
        <p className="text-justify">
          Today’s Internet – and consequently the technologies and services
          built on top – is heavily skewed towards English, in a world where
          English is only spoken by 20% of the global population, and only 5%
          natively. If we want technology to become more inclusive, we need to
          make sure that future technologies – especially doors to access
          information and services – exist in many languages. We believe voice
          recognition technology can and must be one of these doors.
        </p>
        <p className="text-justify">
          In providing open datasets, three partners – Digital Umaganda, GIZ
          (Deutsche Gesellschaft für Internationale Zusammenarbeit GmbH) and
          Mozilla – aim to take away the onerous task of collecting and
          annotating data, which eventually reduces one of the main barriers to
          voice-based technologies and hopefully makes front-runner innovations
          accessible to more entrepreneurs.
        </p>
        <p className="text-justify">
          Creating some level-playing field with open Common Voice data is just
          the first step. In the near future we hope this will inspire demand
          for innovative voice-based solutions, allow for local value creation
          and help to build an ecosystem around voice data as an open resource,
          which not only large international companies eventually benefit from,
          but everyone.
        </p>
        <p className="text-justify">
          With voice interaction available in their own language, we may provide
          millions of people access to information, make technologies more
          inclusive and ultimately foster a just, locally rooted yet global
          digital transformation. 
        </p>
      </Width>
      <Width>
        <Image
          alt="One"
          width={600}
          height={500}
          loading="lazy"
          src={"/images/_AUR0741.jpeg"}
          className="w-full lg:h-[350px] h-[200px] object-cover rounded my-10"
        />
      </Width>
      <Width classnames="h-auto flex flex-col items-center gap-4">
        <p className="text-4xl font-bold mb-6 text-center">
          GIZ – Deutsche Gesellschaft für Internationale Zusammenarbeit
        </p>
        <p className="text-justify">
          As a service provider in the field of international cooperation for
          sustainable development and international education work, GIZ is
          dedicated to shaping a future worth living around the world. GIZ has
          over 50 years of experience in a wide variety of areas, including
          economic development and employment promotion, energy and the
          environment, and peace and security. The diverse expertise of GIZ’s
          federal enterprise is in demand around the globe – from the German
          Government, European Union institutions, the United Nations, the
          private sector and governments of other countries. GIZ works with
          businesses, civil society actors and research institutions, fostering
          successful interaction between development policy and other policy
          fields and areas of activity. The GIZ’s main commissioning party is
          the German Federal Ministry for Economic Cooperation and Development
          (BMZ).
        </p>
        <p className="text-justify">
          In the context of the GIZ Innovation Fund, GIZ has launched a project
          to actively support the crowdsourcing of open voice data collection in
          under-represented languages. By partnering with both the Mozilla
          Foundation and local organizations, GIZ aims at supporting local value
          creation and context-relevant innovation in the field of artificial
          intelligence. In Rwanda, the Digital Solutions for Sustainable
          Development (DSSD) program will support open data collection in
          Kinyarwanda. With this initiative, DSSD aims both at supporting the
          development of voice-based solutions and at strengthening local
          organizations and capacities of the Rwandan innovation ecosystem at
          large. GIZ support will encompass funding of data collection
          activities, but also provision of mentoring for network and community
          building, as well as business development.
        </p>
        <div className="w-full flex flex-col">
          <p className="text-xl mb-4 font-bold">Contact</p>
          <div className="w-full p-8 border border-border flex sm:flex-row flex-col rounded gap-20">
            <div className="flex flex-col gap-4">
              <p>Germany</p>
              <p>Lea Gimpel</p>
              <p className="text-green">lea.gimpel@giz.de</p>
              <p>+49 1577 892 1709</p>
            </div>
            <div className="flex flex-col gap-4">
              <p>Rwanda</p>
              <p>Jan Krewer</p>
              <p className="text-green">jan.krewer@giz.de</p>
              <p>+250 782 751 686</p>
            </div>
          </div>
        </div>
      </Width>
      <Width classnames="mt-10 h-auto flex flex-col items-center gap-4">
        <p className="text-4xl font-bold mb-6">Mozilla</p>
        <p className="text-justify">
          Mozilla, the non-profit organization behind the popular web browser
          Firefox, is a pioneer and advocate for the Open Web for more than 20
          years. Core to its mission is that the Internet is a global public
          resource, open and accessible to all. Mozilla works to ensure it stays
          open by building products, technologies and programs that put people
          in control of their online lives, and contribute to a healthier
          Internet. Today, hundreds of millions of people worldwide use Mozilla
          Firefox to experience the Web on computers, tablets and mobile
          devices. For more information, visit www.mozilla.org.
        </p>
      </Width>
      <Width classnames="my-10 flex flex-col gap-4">
        <p className="text-xl font-bold">Project Common Voice</p>
        <p className="text-justify">
          Launched in June 2017, Mozilla’s project “Common Voice” is taking a
          multifaceted approach to open innovation to democratize speech
          technologies. The project wants to build open and publicly available
          datasets of labelled audio — up to 10,000 hours of speech for as many
          different languages as possible, representing a broad diversity of
          accents, ages, gender, etc. — that anyone can use to train
          voice-enabled applications.
        </p>
        <p className="text-justify">
          Today, the latest Common Voice release represents the largest public
          domain transcribed voice dataset, with more than 2,400 hours of voice
          data and 28 languages represented, including English, French, German
          and Mandarin Chinese (Traditional), but also for example Welsh and
          Kabyle. To put that in perspective, the public collection of TED talks
          constitutes about 200 hours, while LibriSpeech, which is essentially
          public domain Books on Tape, represent about 1,000 hours. The dataset
          is downloaded hundreds of times a month.
        </p>
        <p className="text-justify">
          Since the project enabled multi-language support in June 2018, Common
          Voice has grown to be more global and more inclusive. Over the past
          months, communities have enthusiastically rallied around the project,
          launching data collection efforts in 30+ languages with 70+ more in
          progress on the Common Voice site. Eventually, Mozilla wants Common
          Voice to be a tool for any community to make speech technology
          available in their own language.
        </p>
        <p className="text-xl font-bold">Project Deep Speech</p>
        <p className="text-justify">
          Common Voice complements Mozilla’s work in the field of speech
          recognition, which runs under the project name “Deep Speech” (
          <Link
            href={"https://github.com/mozilla/DeepSpeech"}
            target="_blank"
            className="text-green"
          >
            https://github.com/mozilla/DeepSpeech
          </Link>{" "}
          ), an open-source speech recognition engine, with an English model
          first released in November 2017.
        </p>
        <p className="text-justify">
          Together with a community of like minded developers, companies and
          researchers, Mozilla’s Machine Learning Group has applied
          sophisticated machine learning techniques and a variety of innovations
          to build an open-source speech-to-text engine that approaches human
          accuracy.
        </p>
        <p className="text-justify">
          Project Deep Speech is early stage, laying the groundwork for future
          adoption. Initial traction is strongest with researchers and startups.
          Deep Speech is built on a framework which allows for rapid prototyping
          and we will provide access to diverse training data sets.
        </p>
        <p className="text-justify">
          Together with the growing Common Voice dataset Mozilla believes this
          technology can and will enable a wave of innovative products and
          services, and that it should be available to everyone.
        </p>
        <p className="text-xl font-bold">Contact</p>
        <div className="w-full p-8 border border-border flex sm:flex-row flex-col rounded gap-20">
          <div className="flex flex-col gap-4">
            <p>Technical collaborations:</p>
            <p>George Roter, Project Lead</p>
            <p className="text-green">Groter@mozilla.com</p>
          </div>
          <div className="flex flex-col gap-4">
            <p>Media requests:</p>
            <p>Alexander Klepel, Communications Lead</p>
            <p className="text-green">aklepel@mozilla.com</p>
          </div>
        </div>
      </Width>
      <Footer />
    </main>
  );
};

export default Partners;

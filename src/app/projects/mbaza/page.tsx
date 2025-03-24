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

const Mbaza = () => {
  return (
    <main className="w-full h-auto flex flex-col items-center">
      <div className="w-full h-[300px] flex flex-col items-center justify-between bg-gradient-to-b from-white to-[#f4f4f4]">
        <Nav />
        <div className="flex flex-col gap-4 pb-10 items-center">
          <p className="text-4xl font-bold text-dark_blue">Mbaza</p>
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
                  <p className="text-green">Mbaza</p>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <Width classnames="h-[auto] flex lg:flex-row flex-col items-center my-10 gap-10">
        <div className="w-full flex flex-col gap-6">
          <p className="text-justify">
            Mbaza represents our commitment to developing scalable AI solutions
            that address critical communication challenges across Africa. We
            leverage our advanced natural language processing capabilities and
            extensive multilingual datasets to develop customized AI-powered
            tools that make information and services more accessible in local
            African languages.
          </p>
          <p className="text-justify">Some of projects created are:</p>
          <div className="w-full grid lg:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 border border-border py-5 px-5 rounded border-dashed w-full">
              <p className="text-xl font-bold text-dark_blue">
                Covid-19 USSD-Chatbot
              </p>
              <p>
                Accessed at:{" "}
                <span className="text-lg font-bold text-green">*114#</span>
              </p>
              <p className="text-justify">
                This USSD-based chatbot revolutionized access to COVID-19
                information by enabling instant access to pandemic statistics,
                prevention measures, and case reporting through basic mobile
                phones.
              </p>
              <div className="w-full grid lg:grid-cols-2 gap-4">
                <div className="flex flex-col items-center gap-2 py-5 rounded border-dashed w-full">
                  <p className="text-xl font-bold text-green">
                    <Counter dec={0} from={0} to={4165037} />
                  </p>
                  <p>Users</p>
                </div>
                <div className="flex flex-col items-center gap-2 py-5 rounded border-dashed w-full">
                  <p className="text-xl font-bold text-green">
                    <Counter dec={0} from={0} to={37812089} />
                  </p>
                  <p>Sessions</p>
                </div>
              </div>
              <p className="text-justify">
                Recognized for its effectiveness, the platform continues to
                evolve with new features requested by the Ministry of Health,
                establishing a blueprint for emergency health communication
                during future public health challenges.
              </p>
            </div>
            <div className="flex flex-col gap-2 border border-border py-5 px-5 rounded border-dashed w-full">
              <p className="text-xl font-bold text-dark_blue">
                GBV USSD-Chatbot
              </p>
              <p>
                Accessed at:{" "}
                <span className="text-lg font-bold text-green">*350#</span>
              </p>
              <p className="text-justify">
                Digital Umuganda&apos;s GBV response chatbot provides a secure
                and accessible channel for survivors of gender-based violence to
                seek help and report incidents confidentially. This solution
                exemplifies how technology can effectively address sensitive
                social issues while ensuring user privacy and security.
              </p>
              <div className="w-full grid lg:grid-cols-2 gap-4">
                <div className="flex flex-col items-center gap-2 py-5 rounded border-dashed w-full">
                  <p className="text-xl font-bold text-green">
                    <Counter dec={0} from={0} to={81700} />
                  </p>
                  <p>Users</p>
                </div>
                <div className="flex flex-col items-center gap-2 py-5 rounded border-dashed w-full">
                  <p className="text-xl font-bold text-green">
                    <Counter dec={0} from={0} to={144000} />
                  </p>
                  <p>Sessions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Width>
      <Footer />
    </main>
  );
};

export default Mbaza;

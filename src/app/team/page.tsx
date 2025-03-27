"use c";

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
import CompanyMemberCard from "@/components/member";

// Data
import { team } from "./team";

const Team = () => {
  return (
    <main className="w-full h-auto flex flex-col items-center">
      <div className="w-full h-[300px] flex flex-col items-center justify-between bg-gradient-to-b from-white to-[#f4f4f4]">
        <Nav />
        <div className="flex flex-col items-center gap-4 pb-10">
          <p className="text-4xl font-bold text-dark_blue">Meet the team</p>
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
                  <p className="text-green">Our Team</p>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <Width classnames="h-auto flex flex-col items-center my-10">
        <div className="w-full h-auto grid md:grid-cols-3 sm:grid-cols-2 gap-10 overflow-hidden">
          {team.map((member, index) => (
            <CompanyMemberCard key={index} member={member} />
          ))}
        </div>
      </Width>
      <Footer />
    </main>
  );
};

export default Team;

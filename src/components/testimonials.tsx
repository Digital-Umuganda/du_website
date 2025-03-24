"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

// Components
import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselContent,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// Icons
import { FcGoogle } from "react-icons/fc";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechCorp",
    content:
      "Working with DU has been transformative for our business. Their innovative solutions and dedicated team have helped us achieve remarkable growth.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "InnovateTech",
    content:
      "The expertise and professionalism of DU's team is unmatched. They delivered beyond our expectations and continue to be a valuable partner.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "FutureScale",
    content:
      "DU's attention to detail and commitment to excellence has made them an invaluable partner in our product development journey.",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Director",
    company: "GlobalTech",
    content:
      "The impact of DU's work on African language technology has been remarkable. Their dedication to preserving linguistic diversity is inspiring.",
  },
  {
    id: 5,
    name: "Lisa Mwangi",
    role: "Project Lead",
    company: "AfriTech Solutions",
    content:
      "DU's expertise in language technology has helped us bridge communication gaps in our community projects. Their solutions are truly transformative.",
  },
];

const Testimonials = () => {
  const plugin = useRef(Autoplay({ delay: 2000 }));

  return (
    <div className="w-full h-auto flex flex-col items-center mb-16 mt-10 pt-10 bg-gray">
      <div className="w-full max-w-7xl mx-auto px-4">
        <p className="text-4xl font-bold mb-14 text-dark_blue text-center">
          Testimonials
        </p>
        <Carousel
          opts={{ loop: true }}
          plugins={[plugin.current]}
          onMouseOut={() => plugin.current.play()}
          onMouseEnter={() => plugin.current.stop()}
          className="lg:w-[95%] md:w-[90%] sm:w-[85%] w-[80%] h-auto mb-10 mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="xl:basis-1/3 md:basis-1/2"
              >
                <Card className="border bg-background shadow-sm">
                  <CardHeader className="flex flex-row items-center pb-0">
                    <FcGoogle className="w-10 h-10 mr-3" />
                    <div>
                      <p className="font-medium">{testimonial.company}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="mb-4 italic">{testimonial.content}</p>
                    <div className="mt-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;

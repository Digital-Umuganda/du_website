/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { Fragment, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

// Components
import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormControl,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

// Icons
import { LoaderCircle, Send } from "lucide-react";

// Utils
import { sendEmail } from "@/lib/email";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().email(),
  subject: z.string().min(3),
  names: z.string().min(2).max(50),
  message: z.string().min(10).max(500),
});

const Contact = () => {
  const { toast } = useToast();

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isPending, setIsPending] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      names: "",
      subject: "",
      message: "",
    },
  });

  const handleCaptchaSubmission = async (token: string | null) => {
    try {
      if (token) {
        await fetch("/api", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        setIsVerified(true);
      }
    } catch (e) {
      console.log(e);

      setIsVerified(false);
    }
  };

  const handleChange = (token: string | null) => {
    handleCaptchaSubmission(token);
  };

  function handleExpired() {
    setIsVerified(false);
  }

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsPending(true);

    sendEmail(values)
      .then((res) => {
        console.log(res);

        toast({
          title: "Message sent!",
          content: "Thanks for your message, we will reach out to you soon!",
        });

        form.reset();
      })
      .catch((err) => {
        console.log(err);

        toast({
          variant: "destructive",
          title: "Something went wrong, try again",
        });
      })
      .finally(() => {
        setIsPending(false);
      });
  };

  return (
    <div className="w-full h-full flex flex-col sm:px-4 gap-10">
      <div className="w-full lg:flex-row flex-col flex gap-10">
        <div className="lg:w-1/3 w-full flex flex-col lg:mb-0 mb-10">
          <p className="text-4xl font-bold mb-4 text-dark_blue">Get in touch</p>
          <p>For the following inquiries:</p>
          <div className="lg:flex flex-col mt-4 gap-4 grid sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <div className="flex w-5 h-5 bg-green rounded-full" />
              <p>Requesting our services.</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex w-5 h-5 bg-green rounded-full" />
              <p>Potential partnerships.</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex w-5 h-5 bg-green rounded-full" />
              <p>Interested in joining DU.</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex w-5 h-5 bg-green rounded-full" />
              <p>Other professional inquiries.</p>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.501051184889!2d30.09052281387836!3d-1.9528565054226454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6f3a6d7d373%3A0xda6c2b3cabfec246!2sKigali%20Heights!5e0!3m2!1sen!2srw!4v1741610134549!5m2!1sen!2srw"
          width="full"
          height="auto"
          loading="lazy"
          allowFullScreen
          style={{ border: 0 }}
          className="justify-self-end rounded w-full"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full h-auto flex flex-col bg-gray rounded sm:p-10 p-6 gap-6"
        >
          <FormField
            name="names"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Names</FormLabel>
                <FormControl>
                  <Input className="h-[45px] bg-white" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input className="h-[45px] bg-white" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="subject"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input className="h-[45px] bg-white" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="message"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    className="h-[150px] bg-white resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full flex flex-col items-end gap-6">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
              ref={recaptchaRef}
              onChange={handleChange}
              onExpired={handleExpired}
            />
            <Button
              disabled={isPending || !isVerified}
              className="sm:w-1/3 lg:w-1/5 w-1/2 self-end bg-green h-[45px]"
            >
              {isPending ? (
                <Fragment>
                  <LoaderCircle className="animate-spin w-4 mr-2" />
                  Sending
                </Fragment>
              ) : (
                <Fragment>
                  <Send className="w-4 mr-2" /> Send
                </Fragment>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Contact;

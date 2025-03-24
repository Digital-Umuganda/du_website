"use server";

import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

const schema = z.object({
  email: z.string().email(),
  subject: z.string().min(3),
  names: z.string().min(2).max(50),
  message: z.string().min(10).max(500),
});

export async function sendEmail(values: z.infer<typeof schema>) {
  const validatedData = schema.safeParse(values);
  if (!validatedData.success) {
    return { error: validatedData.error.flatten().fieldErrors };
  }

  const { error } = await resend.emails.send({
    to: ["info@digitalumuganda.com"],
    subject: validatedData.data.subject,
    from: "Contact Message <contact@projectia.co>",
    html: `
        <p>From: ${validatedData.data.names} &lt;${validatedData.data.email}&gt;</p>
        <p>${validatedData.data.message}</p>
      `,
  });

  if (error) {
    throw new Error(error.message);
  }

  return { success: true };
}

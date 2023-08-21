import { z } from "zod";

export const PersonalInfoSchema = z.object({
  name: z.string(),
  email: z.string().email({ message: "Please provide a valid email" }),
});

export type PersonalInformation = z.infer<typeof PersonalInfoSchema>;

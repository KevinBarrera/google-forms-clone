import { z } from "zod";

export const PersonalInfoSchema = z.object({
  name: z.string(),
  email: z.string().email({ message: "Please provide a valid email" }),
});

export const DeliveryInfoSchema = z.object({
  city: z.string(),
  postalCode: z.string(),
  address: z.string(),
  shipping: z.enum(["free", "fast", "same_day"]),
});

export type PersonalInformation = z.infer<typeof PersonalInfoSchema>;
export type DeliveryInformation = z.infer<typeof DeliveryInfoSchema>;

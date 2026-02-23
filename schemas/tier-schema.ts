import z from "zod";

export const tierSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
    description: z.string().optional(),
});

export type Tier = z.infer<typeof tierSchema>;

export const updateTierSchema = tierSchema.partial();

export type UpdateTier = z.infer<typeof updateTierSchema>;

import z from "zod";

export const categorySchema = z.object({
    name: z.string(),
});

export type Category = z.infer<typeof categorySchema>;

export const updateCategorySchema = categorySchema.partial();

export type UpdateCategory = z.infer<typeof updateCategorySchema>;

import { ProductType } from "@/lib/services/product.service";

export const productSchema = z.object({
    name: z.string().min(1, "Le nom est requis"),
    description: z.string().optional(),
    price: z.coerce.number().min(0, "Le prix doit être positif"),
    categoryId: z.string().min(1, "La catégorie est requise"),
    type: z.nativeEnum(ProductType),
    image: z.any().optional(), // File drag & drop base64
});

// Le type d'insertion
export type CreateProduct = z.infer<typeof productSchema>;

export const updateProductSchema = productSchema.partial();
export type UpdateProduct = z.infer<typeof updateProductSchema>;

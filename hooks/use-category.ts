import { Category, CategoryService } from "@/lib/services/category.service";
import { useResource } from "./use-resource";

export const useCategory = () =>
    useResource<Category>({
        queryKey: "categories",
        service: new CategoryService(),
    })

import { useResource } from "./use-resource"
import { Product, ProductService } from "@/lib/services/product.service"

const useProduct = () =>
    useResource<Product>({
        queryKey: "products",
        service: new ProductService(),
    })

export default useProduct
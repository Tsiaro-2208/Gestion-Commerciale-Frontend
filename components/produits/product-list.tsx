import { Product } from "@/lib/services/product.service"
import { ProductCard } from "./product-card"

const ProductList = ({ products }: { products: Product[] }) => {
    return (
        <div className="w-full grid grid-cols-2 gap-4 border-4 border-red-500">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}

        </div>
    )
}

export default ProductList
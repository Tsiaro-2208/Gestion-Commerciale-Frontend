'use client'
import Loading from "@/components/loading";
import ProductHeader from "@/components/produits/product-header"
import ProductList from "@/components/produits/product-list"
import useProduct from "@/hooks/use-product";

const ProductsPage = () => {
    const { data: products, isLoading } = useProduct();

    if (isLoading) <Loading />
    return (
        <div className="w-full">
            <ProductHeader />
            <ProductList products={products || []} />
        </div>
    )
}

export default ProductsPage
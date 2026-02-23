'use client'

import { PlusCircle } from "lucide-react"
import { Button } from "../ui/button"
import { useState } from "react"
import ProductDialog from "./product-dialog"
import CategoryForm from "./category-form"
import ProductForm from "./product-form"


const ProductHeader = () => {
    const [openAddProduct, setOpenAddProduct] = useState(false)
    const [openAddCategory, setOpenAddCategory] = useState(false)
    return (
        <div className="w-full flex justify-end gap-5 px-5 py-3">
            <Button onClick={() => setOpenAddProduct(true)}><PlusCircle />Ajouter un produit</Button>
            <Button variant={"outline"} onClick={() => setOpenAddCategory(true)}><PlusCircle />Ajouter une catégorie</Button>
            {openAddProduct &&
                <ProductDialog open={openAddProduct} onOpenChange={setOpenAddProduct} title="Ajouter un produit" description="Ajouter un nouveau produit">
                    <ProductForm />
                </ProductDialog>
            }
            {openAddCategory &&
                <ProductDialog open={openAddCategory} onOpenChange={setOpenAddCategory} title="Ajouter une catégorie" description="Ajouter une nouvelle catégorie">
                    <CategoryForm onOpenChange={setOpenAddCategory} />
                </ProductDialog>
            }
        </div>
    )
}

export default ProductHeader
import useProduct from "@/hooks/use-product"
import { useCategory } from "@/hooks/use-category"
import Loading from "../loading"
import { CreateProduct, productSchema } from "@/schemas/product-schema"
import { ProductType } from "@/lib/services/product.service"
import AutoForm, { AutoFormSubmit } from "../ui/auto-form"
import { FormControl, FormItem, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import AutoFormLabel from "../ui/auto-form/common/label"
import AutoFormTooltip from "../ui/auto-form/common/tooltip"
import { uploadFile } from "@/lib/services/upload-service"
import { toast } from "sonner"

const CategorySelectField = ({ label, isRequired, field, fieldConfigItem }: any) => {
    const { data: categories, isLoading } = useCategory()

    return (
        <FormItem>
            <AutoFormLabel label={fieldConfigItem?.label || label} isRequired={isRequired} />
            <FormControl>
                {isLoading ? (
                    <div className="text-sm text-muted-foreground p-2 border rounded-md">Chargement des catégories...</div>
                ) : (
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Sélectionnez une catégorie" />
                        </SelectTrigger>
                        <SelectContent>
                            {categories?.map((cat) => (
                                <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                )}
            </FormControl>
            <AutoFormTooltip fieldConfigItem={fieldConfigItem} />
            <FormMessage />
        </FormItem>
    )
}

const ProductTypeSelectField = ({ label, isRequired, field, fieldConfigItem }: any) => {
    return (
        <FormItem>
            <AutoFormLabel label={fieldConfigItem?.label || label} isRequired={isRequired} />
            <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Sélectionnez un type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value={ProductType.RAW_MATERIAL}>Matière première</SelectItem>
                        <SelectItem value={ProductType.FINISHED_GOOD}>Produit fini</SelectItem>
                        <SelectItem value={ProductType.BOTH}>Les deux</SelectItem>
                    </SelectContent>
                </Select>
            </FormControl>
            <AutoFormTooltip fieldConfigItem={fieldConfigItem} />
            <FormMessage />
        </FormItem>
    )
}

const ProductForm = () => {
    const { create, isLoading } = useProduct()

    if (isLoading) return <Loading />

    const onSubmit = async (data: CreateProduct) => {
        try {
            let finalImageUrl = ""

            // Si une image a été sélectionnée, on essaie de l'uploader d'abord
            if (data.image) {
                if (!(data.image instanceof File)) {
                    toast.error("Veuillez re-sélectionner l'image (Format invalide).")
                    return
                }
                const uploaded = await uploadFile(data.image, "articles")
                if (uploaded?.url) {
                    finalImageUrl = uploaded.url
                }

            }

            const finalData = {
                ...data,
                image: finalImageUrl
            }

            await create(finalData)
            toast.success("Produit enregistré avec succès")
        } catch (error) {
            toast.error("Une erreur s'est produite lors de l'enregistrement.")
            console.error(error)
        }
    }

    return (
        <AutoForm
            formSchema={productSchema}
            onSubmit={onSubmit}
            fieldConfig={{
                image: {
                    fieldType: "file",
                    label: "Image du produit",
                },
                categoryId: {
                    fieldType: CategorySelectField,
                    label: "Catégorie"
                },
                type: {
                    fieldType: ProductTypeSelectField,
                    label: "Type de produit"
                },
                price: {
                    label: "Prix",
                    inputProps: { type: "number" }
                },
                description: {
                    fieldType: "textarea",
                    label: "Description"
                }
            }}
        >
            <AutoFormSubmit className="w-full mt-4">Enregistrer le produit</AutoFormSubmit>
        </AutoForm>
    )
}

export default ProductForm
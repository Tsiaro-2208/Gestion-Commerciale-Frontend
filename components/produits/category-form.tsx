import { useCategory } from "@/hooks/use-category";
import AutoForm, { AutoFormSubmit } from "../ui/auto-form";
import { Category, categorySchema } from "@/schemas/product-schema";
import { toast } from "sonner";

const CategoryForm = ({ onOpenChange }: { onOpenChange: (open: boolean) => void }) => {

    const { create, isLoading } = useCategory();

    const onSubmit = async (data: Category) => {
        try {
            await create(data)
            toast.success("Catégorie ajoutée avec succès")
            onOpenChange(false)
        } catch (error) {
            toast.error("Une erreur est survenue")
        }
    }

    return (
        <AutoForm
            formSchema={categorySchema}
            onSubmit={(data) => onSubmit(data)}
            fieldConfig={{
                name: {
                    label: "Nom"
                }
            }}
        >
            <AutoFormSubmit className="w-full">{isLoading ? "Enregistrement..." : "Enregistrer"}</AutoFormSubmit>
        </AutoForm>
    )
}

export default CategoryForm
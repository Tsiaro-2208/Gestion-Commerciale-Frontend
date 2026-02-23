'use client'
import AutoForm, { AutoFormSubmit } from '../ui/auto-form'
import { tierSchema } from '@/schemas/tier-schema'
import { useTiers } from '@/hooks/use-tiers'
import { TierType } from '@/lib/services/tier.service'
import { toast } from 'sonner'

const TierForm = ({ type, setOpen, initialData }: { type: TierType, setOpen: (open: boolean) => void, initialData?: any }) => {
    const { create, update, isLoading } = useTiers()

    const onSubmit = async (data: any) => {
        const dataToSave = {
            ...initialData,
            ...data,
            type: type
        }
        try {
            if (initialData?.id) {
                await update({ id: initialData.id, data: dataToSave });
                toast.success("Tiers modifié avec succès")
            } else {
                await create(dataToSave);
                toast.success("Tiers enregistré avec succès")
            }
            setOpen(false)
        } catch (error) {
            toast.error("Une erreur s'est produite")
        }
    }
    return (
        <AutoForm formSchema={tierSchema} values={initialData} onSubmit={(data) => onSubmit(data)}>
            <AutoFormSubmit className='w-full'>Enregistrer</AutoFormSubmit>
        </AutoForm>
    )
}

export default TierForm
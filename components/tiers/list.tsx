'use client'

import { useState } from 'react'
import { useTiers } from '@/hooks/use-tiers'
import { Tier, TierType } from '@/lib/services/tier.service'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Edit, Trash2, Search, FilterX } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import TierForm from './form'
import { toast } from 'sonner'
import Loading from '../loading'

interface TierListProps {
    type: TierType
}

export default function TierList({ type }: TierListProps) {
    const { data: tiers, isLoading, delete: removeTier } = useTiers()

    const [searchTerm, setSearchTerm] = useState('')
    const [filterEmail, setFilterEmail] = useState('')
    const [filterPhone, setFilterPhone] = useState('')

    const [editMode, setEditMode] = useState(false)
    const [selectedTier, setSelectedTier] = useState<Tier | null>(null)

    const handleDelete = async (id: string) => {
        if (confirm("Voulez-vous vraiment supprimer cet élément ?")) {
            try {
                await removeTier(id)
                toast.success("Supprimé avec succès")
            } catch (error) {
                toast.error("Erreur lors de la suppression")
            }
        }
    }

    const openEdit = (tier: Tier) => {
        setSelectedTier(tier)
        setEditMode(true)
    }

    const filteredTiers = tiers?.filter(t => t.type === type &&
        (searchTerm === '' || t.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (filterEmail === '' || (t.email || '').toLowerCase().includes(filterEmail.toLowerCase())) &&
        (filterPhone === '' || (t.phone || '').toLowerCase().includes(filterPhone.toLowerCase()))
    )

    const clearFilters = () => {
        setSearchTerm('')
        setFilterEmail('')
        setFilterPhone('')
    }

    if (isLoading) return <Loading />

    return (
        <div className="w-full space-y-4 p-4">
            <div className="flex flex-col md:flex-row gap-4 bg-background p-4 rounded-lg shadow-sm border border-border">
                <div className="flex-1">
                    <Input
                        placeholder="Chercher par nom..."
                        className="pl-9 w-full"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex-1">
                    <Input
                        placeholder="Filtrer par email..."
                        className="w-full"
                        value={filterEmail}
                        onChange={(e) => setFilterEmail(e.target.value)}
                    />
                </div>
                <div className="flex-1">
                    <Input
                        placeholder="Filtrer par téléphone..."
                        className="w-full"
                        value={filterPhone}
                        onChange={(e) => setFilterPhone(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-start md:justify-end">
                    <Button variant="ghost" className="text-muted-foreground" onClick={clearFilters}>
                        <FilterX className="h-4 w-4 mr-2" /> Réinitialiser
                    </Button>
                </div>
            </div>

            <div className="bg-background rounded-lg shadow-sm border overflow-hidden mt-4">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-foreground uppercase bg-background border-b">
                            <tr>
                                <th className="px-6 py-3">Nom</th>
                                <th className="px-6 py-3">Email</th>
                                <th className="px-6 py-3">Téléphone</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTiers?.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="px-6 py-8 text-center text-foreground">
                                        Aucun résultat trouvé.
                                    </td>
                                </tr>
                            )}
                            {filteredTiers?.map((tier) => (
                                <tr key={tier.id} className="border-b hover:bg-background/60">
                                    <td className="px-6 py-4 font-medium text-foreground">{tier.name}</td>
                                    <td className="px-6 py-4">{tier.email}</td>
                                    <td className="px-6 py-4">{tier.phone}</td>
                                    <td className="px-6 py-4 flex items-center justify-end gap-2">
                                        <Button variant="outline" size="icon" className="h-8 w-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50" onClick={() => openEdit(tier)}>
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                        <Button variant="outline" size="icon" className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50" onClick={() => handleDelete(tier.id)}>
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <Dialog open={editMode} onOpenChange={setEditMode}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Modifier {type.toLowerCase()}</DialogTitle>
                    </DialogHeader>
                    {selectedTier && (
                        <TierForm
                            type={type}
                            setOpen={setEditMode}
                            initialData={selectedTier}
                        />
                    )}
                </DialogContent>
            </Dialog>
        </div>
    )
}

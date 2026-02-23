'use client'

import { UserPlus } from "lucide-react"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import TierForm from "./form"
import { TierType } from "@/lib/services/tier.service"
import { useState } from "react"

const TierHeader = ({ type }: { type: TierType }) => {

    const [open, setOpen] = useState(false)

    return (
        <div className='w-full flex justify-end gap-5 px-5 py-3'>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button><UserPlus />Ajouter un {type.toLowerCase()}</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Ajouter un {type.toLowerCase()}</DialogTitle>
                    </DialogHeader>
                    <TierForm type={type} setOpen={setOpen} />
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default TierHeader
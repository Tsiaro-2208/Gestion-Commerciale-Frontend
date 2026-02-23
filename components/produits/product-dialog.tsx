'use client'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog"

interface ProductDialogProps {
    children: React.ReactNode
    title: string
    description: string
    open: boolean
    onOpenChange: (open: boolean) => void
}


const ProductDialog = ({ children, title, description, open, onOpenChange }: ProductDialogProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                    {children}
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default ProductDialog
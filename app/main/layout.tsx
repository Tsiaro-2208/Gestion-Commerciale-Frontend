"use client"

import { usePathname } from "next/navigation"
import { AppSidebar } from "@/components/app-sidebar"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import React from "react"

const routeLabels: Record<string, string> = {
    main: "Gestion commerciale",
    devis: "Devis",
    "commandes-clients": "Commandes Clients",
    factures: "Factures",
    "commandes-fournisseurs": "Commandes Fournisseurs",
    "factures-fournisseurs": "Factures Fournisseurs",
    produits: "Produits",
    categories: "Catégories",
    mouvements: "Mouvements",
    clients: "Clients",
    fournisseurs: "Fournisseurs",
    parametres: "Paramètres",
}

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()
    const pathSegments = pathname.split("/").filter(Boolean)

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 data-[orientation=vertical]:h-4"
                        />
                        <Breadcrumb>
                            <BreadcrumbList>
                                {pathSegments.map((segment, index) => {
                                    const label = routeLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)
                                    const isLast = index === pathSegments.length - 1
                                    const href = `/${pathSegments.slice(0, index + 1).join("/")}`

                                    return (
                                        <React.Fragment key={href}>
                                            <BreadcrumbItem>
                                                {isLast ? (
                                                    <BreadcrumbPage>{label}</BreadcrumbPage>
                                                ) : (
                                                    <BreadcrumbLink href={href}>
                                                        {label}
                                                    </BreadcrumbLink>
                                                )}
                                            </BreadcrumbItem>
                                            {!isLast && <BreadcrumbSeparator className="hidden md:block" />}
                                        </React.Fragment>
                                    )
                                })}
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="w-full">
                    {children}
                </div>
            </SidebarInset>

        </SidebarProvider>
    )
}

export default MainLayout
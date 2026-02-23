"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  Command,
  Contact,
  CreditCard,
  FileText,
  Frame,
  GalleryVerticalEnd,
  LayoutDashboard,
  Map,
  Package,
  PieChart,
  Settings2,
  ShoppingCart,
  SquareTerminal,
  Tags,
  Truck,
  Users,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      title: "Tableau de Bord",
      url: "/main",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Ventes",
      url: "#",
      icon: ShoppingCart,
      items: [
        {
          title: "Devis",
          url: "/main/devis",
        },
        {
          title: "Commandes Clients",
          url: "/main/commandes-clients",
        },
        {
          title: "Factures",
          url: "/main/factures",
        },
      ],
    },
    {
      title: "Achats",
      url: "#",
      icon: CreditCard,
      items: [
        {
          title: "Commandes Fournisseurs",
          url: "/main/commandes-fournisseurs",
        },
        {
          title: "Factures Fournisseurs",
          url: "/main/factures-fournisseurs",
        },
      ],
    },
    {
      title: "Stocks",
      url: "#",
      icon: Package,
      items: [
        {
          title: "Produits",
          url: "/main/produits",
        },
        {
          title: "Mouvements",
          url: "/main/mouvements",
        },
      ],
    },
    {
      title: "Contacts",
      url: "#",
      icon: Users,
      items: [
        {
          title: "Clients",
          url: "/main/clients",
        },
        {
          title: "Fournisseurs",
          url: "/main/fournisseurs",
        },
      ],
    },
    {
      title: "Paramètres",
      url: "/main/parametres",
      icon: Settings2,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-linear-to-br from-[#146643] to-[#459c26] text-white">
                <Command className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-bold uppercase tracking-wide">Gestion</span>
                <span className="truncate text-xs text-muted-foreground uppercase font-medium">Commerciale</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

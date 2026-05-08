"use client";

import * as React from "react";
import TaskFlow from "./sidebar-header";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { TerminalSquareIcon, BookOpenIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  
  const items = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: <TerminalSquareIcon />,

    },
    {
      title: "My Tasks",
      url: "/dashboard/tasks",
      icon: <BookOpenIcon />,

    },
  ];
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className=" border-b">
        <Link href={"/"} className="data-">
          <TaskFlow />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton tooltip={item.title} asChild isActive={pathname === item.url}>
                  <Link href={item.url} className={'w-full flex items-center gap-3 px-3 py-5 rounded-lg duration-200 ease-in-out font-medium text-sm cursor-pointer '}>
                    {item.icon}
                    <span className="ml-2 text-primary">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

// ${isActive === true ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted'}
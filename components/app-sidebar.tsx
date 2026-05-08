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

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const items = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: <TerminalSquareIcon />,
      isActive: true,
    },
    {
      title: "My Tasks",
      url: "/dashboard/tasks",
      icon: <BookOpenIcon />,
      isActive: false,
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
              <SidebarMenuItem key={item.title} data-active={item.isActive}>
                <SidebarMenuButton tooltip={item.title} asChild >
                  <Link href={item.url} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg duration-200 ease-in-out font-medium text-sm cursor-pointer ${item.isActive === true ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted'}`}>
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
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

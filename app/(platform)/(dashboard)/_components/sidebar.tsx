"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { Accordion } from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";

interface SidebarProps {
  storageKey?: string;
}

export const Sidebar = ({ storageKey }: SidebarProps) => {
  storageKey = "t-sidebar";
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storageKey,
    {}
  );
  const { organization: activeOrganization, isLoaded: isLoadedOrg } =
    useOrganization();
  const { userMemberships, isLoaded: isLoadedOrgList } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });
  const defaultAccordionValue: string[] = Object.keys(expanded).reduce(
    (acc: string[], key: string) => {
      if (expanded[key]) {
        acc.push(key);
      }
      return acc;
    },
    []
  );

  const onExpand = (id: string) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [id]: !prevExpanded[id],
    }));
  };

  if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
    return (
      <>
        <Skeleton />
      </>
    );
  }
  return (
    <> 
    <div className="font-medium text-xs flex items-center mb-1">
      <span className="pl-4">Workspaces</span>
      <Button asChild type="button" size="icon" variant='ghost' className="ml-auto">
        <Link href="/select-org">
          <Plus className="h-4 w-4" />
        </Link>
      </Button>
    </div>
    <Accordion type="multiple">

    </Accordion>
    </>
  );
};

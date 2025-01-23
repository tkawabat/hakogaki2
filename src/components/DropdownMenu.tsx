"use client";

import React from 'react';
import { Button } from "@/components/ui/button"
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu"

interface DropdownMenuProps {
  label: string;
  items: { label: string; onClick: () => void }[];
}

const DropdownMenu = ({ label, items }: DropdownMenuProps) => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          {label}
        </Button>
      </MenuTrigger>
      <MenuContent>
        {items.map((item, index) => (
          <MenuItem key={index} value={item.label}>
            {item.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
        // {items.map((item, index) => (
        //   <MenuItem 
        //     key={index} 
        //     onClick={item.onClick}
        //     command={index === 0 ? '⌘T' : undefined}
        //   >
        //     {item.label}
  );
};

export default DropdownMenu;

"use client";

import { ListWithCards } from "@/types";
import { ElementRef } from "react";
import { ListHeader } from "./listHeader";
import { useRef, useState } from "react";
import { CardForm } from "./cardForm";

interface ListItemProps {
  id: string;
  data: ListWithCards;
  index: number;
}

export const ListItem = ({  data, index }: ListItemProps) => {
  const textareaRef = useRef<ElementRef<"textarea">>(null);

  const [isEditing, setIsEditing] = useState(false);

  const disableEditing = () => {
    setIsEditing(false);
  };

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      textareaRef.current?.focus();
    });
  };
  return (
    <li className="shrink-0 h-full w-[272px] select-none">
      <div className="w-full rounded-md bg-[#f1f2f4] shadow-md pb-2">
        <ListHeader onAddCard={enableEditing} data={data} />
        <CardForm
          ref={textareaRef}
          isEditing={isEditing}
          enableEditing={enableEditing}
          disableEditing={disableEditing}
          listId={data.id}
        />
      </div>
    </li>
  );
};

"use client";

import { ListWithCards } from "@/types";
import { List } from "@prisma/client";
import { ListForm } from "./listForm";
import { useEffect, useState } from "react";
import { ListItem } from "./listItem";

interface ListContainerProps {
  data: ListWithCards[];
  boardId: string;
}

export const ListContainer = ({ data, boardId }: ListContainerProps) => {
  const [orderedData, setOrderedData] = useState(data);

  useEffect(() => {
    setOrderedData(data);
  }, [data]);

  return (
    <ol className="flex gap-x-3 h-full">
      {orderedData.map((list, index) => {
        return <ListItem id={list.id} key={list.id} index={index} data={list} />;
      })}
      <div className="flex-shrink-0 w-1" />
      <ListForm />
    </ol>
  );
};

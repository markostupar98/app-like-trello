"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAction } from "@/hooks/useAction";
import { useCardModal } from "@/hooks/useCardModal";
import { copyCard } from "@/services/copyCard";
import { deleteCard } from "@/services/deleteCard";
import { CardWithList } from "@/types";
import { Copy, Trash } from "lucide-react";
import { useParams } from "next/navigation";
import { toast } from "sonner";

interface ServicesProps {
  data: CardWithList;
}

export const Services = ({ data }: ServicesProps) => {
  const params = useParams();
  const cardModal = useCardModal();

  const { execute: executeCopyCard, isLoading: isLoadingCopy } = useAction(
    copyCard,
    {
      onSuccess: (data) => {
        toast.success(`Card "${data.title}" copied`);
        cardModal.onClose();
      },
      onError: (error) => {
        toast.error(error);
      },
    }
  );

  const { execute: executeDeleteCard, isLoading: isLoadingDelete } = useAction(
    deleteCard,
    {
      onSuccess: (data) => {
        toast.success(`Card "${data.title}" deleted`);
        cardModal.onClose();
      },
      onError: (error) => {
        toast.error(error);
      },
    }
  );

  const onCopy = () => {
    const boardId = params.boardId as string;

    executeCopyCard({ id: data.id, boardId });
  };

  const onDelete = () => {
    const boardId = params.boardId as string;

    executeDeleteCard({ id: data.id, boardId });
  };

  return (
    <div className="space-y-2 mt-2">
      <p className="text-sm font-semibold"> Services</p>
      <Button
        disabled={isLoadingCopy}
        onClick={onCopy}
        variant="grey"
        className="w-full justify-start"
        size="inline"
      >
        <Copy className="w-4 h-4 mr-2" />
        Copy
      </Button>
      <Button
        disabled={isLoadingDelete}
        onClick={onDelete}
        variant="destructive"
        className="w-full justify-start"
        size="inline"
      >
        <Trash className="w-4 h-4 mr-2" />
        Delete
      </Button>{" "}
    </div>
  );
};

Services.Skeleton = function ServicesSkeleton() {
  return (
    <div className="space-y-2 mt-2">
      <Skeleton className="w-20 h-4 bg-neutral-200" />
      <Skeleton className="w-full h-8 bg-neutral-200" />
      <Skeleton className="w-full h-8 bg-neutral-200" />
    </div>
  );
};

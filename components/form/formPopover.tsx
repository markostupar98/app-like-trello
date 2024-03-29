"use client";

import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import { useAction } from "@/hooks/useAction";
import { createBoard } from "@/services/createBoard/index";
import { FormInput } from "./formInput";
import { FormSubmitButton } from "./formSubmitButton";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { toast } from "sonner";

interface FormPopoverProps {
  children: React.ReactNode;
  side?: "left" | "right" | "top" | "bottom";
  align?: "start" | "center" | "end";
  sideOffset?: number;
}

export const FormPopover = ({
  children,
  side = "bottom",
  sideOffset = 0,
  align,
}: FormPopoverProps) => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      toast.success("Board created");
      console.log({ data });
    },
    onError: (error) => {
      toast.error(error);
      console.log({ error });
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    execute({ title });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        align={align}
        sideOffset={sideOffset}
        side={side}
        className="w-80 pt-3"
      >
        <div className="text-sm font-medium text-center text-neutral-600 pb-4">
          Create Board
        </div>
        <PopoverClose>
          <Button
            className="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600"
            variant="ghost"
          >
            <X className="w-4 h-4" />
          </Button>
        </PopoverClose>
        <form action={onSubmit} className="space-y-4">
          <div className="space-y-4">
            <FormInput
              errors={fieldErrors}
              id="title"
              label="Board Name"
              type="text"
            />
          </div>
          <FormSubmitButton className="w-full" variant="primary">
            Create
          </FormSubmitButton>
        </form>
      </PopoverContent>
    </Popover>
  );
};

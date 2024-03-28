"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export const DeleteButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="delete" size="sm" disabled={pending}>
      Delete
    </Button>
  );
};

"use client";

import { createBoard } from "@/services/createBoard";
import { FromInput } from "./FormInput";
import { FormButton } from "./FormButton";
import { useAction } from "@/hooks/useAction";

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, "Success !!!");
    },
    onError: (error) => {
      console.error(error);
    },
  });
  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    execute({ title });
  };

  return (
    <form action={onSubmit}>
      <FromInput errors={fieldErrors} />
      <FormButton />
    </form>
  );
};

"use client";

import { createBoard } from "@/services/createBoard";
import { FormInput } from "@/components/form/formInput";
// import { FromInput } from "./FormInput";
import { useAction } from "@/hooks/useAction";
import { FormSubmitButton } from "@/components/form/formSubmitButton";

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
      <FormInput errors={fieldErrors} id="title" label="Board Name" />
      <FormSubmitButton className="mt-2" variant="primary">Save</FormSubmitButton>
    </form>
  );
};

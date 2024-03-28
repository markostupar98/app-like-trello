import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      variant="primary"
      className="mt-2 "
      type="submit"
      disabled={pending}
    >
      Submit
    </Button>
  );
};

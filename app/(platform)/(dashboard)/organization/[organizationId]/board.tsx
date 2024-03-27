import { Button } from "@/components/ui/button";
import { deleteBoard } from "@/services/deleteBoard";

interface BoardProps {
  title: string;
  id: string;
}

export const Board = ({ title, id }: BoardProps) => {
    const deleteBoardId = deleteBoard.bind(null, id)
  return (
    <form action={deleteBoardId} className="flex items-center gap-x-2">
      <p>Board name: {title}</p>
      <Button type="submit" variant="destructive" size='sm' className="rounded-md">
        Delete
      </Button>
    </form>
  );
};

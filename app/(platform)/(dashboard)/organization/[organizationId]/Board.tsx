import { deleteBoard } from "@/services/deleteBoard";
import { DeleteButton } from "./DeleteButton";

interface BoardProps {
  title: string;
  id: string;
}

export const Board = ({ title, id }: BoardProps) => {
    const deleteBoardId = deleteBoard.bind(null, id)
  return (
    <form action={deleteBoardId} className="flex items-center gap-x-2">
      <p>Board name: {title}</p>
     <DeleteButton />
    </form>
  );
};

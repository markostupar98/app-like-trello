import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { create } from "@/services/createBoard";
import { Board } from "./Board";
import { Form } from "./Form";

const OrganizationIdPage = async () => {
  const boards = await db.board.findMany();
  return (
    <div className="flex flex-col space-y-4">
      <Form/>
      <div className="space-y-2">
        {boards.map((board) => (
          <Board title={board.title} key={board.id} id={board.id} />
        ))}
      </div>  
    </div>
  );
};
export default OrganizationIdPage;

import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { create } from "@/services/createBoard";
import { Board } from "./board";

const OrganizationIdPage = async () => {
  const boards = await db.board.findMany();
  return (
    <div className="flex flex-col space-y-4">
      <form action={create}>
        <input
          id="title"
          name="title"
          required
          placeholder="Enter a board title"
          className="border-black border p-1"
        />
        <Button variant="primary" className="ml-4" type="submit">
          Submit
        </Button>
      </form>
      <div className="space-y-2">
        {boards.map((board) => (
          <Board title={board.title} key={board.id} id={board.id} />
        ))}
      </div>
    </div>
  );
};
export default OrganizationIdPage;

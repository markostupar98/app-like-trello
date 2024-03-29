import { FormPopover } from "@/components/form/formPopover";
import { Hint } from "@/components/hint";
import { HelpCircle, User2 } from "lucide-react";

export const BoardList = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center font-semibold text-lg text-neutral-700">
        <User2 className="h-6 w-6 mr-2" />
        Your boards
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <FormPopover sideOffset={10} side="right">
          <div>
            <div
              role="button"
              className="aspect-video relative h-full w-full bg-muted hover:opacity-75 transition rounded-md flex flex-col gap-y-1 items-center justify-center"
            >
              <p className="text-sm">Create new board</p>
              <span className="text-sm">5 remaining</span>
              <Hint
                sideOffset={40}
                description={`Free workspaces. Can have up to 5 open boards. For unlimited board you need to subscribe`}
              >
                <HelpCircle className="absolute bottom-2 right-2 h-[14px] w-[14px] " />
              </Hint>
            </div>
          </div>
        </FormPopover>
      </div>
    </div>
  );
};

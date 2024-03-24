"use client";

import { useAuth, UserButton, useUser } from "@clerk/nextjs";

const ProtectedPage = async () => {
  return (
    <div>
      <UserButton />
    </div>
  );
};
export default ProtectedPage;

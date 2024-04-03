import { ClerkProvider } from "@clerk/nextjs";
import {Toaster} from 'sonner'

import { ModalProvider } from "@/components/providers/ModalProvider";
import { QueryProvider } from "@/components/providers/queryProvider";


const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return <ClerkProvider>
    <QueryProvider>     
    <ModalProvider />
    <Toaster />
    {children}
    </QueryProvider>
    </ClerkProvider>;
};
export default PlatformLayout;

import { PropsWithChildren } from "react";
import {ThemeProvider} from "@/components/theme-provider";

export default function Providers({children}: PropsWithChildren){
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}

import {Loader2, LucideProps} from "lucide-react";
import {cn} from "@/lib/utils";

export function LoadingSpinner({className, ...props}: LucideProps) {
  return <Loader2 className={cn("animate-spin size-4", className)} {...props} />;
}

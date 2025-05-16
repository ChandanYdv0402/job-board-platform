import {LoadingSpinner} from "@/components/loading-spinner";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <main className="container my-20">
      {/* Custom loading spinner component with properties */}
      <LoadingSpinner />

      <Button className="mt-4" variant="outline">
        <LoadingSpinner />
        <span>Loading...</span>
      </Button>
    </main>
  );
}

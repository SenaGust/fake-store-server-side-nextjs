import { Button } from "@/components/button";
import { Letter } from "@solar-icons/react/ssr";

export default function Home() {
  return (
    <div className="font-lato min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gray-100">
      <Button variant="outline" size="sm">
        small outline
        <Letter />
      </Button>

      <Button variant="outline" size="md">
        <Letter />
        medium outline
      </Button>

      <Button variant="solid" size="sm">
        small solid
        <Letter />
      </Button>

      <Button variant="solid" size="md">
        <Letter />
        medium solid
      </Button>
    </div>
  );
}

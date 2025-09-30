import { Button } from "@/components/button";
import { Checkbox } from "@/components/checkbox";
import { Link } from "@/components/link";
import { Ratings } from "@/components/ratings";
import { Letter } from "@solar-icons/react/ssr";

export default function Home() {
  return (
    <div className="font-lato min-h-screen p-8 pb-20 sm:p-20 flex flex-col gap-4">
      <h1 className="text-2xl mb-4">Style guide</h1>

      <h2 className="text-xl mb-1">Ratings</h2>

      <Ratings rating={0} />

      <Ratings rating={3} />

      <h2 className="text-xl mb-1">Checkboxes</h2>

      <Checkbox label="Checkbox" checked={true} readOnly />

      <Checkbox label="Checkbox" checked={false} readOnly />

      <h2 className="text-xl mb-1">Buttons</h2>

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

      <h2 className="text-xl mb-1">Links</h2>

      <Link href="/">
        <Letter />
        Placeholder
        <Letter />
      </Link>
    </div>
  );
}

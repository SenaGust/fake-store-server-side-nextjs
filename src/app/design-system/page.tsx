import { Button } from "@/components/common/button";
import { Checkbox } from "@/components/common/checkbox";
import { Link } from "@/components/common/link";
import { Ratings } from "@/components/common/ratings";
import { TextInput } from "@/components/common/text-input";
import { Letter, Eye } from "@solar-icons/react/ssr";

export default function Home() {
  return (
    <div className="font-lato min-h-screen p-8 pb-20 sm:p-20 flex flex-col gap-4">
      <h1 className="text-2xl mb-4">Style guide</h1>

      <h2 className="text-xl mb-1">Text Inputs</h2>

      <h3 className="text-lg mb-1">Default</h3>

      <TextInput
        label="Text Input"
        leftIcon={<Letter />}
        rightIcon={<Eye />}
        placeholder="Placeholder"
        helperText="Helper text"
      />

      <h3 className="text-lg mb-1">Without icons</h3>

      <TextInput
        label="Text Input"
        hasError
        leftIcon={<Letter />}
        rightIcon={<Eye />}
        helperText="Helper text"
        placeholder="Placeholder"
      />

      <h2 className="text-xl mb-1">Ratings</h2>

      <Ratings rating={3} readOnly />

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

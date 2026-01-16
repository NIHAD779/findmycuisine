import { EinkContainer } from "./components/ui/EinkContainer";
import { EinkTitle } from "./components/ui/EinkTitle";
import { EinkSearchBox } from "./components/ui/EinkSearchBox";

export default function Home() {
  return (
    <EinkContainer>
      <div className="flex flex-col items-center gap-8">
        <EinkTitle>Find My Cuisine</EinkTitle>
        <EinkSearchBox placeholder="Search for a cuisine..." />
      </div>
    </EinkContainer>
  );
}

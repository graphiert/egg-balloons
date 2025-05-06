import Ingredients from "./sections/ingredients";
import Intro from "./sections/intro";
import Prologue from "./sections/prologue";

export default function App() {
  return (
    <div className="p-4">
      <Prologue />
      <Intro />
      <Ingredients />
    </div>
  );
}

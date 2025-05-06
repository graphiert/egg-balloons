import Ingredients from "./sections/ingredients";
import Intro from "./sections/intro";
import Prologue from "./sections/prologue";
import Report from "./sections/table-report";

export default function App() {
  return (
    <div className="p-4 bg-slate-400 snap-y snap-mandatory h-screen overflow-y-scroll">
      <Prologue />
      <Intro />
      <Ingredients />
      <Report />
    </div>
  );
}

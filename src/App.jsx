import { useEffect } from "react";
import AOS from "aos";
import Ingredients from "./sections/ingredients";
import Intro from "./sections/intro";
import Prologue from "./sections/prologue";
import Report from "./sections/table-report";
import Ending from "./sections/ending";

export default function App() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className="p-4 bg-slate-400 snap-y snap-mandatory h-screen overflow-y-scroll">
      <Prologue />
      <Intro />
      <Ingredients />
      <Report />
      <Ending />
    </div>
  );
}

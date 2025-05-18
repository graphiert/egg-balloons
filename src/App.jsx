import { useEffect, useRef } from "react";

import { yapping } from "./lib"

import Prologue from "./sections/prologue";
import Intro from "./sections/intro";
import Ingredients from "./sections/ingredients";
import TableReport from "./sections/table-report";
import Report from "./sections/report";
import Docs from "./sections/docs";
import Ending from "./sections/ending";

export default function App() {
  const containerRef = useRef(null);
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      e.key == "ArrowDown" || e.key == "ArrowRight"
        ? containerRef.current.scrollBy({
            top: window.innerHeight,
            behavior: "smooth",
          })
        : e.key == "ArrowUp" || e.key == "ArrowLeft"
        ? containerRef.current.scrollBy({
            top: -window.innerHeight,
            behavior: "smooth",
          })
        : null;
    });
    // alert(yapping);
  }, []);

  return (
    <main
      ref={containerRef}
      className="p-4 bg-slate-400 snap-y snap-mandatory h-screen overflow-y-scroll"
    >
      <Prologue />
      <Intro />
      <Ingredients />
      <TableReport />
      <Report />
      <Docs />
      <Ending />
    </main>
  );
}

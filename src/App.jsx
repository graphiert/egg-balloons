import { useEffect, useRef } from "react";

// import { yapping } from "./lib"

import Prologue from "./sections/prologue";
import Intro from "./sections/intro";
import Ingredients from "./sections/ingredients";
import TableReport from "./sections/table-report";
import FirstQuestion from "./sections/first-question";
import SecondQuestion from "./sections/second-question";
import Report from "./sections/report-row";
import Conclusion from "./sections/conclusion";
import Docs from "./sections/docs";

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
      <Prologue withAnimate />
      <Intro />
      <Ingredients />
      <TableReport />
      <FirstQuestion />
      <SecondQuestion />
      <Report />
      <Conclusion />
      <Docs />
      <Prologue />
    </main>
  );
}

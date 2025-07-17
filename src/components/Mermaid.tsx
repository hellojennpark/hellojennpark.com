"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

mermaid.initialize({ startOnLoad: false });

export default function Mermaid({ chart }: { chart: string }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      try {
        mermaid.parse(chart); // Validate chart syntax
        (ref.current as HTMLElement).removeAttribute("data-processed");
        (ref.current as HTMLElement).innerHTML = chart;
        mermaid.init(undefined, ref.current as HTMLElement);
      } catch (error) {
        (
          ref.current as HTMLElement
        ).innerHTML = `<pre style="color: red;">${String(error)}</pre>`;
      }
    }
  }, [chart]);

  return (
    <div className="mermaid-container">
      <div ref={ref} className="mermaid" />
    </div>
  );
}

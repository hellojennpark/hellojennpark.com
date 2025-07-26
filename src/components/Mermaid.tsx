"use client";

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

// Initialize Mermaid with minimal configuration
mermaid.initialize({
  startOnLoad: false,
  theme: "default",
  flowchart: { useMaxWidth: true },
  securityLevel: "loose",
});

// Counter for unique IDs
let idCounter = 0;

export default function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const uniqueId = `mermaid-${idCounter++}`;

  useEffect(() => {
    if (!ref.current) return;

    const renderMermaid = async () => {
      try {
        // Validate chart syntax
        await mermaid.parse(chart);

        // Render the chart to SVG
        const { svg } = await mermaid.render(`mermaid-svg-${uniqueId}`, chart);

        // Update the DOM with the rendered SVG
        if (ref.current) {
          ref.current.innerHTML = svg;
        }
      } catch (err) {
        console.error("Mermaid rendering error:", err);
        setError(String(err));
      }
    };

    // Defer rendering until the component is mounted
    renderMermaid();

    // Cleanup
    return () => {
      if (ref.current) {
        ref.current.innerHTML = "";
      }
    };
  }, [chart, uniqueId]);

  return (
    <div id={uniqueId} className="mermaid-container">
      {error ? (
        <pre style={{ color: "red", padding: "10px" }}>
          Mermaid Error: {error}
        </pre>
      ) : (
        <div ref={ref} className="mermaid" />
      )}
      <style jsx>{`
        .mermaid-container {
          margin: 20px 0;
          padding: 10px;
          overflow-x: auto;
          isolation: isolate; /* Ensure CSS isolation */
        }
        .mermaid {
          min-height: 200px;
          width: 100%;
        }
        .mermaid svg {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
}

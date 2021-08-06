import React, { useEffect } from "react";
import mermaid from "mermaid";

const DEFAULT_CONFIG = {
  startOnLoad: true,
  logLevel: "fatal",
  securityLevel: "strict",
  arrowMarkerAbsolute: false,
  flowchart: {
    htmlLabels: true,
    curve: "linear",
  },
  sequence: {
    diagramMarginX: 50,
    diagramMarginY: 10,
    actorMargin: 50,
    width: 150,
    height: 65,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    mirrorActors: true,
    bottomMarginAdj: 1,
    useMaxWidth: true,
    rightAngles: false,
    showSequenceNumbers: true,
    fontFamily: '"Jet Brains Mono", "sans-serif"',
  },
  themeVariables: {
    lineColor: "#ffffff",
    textColor: "#ffffff",
    primaryColor: "#ffffff",
  },
};

interface MermaidProps {
  name: string;
  chart: string;
  config: Record<string, unknown>;
}

const Mermaid = ({ name, chart, config }: MermaidProps): JSX.Element => {
  mermaid.initialize({ ...DEFAULT_CONFIG, ...config });

  useEffect(() => {
    mermaid.contentLoaded();
  });

  if (!chart) return null;
  return (
    <div className="mermaid" name={name}>
      {chart}
    </div>
  );
};

export default Mermaid;

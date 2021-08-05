import React, { useEffect } from "react";
import mermaid from "mermaid";

const DEFAULT_CONFIG = {
  startOnLoad: true,
  theme: "forest",
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
  gantt: {
    titleTopMargin: 25,
    barHeight: 20,
    barGap: 4,
    topPadding: 50,
    leftPadding: 75,
    gridLineStartPadding: 35,
    fontSize: 11,
    fontFamily: '"Open-Sans", "sans-serif"',
    numberSectionStyles: 4,
    axisFormat: "%Y-%m-%d",
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

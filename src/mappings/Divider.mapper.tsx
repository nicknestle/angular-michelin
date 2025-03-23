import {
  figmaMapping,
  html,
  type BaseFigmaProps,
} from "@builder.io/dev-tools/figma";

// ❖ Divider
interface FigmaDividerProps extends BaseFigmaProps {
  "Property 1"?: "Horizontal ➡️" | "Vertical ⬇️";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "9f0a907332636a8e39e9b86609b470d202d947de",
  mapper(figma: FigmaDividerProps) {
    const props = {
      vertical: figma["Property 1"] === "Vertical ⬇️",
    };
    return html`<mat-divider vertical="${props.vertical}"></mat-divider>`;
  },
});

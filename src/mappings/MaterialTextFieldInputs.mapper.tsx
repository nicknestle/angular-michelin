import {
  figmaMapping,
  type BaseFigmaProps,
  html,
} from "@builder.io/dev-tools/figma";

// ❖ Material Text field / Inputs
interface FigmaMaterialTextFieldInputsProps extends BaseFigmaProps {
  "Label text"?: string;
  "Show supporting text"?: boolean;
  "Input text"?: string;
  "Trailing Icon"?: boolean;
  Text?: string;
  Style?: "Filled" | "Outlined";
  State?: "Enabled" | "Hovered" | "Focused" | "Error" | "Disabled";
  "Text configurations"?: "Input text" | "Label text" | "Placeholder text";
  "Leading icon"?: "False" | "True";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "2555a30a216197cdd4da2bc7f212a106b3b51af0",
  mapper(figma: FigmaMaterialTextFieldInputsProps) {
    // Extract text content
    const labelText =
      figma["Label text"] ??
      figma.$findOneByName("Label text")?.$textContent ??
      "";

    const inputText =
      figma["Input text"] ??
      figma.$findOneByName("Input text")?.$textContent ??
      "";

    const supportingText =
      figma.$findOneByName("supporting-text")?.$textContent ?? "";

    // Map Figma state to component state
    const stateMap = {
      Enabled: "enabled",
      Hovered: "hovered",
      Focused: "focused",
      Error: "error",
      Disabled: "disabled",
    };

    // Map style variant
    const variant = figma.Style?.toLowerCase() ?? "filled";

    return html` <input
      matInput
      label=${labelText}
      value=${inputText}
      variant=${variant}
      state=${stateMap[figma.State ?? "Enabled"]}
      supportingText=${figma["Show supporting text"]
        ? supportingText
        : undefined}
      trailingIcon=${figma["Trailing Icon"]
        ? `<mat-icon name=${figma.$findOneByName(" Icon")?.$textContent} />`
        : undefined}
    />`;
  },
});

import {
  figmaMapping,
  html,
  type BaseFigmaProps,
} from "@builder.io/dev-tools/figma";
import { DropdownComponent } from "@michelin/theme";

// ❖ Material Input Dropdown
interface FigmaMaterialInputDropdownProps extends BaseFigmaProps {
  Type?: "Input" | "Button dropdown";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "5579894bae08cc8ce6a60ec31f569f64b3ca05e3",
  mapper(figma: FigmaMaterialInputDropdownProps) {
    // Extract text content
    const labelText = figma.$findOneByName("Label text")?.$textContent;
    const placeholderText =
      figma.$findOneByName("Placeholder text")?.$textContent;
    const supportingText =
      figma.$findOneByName("supporting-text")?.$textContent;

    return html`<michelin-dropdown
      label=${labelText}
      placeholder=${placeholderText}
      type=${figma.Type ?? "Input"}
    ></michelin-dropdown>`;
  },
});

import { figmaMapping, html, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { MatCheckbox } from "@angular/material/checkbox";

// ❖ Material Checkboxes
interface FigmaMaterialCheckboxesProps extends BaseFigmaProps {
  Type?:
    | "Selected"
    | "Unselected"
    | "Indeterminate"
    | "Error unselected"
    | "Error indeterminate"
    | "Error selected";
  State?: "Enabled" | "Hovered" | "Focused" | "Pressed" | "Disabled";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "0239925b061a8c584f663c0ee85dc5db0ef151df",
  mapper(figma: FigmaMaterialCheckboxesProps) {
    const isSelected = figma.Type === "Selected" || figma.Type === "Error selected";
    const isIndeterminate = figma.Type === "Indeterminate" || figma.Type === "Error indeterminate";
    const isError = figma.Type?.includes("Error") ?? false;
    const isDisabled = figma.State === "Disabled";
    
    // Additional attributes for styling based on state
    const attributes = {
      ...(isDisabled && { disabled: true }),
      ...(isIndeterminate && { indeterminate: true }),
      ...(isSelected && { checked: true }),
      ...(isError && { color: 'warn' }),
      class: figma.State?.toLowerCase() !== 'disabled' && figma.State?.toLowerCase() !== 'enabled' 
        ? `mat-checkbox-${figma.State?.toLowerCase()}` 
        : ''
    };
    
    const attributesString = Object.entries(attributes)
      .filter(([_, value]) => value !== undefined && value !== '')
      .map(([key, value]) => {
        if (typeof value === 'boolean') {
          return value ? key : '';
        }
        return `${key}="${value}"`;
      })
      .filter(Boolean)
      .join(' ');
    
    console.log(attributesString)

    return html`<mat-checkbox ${attributesString} />`;
  },
});

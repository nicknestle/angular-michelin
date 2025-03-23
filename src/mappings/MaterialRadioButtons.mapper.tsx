import {
  figmaMapping,
  html,
  type BaseFigmaProps,
} from "@builder.io/dev-tools/figma";

// ❖ Material Radio buttons
interface FigmaMaterialRadioButtonsProps extends BaseFigmaProps {
  Selected?: "True" | "False";
  State?: "Enabled" | "Hovered" | "Focused" | "Pressed" | "Disabled";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "0baa78ac878ee30dc670267406d67d4ee4503c58",
  mapper(figma: FigmaMaterialRadioButtonsProps) {
    const isDisabled = figma.State === "Disabled";

    return html`<mat-radio-group disabled=${isDisabled}/>
      <mat-radio-button value="1">Option 1</mat-radio-button>
      <mat-radio-button value="2">Option 2</mat-radio-button>
    </mat-radio-group>`;
  },
});

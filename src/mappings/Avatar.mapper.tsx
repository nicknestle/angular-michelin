import { figmaMapping, html, type BaseFigmaProps } from "@builder.io/dev-tools/figma";

// ❖ Avatar
interface FigmaAvatarProps extends BaseFigmaProps {
  Size?: "Large (Profile)" | "Medium (Menu)" | "Small (List)";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "31980984fd9c1c5cc1a0126013ce85e92134330a",
  mapper(figma: FigmaAvatarProps) {
    const sizeMap = {
      "Large (Profile)": "lg",
      "Medium (Menu)": "md",
      "Small (List)": "sm",
    };

    return html`<img mat-card-avatar size=${sizeMap[figma.Size ?? "Medium (Menu)"]}></mat-avatar>`;
  },
});
